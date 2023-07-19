import React, { useEffect, useRef, useState } from "react";

import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import Modal from "@mui/material/Modal";
import CircularProgress from "@mui/material/CircularProgress";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { PaginationItem } from "@mui/material";
import { Link, useLocation, useParams } from "react-router-dom";

const modules = [
     "Introduction to Microsoft Azure and Its Services", "Azure Virtual Machines and Networking", "Azure VMSS and Availability Zones", "Azure App Services and Its Features", "Advanced Azure Hybrid Connectivity and Site Recovery", "Azure Storage Solution and Design Patterns", "Azure Kubernetes Service", "Azure Active Directory and Role Based Access Control", "Azure Messaging Service (Events, Hubs, Queue and Bus)", "Azure Monitoring and Insights Service", "Design Identity & Security & Design Storage", "Design Azure Migration",
];

const CourseContent = () => {
     const { page } = useParams();
     const pageNumber = parseInt(page, 10);
     const [anchorEl, setAnchorEl] = useState(null);
     const [uploading, setUploading] = useState(false);
     const [progress, setProgress] = useState(0);
     const [selectedFiles, setSelectedFiles] = useState([]);
     const fileInputRef = useRef(null);
     const [uploadedFiles, setUploadedFiles] = useState([]);
     const [courseId, setCourseId] = useState('');
     const [description, setDescription] = useState('');
     const [chapterid, SetChapterid] = useState('');
     const [coursecontent, SetCourseContent] = useState([]);
     const location = useLocation();
     const { pathname } = location;

     // Get the current path from the location object
     const currentPath = location.pathname;

     fileInputRef.folder = useRef(null);
     fileInputRef.file = useRef(null);
     fileInputRef.video = useRef(null);
     fileInputRef.docs = useRef(null);

     useEffect(() => {
          const storedFiles = sessionStorage.getItem("uploadedFiles");
          if (storedFiles) {
               setUploadedFiles(JSON.parse(storedFiles));
          }
     }, []);

     useEffect(() => {
          sessionStorage.setItem("uploadedFiles", JSON.stringify(uploadedFiles));
     }, [uploadedFiles]);

     const predefinedPath = 'E:\\project_syncfusion_dashboard-main\\src\\ContentsProvider';

     const handleFileChange = (event) => {
          const files = Array.from(event.target.files);
          const videoFiles = files.filter((file) => file.type.includes("video/"));
          const documentFiles = files.filter((file) => {
               const fileType = file.type.toLowerCase();
               const fileExtension = file.name.split(".").pop().toLowerCase();
               const allowedExtensions = ["doc", "docx", "pdf", "ppt", "pptx", "xlsx", "xls", "txt", "csv", "tsv", "csv2"];

               return (
                    fileType.startsWith("application/") &&
                    allowedExtensions.includes(fileExtension)
               );
          });

          const folderFiles = files.filter((file) => file.webkitRelativePath.includes('/'));

          const fileUploads = folderFiles.map((file) => {
               const filePathParts = file.webkitRelativePath.split('/');
               const fileName = filePathParts[filePathParts.length - 1];
               const fileExtension = fileName.split('.').pop();

               const filePath = predefinedPath + '\\' + fileName;
               console.log('File path:', filePath);

               return {
                    file: file, fileName: fileName, fileExtension: fileExtension, filePath: filePath
               };
          });

          setSelectedFiles([...videoFiles, ...documentFiles, ...folderFiles, ...fileUploads]);
          setUploadedFiles([...videoFiles.map((file) => file.name), ...documentFiles.map((file) => file.name), ...folderFiles.map((file) => file.name), ...fileUploads.map((file) => file.name)]);
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          if (selectedFiles.length === 0) {
               return;
          }
          setUploading(true);
          setProgress(0);
          const totalFiles = selectedFiles.length;
          let uploadedFiles = 0;

          const updateProgress = () => {
               const percentage = (uploadedFiles / totalFiles) * 100;
               setProgress(percentage);
               if (uploadedFiles === totalFiles) {
                    setUploading(false);
               }
          };

          selectedFiles.forEach((file) => {
               setTimeout(() => {
                    uploadedFiles++;
                    updateProgress();
               }, 1000);
          });

          const formData = new FormData();
          selectedFiles.forEach((file) => {
               formData.append("files", file);
          });

          formData.append("courseId", courseId);
          formData.append("description", description);
          formData.append("chapterid", chapterid)
          formData.append("predefinedPath", predefinedPath);

          console.log("courseId:", courseId);
          console.log("chapterid:", chapterid);
          console.log("description:", description);
          console.log("fileName:", selectedFiles[0].name);
          console.log("predefinedPath:", predefinedPath);

          fetch("/course-content", {
               method: "POST",
               body: formData,
          })
               .then((response) => {
                    if (response.ok) {
                    } else {
                         throw new Error("Upload failed");
                    }
               })
               .catch((error) => {
               });
          setSelectedFiles([]);
     };
     const handleAddIconClick = (event) => {
          setAnchorEl(event.currentTarget);
     };

     const handleMenuItemClick = () => {
          fileInputRef.current.click();
          setAnchorEl(null);
     };

     const handleCloseMenu = () => {
          setAnchorEl(null);
     };

     useEffect(() => {
          fetchcoursecontent();
     }, []);

     const fetchcoursecontent = async () => {
          try {
               const response = await fetch("/get-courseContent");
               const data = await response.json();
               console.log("data = ", data); // Log the data variable
               SetCourseContent(data.recordset);
               console.log("dataRecordset = ", data.recordset); // Log the data variable
          } catch (error) {
               console.log(error);
          }
     };



     return (
          <>
               <div className="card cardelement10">
                    <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 no-padding curriculumcontentsec">
                         <div class="tab-content">
                              <router-outlet></router-outlet>
                              <app-curriculum-course-content _nghost-c50="" class="">
                                   <div _ngcontent-c50="" className="tab-pane" id="coursecontent" role="tabpanel">
                                        <div _ngcontent-c50="" className="col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding hidden-xs hidden-sm crscontdesktabmain">
                                             <mat-tab-group _ngcontent-c50="" class="crsconttabgrp mat-tab-group mat-primary">
                                                  <Stack spacing={2} sx={{ width: "100%", marginTop: "20px", marginLeft: "100px", }}>
                                                       <Pagination count={12} color="primary" renderItem={(item) => (
                                                            <PaginationItem component={Link} to={`/my-classroom/coursecontent/page/${item.page}`} {...item} />)}
                                                       />
                                                  </Stack>
                                                  <div class="mat-tab-body-wrapper">
                                                       <mat-tab-body class="mat-tab-body ng-tns-c32-98 mat-tab-body-active" role="tabpanel" id="mat-tab-content-9-0" aria-labelledby="mat-tab-label-9-0" >
                                                            <div className="mat-tab-body-content ng-trigger ng-trigger-translateTab" style={{ transform: "none" }}>
                                                                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 modulecontmain" >
                                                                      <h2 class="moduletitle">
                                                                           <span class="modulecount">
                                                                                <span>{pageNumber}</span>
                                                                           </span>
                                                                           <span class="modulename">
                                                                                {modules[pageNumber - 1]}
                                                                           </span>
                                                                      </h2>
                                                                      <p class="moduleintro">
                                                                           In this module, you will learn about the Creation of a Free Tier Azure Account, accessing Azure Services through Azure Portal and Azure Storage Service. You will gain knowledge of ARM Templates and learn to use them for deploying Azure resources.
                                                                      </p>
                                                                      <div className="coursecontmain">
                                                                           <a href="/view-recording" className="courseconttile">
                                                                                <div className="courseconthead">
                                                                                     <div className="coursetitlesec">
                                                                                          <span className="iconmain">
                                                                                               <PlayCircleFilledWhiteOutlinedIcon style={{ color: "grey" }} />
                                                                                          </span>
                                                                                          <span className="coursetitle">className {pageNumber} Recording
                                                                                          </span>
                                                                                     </div>
                                                                                     <div className="modulestatussec">
                                                                                          <span className="status_blue">Viewed
                                                                                          </span>
                                                                                     </div>
                                                                                </div>
                                                                                <p className="coursecontdesc" id="link-1584129">2023-03-25
                                                                                </p>
                                                                           </a>
                                                                      </div>
                                                                      {coursecontent.map((course) => {
                                                                           console.log('course.ChapterID:', course.ChapterID);
                                                                           console.log('pathname.slice(-1):', pathname.slice(-1));
                                                                           console.log('pathname.slice(-1) === course.ChapterID:', pathname.slice(-1) === course.ChapterID);

                                                                           if (pathname.slice(-1) === course.ChapterID) {
                                                                                console.log('Inside if condition');
                                                                           }

                                                                           // Extracting file extension from FileName
                                                                           const fileExtension = course.FileName.split('.').pop();

                                                                           return (
                                                                                pathname.slice(-1) === course.ChapterID && (
                                                                                     <div className="coursecontmain" key={course.ChapterID}>
                                                                                          <a href="/view-recording" className="courseconttile">
                                                                                               <div className="courseconthead">
                                                                                                    <div className="coursetitlesec">
                                                                                                         <span className="iconmain">
                                                                                                              {(fileExtension === 'webm' || fileExtension === 'mp4' || fileExtension === 'mkv') && (
                                                                                                                   <PlayCircleFilledWhiteOutlinedIcon style={{ color: "grey" }} />
                                                                                                              )}
                                                                                                              {(fileExtension === 'pdf' || fileExtension === 'ppt' || fileExtension === 'docs' || fileExtension === 'csv' || fileExtension === 'pptx' || fileExtension === 'xls' || fileExtension === 'xlsx' || fileExtension === 'docx' || fileExtension === 'txt' || fileExtension === 'csv2' || fileExtension === 'tsv') && (
                                                                                                                   <LibraryBooksOutlinedIcon style={{ color: "grey" }} />
                                                                                                              )}
                                                                                                              {(fileExtension === 'zip' || fileExtension === 'rar') && (
                                                                                                                   <FolderCopyOutlinedIcon style={{ color: "grey" }} />
                                                                                                              )}
                                                                                                         </span>
                                                                                                         <span className="coursetitle">{course.Description}</span>
                                                                                                    </div>
                                                                                                    <div className="modulestatussec">
                                                                                                         <span className="status_blue">Viewed</span>
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
               <div className="card cardelementaddeditdelete">
                    <TextField classname="Textfield" required id="outlined-required" label="CourseID Required" defaultValue="" size="small" onChange={(e) => setCourseId(e.target.value)} />
                    <br />
                    <TextField classname="Textfield1" style={{ marginTop: "10px" }} required id="outlined-required" label="Chapter Number Required" defaultValue="" size="small" onChange={(e) => SetChapterid(e.target.value)} />
                    <br />
                    <TextField classname="Textfield1" style={{ marginTop: "10px" }} required id="outlined-required" label="Description Required" defaultValue="" size="small" onChange={(e) => setDescription(e.target.value)} />
                    <Box sx={{ "& > :not(style)": { m: 1 } }}>
                         <Fab color="primary" aria-label="add" onClick={handleAddIconClick}>
                              <AddIcon />
                         </Fab>
                         <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu} keepMounted>
                              <MenuItem>
                                   <label htmlFor="folder-upload-input">
                                        <input type="file" id="folder-upload-input" ref={fileInputRef.folder} style={{ display: "none" }} onChange={handleFileChange} directory="" webkitdirectory="" multiple />
                                        <FolderCopyOutlinedIcon sx={{ marginRight: 1 }} />
                                        <em>Folder upload</em>
                                   </label>
                              </MenuItem>
                              <MenuItem>
                                   <label htmlFor="file-upload-input">
                                        <input type="file" id="file-upload-input" ref={fileInputRef.file} style={{ display: "none" }} onChange={handleFileChange} multiple name="file" />
                                        <AddIcon sx={{ marginRight: 1 }} />
                                        <em>File upload</em>
                                   </label>
                              </MenuItem>
                              <MenuItem>
                                   <label htmlFor="video-upload-input">
                                        <input type="file" id="video-upload-input" ref={fileInputRef.video} style={{ display: "none" }} onChange={handleFileChange} accept=".mkv,.mp4,.webm" name="file" />
                                        <PlayCircleFilledWhiteOutlinedIcon sx={{ marginRight: 1 }} />
                                        <em>Video upload</em>
                                   </label>
                              </MenuItem>
                              <MenuItem>
                                   <label htmlFor="docs-upload-input">
                                        <input type="file" id="docs-upload-input" ref={fileInputRef.docs} style={{ display: "none" }} onChange={handleFileChange} accept=".doc,.docx,.pdf,.ppt,.pptx,.xlsx,.xls,.txt,.csv,.tsv,.csv2" multiple name="file" />
                                        <LibraryBooksOutlinedIcon sx={{ marginRight: 1 }} />
                                        <em>Docs upload</em>
                                   </label>
                              </MenuItem>
                         </Menu>
                         <Fab color="secondary" aria-label="edit">
                              <EditIcon />
                         </Fab>
                         <Button className="SubmitButton" variant="contained" size="medium" onClick={handleSubmit} onChange={handleFileChange} >
                              Submit
                         </Button>
                    </Box>
                    <Modal open={uploading} aria-labelledby="upload-modal-title" aria-describedby="upload-modal-description">
                         <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "background.paper", boxShadow: 24, p: 4 }}>
                              <CircularProgress variant="determinate" value={progress} />
                              <Box sx={{ mt: 2 }}>
                                   <p id="upload-modal-description">Uploading... {progress.toFixed(0)}%</p>
                              </Box>
                         </Box>
                    </Modal>
               </div>
          </>
     );
};

export default CourseContent;
