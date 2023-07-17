import React, { useState } from "react";
// import "./CloudComputing.css";
import { Button } from "@mui/material";
// import Rating from "@mui/material/Rating";
import { Divider } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useLocation } from "react-router";
import SubCourseCards from "./SubCourseCards";
import { makeStyles } from "@mui/styles";
import { useEffect } from "react";
import Mastercourse from "./Mastercourse";

const useStyles = makeStyles({
  listItem: {
    marginBottom: "10px",
  },
  loadMoreButton: {
    marginTop: "10px",
  },
});

const CloudComputing = () => {
  const location = useLocation();
  const { pathname } = location;
  const currentPath = location.pathname;

  const [mainmenu, setMainmenu] = useState([]);
  const [subcourse, setSubcourse] = useState([]);
  const [mastercourse, setmastercourse] = useState([]);
  const [showContactInfo, setShowContactInfo] = useState(false);

  const containerRef = React.useRef(null);
  const classes = useStyles();
  const [visibleItems, setVisibleItems] = useState(4);
  const showLessCount = 4;


  useEffect(() => {
    fetchmainmenu();
    fetchsubcourse();
    fetchmastercourse();
  }, []);

  const fetchmainmenu = async () => {
    try {
      const response = await fetch("/main-menu");
      const data = await response.json();
      setMainmenu(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchsubcourse = async () => {
    try {
      const response = await fetch("/subcourse");
      const data = await response.json();
      setSubcourse(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchmastercourse = async () => {
    try {
      const response = await fetch("/mastercourse");
      const data = await response.json();
      setmastercourse(data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleContactInfo = () => {
    setShowContactInfo((prevShowContactInfo) => !prevShowContactInfo);
  };

  return (
    <div className="bg-white">
      <section>
        <div className="banner">
          {mainmenu.map((course) => {
            if (pathname.slice(1) === course.category) {
              console.log("Inside if condition");
            }

            return (
              pathname.slice(1) === course.category && (
                <div className="relative z-10 flex gap-16 w-10/12 mx-auto" key={course.category}>
                  <div className="">
                    <h1 className="text-white lg:text-3xl">{course.tagheading}</h1>
                  </div>
                  <div className="text-white lg:text-lg text-left">
                    {course.tagtext}
                  </div>
                </div>
              )
            );
          })}
          <Button id="openButton" className="relative" onClick={toggleContactInfo}>
            Contact us
          </Button>
          <div
            id="message"
            className={showContactInfo ? "" : "hidden"}
            style={{ transform: showContactInfo ? "translateX(300px)" : "translateX(0)" }}
          >
            <p className="text-sm my-2">Call us for any query</p>
            <p className="text-blue-800 font-semibold">+91 89517 55408</p>
            <p className="text-xs text-neutral-500 my-1">Experts Available 24 x 7</p>
          </div>
        </div>
      </section>
      <div className="w-5/6 mx-auto mt-5 flex justify-between">
        <div>
          {mainmenu.map((course) => {
            if (pathname.slice(1) === course.category) {
              console.log("Inside if condition");
            }

            return (
              pathname.slice(1) === course.category && (
                <div className="text-3xl pt-5 font-medium" key={course.category}>
                  {course.mainmenuname} Bestseller Courses
                </div>)
            );
          })}
        </div>
        <div className="">
          <p className="uppercase bg-blue-900 text-white text-center text-xs p-0.5 ml-11">New Filter</p>
          <button className="bg-white text-blue-900 border border-blue-900 p-1.5">Career path <ArrowDropDownIcon /></button>
        </div>
      </div>
      <div className="mt-3">
        <Divider />
      </div>
      <div className="my-5">
        <section className="category-best-selling noprice">
          <div className="category-best-sellingcontainer">
            <div className="displaycards">
              {subcourse.map((course) => {
                if (pathname.slice(1) === course.category) {
                  console.log(
                    "pathname.slice(1) === course.category",
                    pathname.slice(1) === course.category
                  );
                }
                else {
                  console.log("Inside if condition");
                }
                return (
                  pathname.slice(1) === course.category && (
                    <SubCourseCards
                      subcourseid={course.subcourseid}
                      image={course.image}
                      subcoursename={course.subcoursename}
                      enrolledcustomers={course.enrolledcustomers}
                      sessionmodecategory={course.sessionmodecategory}
                      classmodecategory={course.classmodecategory}
                      batchstartdate={course.batchstartdate}
                      syllabus={course.syllabus}
                      coursecompletionrate={course.coursecompletionrate}
                    />
                  )
                );
              })}
            </div>
          </div>
        </section>
      </div>
    
      <div className="w-10/12 mx-auto">
        <div className="text-3xl">Career Related Programs</div>
        {mastercourse.map((course) => {
          if (pathname.slice(1) === course.category) {
            console.log(
              "pathname.slice(1) === course.category",
              pathname.slice(1) === course.category
            );
            console.log("Mastercourse is not displaying");
          }
          return (
            pathname.slice(1) === course.category && (
              <Mastercourse
                mainmenuid={course.mainmenuid}
                mastercourseid={course.mastercourseid}
                mastercoursename={course.mastercoursename}
                Reviews={course.Reviews}
                numberofcourses={course.numberofcourses}
                coursehours={course.coursehours}
                numberoflearners={course.numberoflearners}
                minicoursesyllabus={course.minicoursesyllabus}
                category={course.category}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default CloudComputing;
