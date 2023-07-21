//correct
import React, { useEffect, useRef, useState } from "react";
import "./CourseContent.css";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { PaginationItem } from "@mui/material";
import { Link, useLocation, useParams } from "react-router-dom";


const modules = [
  "Introduction to Microsoft Azure and Its Services",
  "Azure Virtual Machines and Networking",
  "Azure VMSS and Availability Zones",
  "Azure App Services and Its Features",
  "Advanced Azure Hybrid Connectivity and Site Recovery",
  "Azure Storage Solution and Design Patterns",
  "Azure Kubernetes Service",
  "Azure Active Directory and Role Based Access Control",
  "Azure Messaging Service (Events, Hubs, Queue and Bus)",
  "Azure Monitoring and Insights Service",
  "Design Identity & Security & Design Storage",
  "Design Azure Migration",
];

const CourseContent = () => {
  const { page } = useParams();
  const pageNumber = parseInt(page, 10);
  const [anchorEl, setAnchorEl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef({
    folder: null,
    file: null,
    video: null,
    docs: null,
  });
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [coursecontent, setCourseContent] = useState([]);
  const [loading, setLoading] = useState(true); // New state for loading indicator
  const location = useLocation();
  const { pathname } = location;
  const encodedCoursename = pathname.split("/").pop();
  const coursename = decodeURIComponent(encodedCoursename);
  const [paginationCount, setPaginationCount] = useState(12);
  const [viewedStatus, setViewedStatus] = useState({});
  const handleAddPagination = () => {
    setPaginationCount((prevCount) => prevCount + 1);
  };
  const predefinedPath =
    "E:\\project_syncfusion_dashboard-main\\ContentsProvider";
    
  useEffect(() => {
    const storedFiles = sessionStorage.getItem("uploadedFiles");
    if (storedFiles) {
      setUploadedFiles(JSON.parse(storedFiles));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("uploadedFiles", JSON.stringify(uploadedFiles));
  }, [uploadedFiles]);

  useEffect(() => {
    fetchCourseContent();
  }, []);

  const fetchCourseContent = async () => {
    try {
      const response = await fetch("/get-courseContent");
      const data = await response.json();
      console.log("datacoursecontent =", data);
      setCourseContent(data.recordset);
      console.log("datacoursecontent =", data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const isVideoViewed = sessionStorage.getItem("videoViewed") === "true";
  return (
    <>
      <div className="card cardelement10">
        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 no-padding curriculumcontentsec">
          <div className="tab-content">
            <router-outlet></router-outlet>
            <app-curriculum-course-content _nghost-c50="" className="">
              <div _ngcontent-c50="" className="tab-pane" id="coursecontent" role="tabpanel">
                <div _ngcontent-c50="" className="col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding hidden-xs hidden-sm crscontdesktabmain">
                  <mat-tab-group _ngcontent-c50="" className="crsconttabgrp mat-tab-group mat-primary">
                    <Stack spacing={2} sx={{ width: "100%", marginTop: "20px", marginLeft: "100px" }}>
                      <Pagination
                        count={paginationCount}
                        color="primary"
                        renderItem={(item) => (
                          <PaginationItem
                            component={Link}
                            to={`${location.pathname.startsWith('/homepage') ? '/homepage' : '/user_homepage'}/my-classroom/coursecontent/page/${item.page}/${coursename}`}
                            {...item}
                          />
                        )}
                      />
                    </Stack>
                    <div className="mat-tab-body-wrapper">
                      <mat-tab-body className="mat-tab-body ng-tns-c32-98 mat-tab-body-active" role="tabpanel" id="mat-tab-content-9-0" aria-labelledby="mat-tab-label-9-0">
                        <div className="mat-tab-body-content ng-trigger ng-trigger-translateTab" style={{ transform: "none" }}>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 modulecontmain">
                            <h2 className="moduletitle">
                              <span className="modulecount">
                                <span>{pageNumber}</span>
                              </span>
                              <span className="modulename">
                                {modules[pageNumber - 1]}
                              </span>
                            </h2>
                            <p className="moduleintro">
                              In this module, you will learn about the Creation of a Free Tier Azure Account, accessing Azure Services through Azure Portal and Azure Storage Service. You will gain knowledge of ARM Templates and learn to use them for deploying Azure resources.
                            </p>
                            {coursecontent.map((course) => {
                              const contentID = course.ContentID;
                              const isViewed = sessionStorage.getItem(`videoViewed_${contentID}`) === 'true';
                              console.log("course.ChapterID:", course.ChapterID);

                              let sliceStart, sliceEnd;

                              if (pathname.includes("/user_homepage")) {
                                sliceStart = pathname.lastIndexOf("/page/") + 6;
                                sliceEnd = pathname.lastIndexOf("/page/") + 7;
                              } else if (pathname.includes("/homepage")) {
                                sliceStart = pathname.lastIndexOf("/page/") + 6;
                                sliceEnd = pathname.lastIndexOf("/page/") + 7;
                              }
                              const sliceValue = pathname.slice(sliceStart, sliceEnd);
                              console.log(`pathname.slice(${sliceStart},${sliceEnd}):`, pathname.slice(sliceStart, sliceEnd));
                              console.log(`pathname.slice(${sliceStart},${sliceEnd}) === course.ChapterID:`, pathname.slice(sliceStart, sliceEnd) === course.ChapterID);

                              if (pathname.slice(sliceStart, sliceEnd) === course.ChapterID) {
                                console.log("Inside if condition");
                              }
                              // Extracting file extension from FileName
                              const fileExtension = course.FileName.split(".").pop();

                              return (
                                pathname.slice(sliceStart, sliceEnd) === course.ChapterID && (
                                  <div className="coursecontmain" key={course.ChapterID}>
                                    <a
                                      href={`${location.pathname.startsWith("/homepage") ? "/homepage" : "/user_homepage"}/view-recording/page/${sliceValue}/${coursename}`} className="courseconttile"
                                    >
                                      <div className="courseconthead">
                                        <div className="coursetitlesec">
                                          <span className="iconmain">
                                            {(fileExtension === "webm" || fileExtension === "mp4" || fileExtension === "mkv") && (
                                              <PlayCircleFilledWhiteOutlinedIcon style={{ color: "grey" }} />
                                            )}
                                            {(fileExtension === "pdf" || fileExtension === "ppt" || fileExtension === "docs" || fileExtension === "csv" || fileExtension === "pptx" || fileExtension === "xls" || fileExtension === "xlsx" || fileExtension === "docx" || fileExtension === "txt" || fileExtension === "csv2" || fileExtension === "tsv") && (
                                              <LibraryBooksOutlinedIcon style={{ color: "grey" }} />
                                            )}
                                            {(fileExtension === "zip" || fileExtension === "rar") && (
                                              <FolderCopyOutlinedIcon style={{ color: "grey" }} />
                                            )}
                                          </span>
                                          <span className="coursetitle">{course.Description}</span>
                                        </div>
                                        <div className="modulestatussec" key={contentID}>
                                          <span className={`status_${isViewed ? 'blue' : 'red'}`}>
                                            {isViewed ? 'Viewed' : 'Not Viewed'}
                                          </span>
                                        </div>
                                      </div>
                                      <p className="coursecontdesc" id="link-1584129">
                                        {new Date(course.DateTime).toLocaleDateString("en-US", {
                                          year: "numeric",
                                          month: "2-digit",
                                          day: "2-digit",
                                        })}
                                      </p>
                                    </a>
                                  </div>
                                )
                              );
                            })}
                          </div>
                        </div>
                      </mat-tab-body>
                    </div>
                  </mat-tab-group>
                </div>
              </div>
            </app-curriculum-course-content>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseContent;
