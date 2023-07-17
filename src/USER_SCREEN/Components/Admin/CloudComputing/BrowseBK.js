import React, { useState } from "react";
import "./BrowseCategory.css";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import { Button } from "@mui/material";
import { useLocation } from "react-router";
import SubCourseCards from "./SubCourseCards";
// import SubCourseCard2 from "./SubCourseCard2";
// import SubCourseCard3 from "./SubCourseCard3";
// import SubCourseCard4 from "./SubCourseCard4";
// import SubCourseCard5 from "./SubCourseCard5";
// import SubCourseCard6 from "./SubCourseCard6";
// import SubCourseCard7 from "./SubCoursecard7";
// import SubCourseCard8 from "./SubCourseCard8";
// import SubCourseCard9 from "./SubCourseCard9";
// import SubCourseCard10 from "./SubCourseCard10";
import { makeStyles } from "@mui/styles";
import { useEffect } from "react";

const useStyles = makeStyles({
  listItem: {
    marginBottom: "10px",
  },
  loadMoreButton: {
    marginTop: "10px",
  },
});

const Icon = (
  <div
    id="widget-contactus-content"
    className="widget-contactus-content"
  >
    <span
      className="widget-contactus-close widget-contactus-btn ga_learningPath"
    >
      Hide
    </span>
    <h4 className="advisor-txt">Call us for any query</h4>
    <div className="box_contact">
      <div className="call-now-txt">
        <a
          className="num countryChangeNumber"
          href="tel:+91 89517 55408"
          data-usnumber="+1385 257 4329"
          data-innumber="+91 89517 55408"
        >
          +91 89517 55408
        </a>
      </div>
      <div className="available-txt">Experts Available 24 x 7</div>
    </div>
  </div>
);

const BrowseCategory = () => {
  const location = useLocation();
  const { pathname } = location;
  const [mainmenu, setMainmenu] = useState([]);
  const [subcourse, setSubcourse] = useState([]);

  // Get the current path from the location object
  const currentPath = location.pathname;

  const [showContactInfo, setShowContactInfo] = useState(true);

  const handleContactClick = () => {
    // setShowContactInfo(current => !current);
    setShowContactInfo(true);
  };

  const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef(null);

  const handleClick = () => {
    setChecked((prev) => !prev);
  };

  // showless loadmore
  const classes = useStyles();
  const [visibleItems, setVisibleItems] = useState(4);
  const showLessCount = 4;

  const handleShowLess = () => {
    setVisibleItems(showLessCount);
  };

  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  useEffect(() => {
    fetchmainmenu();
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
  useEffect(() => {
    fetchsubcourse();
  }, []);

  const fetchsubcourse = async () => {
    try {
      const response = await fetch("/subcourse");
      const data = await response.json();
      console.log("datasubcourses =", data);
      setSubcourse(data);
      console.log("datasubcourses =", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <section className="category-pg-title">
          <div className="containerbox">
            {mainmenu.map((course) => {
              if (pathname.slice(1) === course.Category) {
                console.log("Inside if condition");
              }

              return (
                pathname.slice(1) === course.Category && (
                  <div className="row" key={course.Category}>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 titlemain">
                      <h1 className="title">{course.TagHeading}</h1>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 category-desc moree">
                      {course.TagText}
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </section>
      </div>

      {/* Contact Us
      className="widget-contactus-clp " */}
      <div className="widget-contactus-clp " style={{ zIndex: "1" }}>
        <Box sx={{ width: "200px" }}>
          <Button
            id="widget-contactus-btn"
            className="widget-contactus-open widget-contactus-btn ga_learningPath"
            onClick={handleClick}
          >
            contactus
          </Button>

          <Slide
            direction="right"
            in={checked}
            container={containerRef.current}
          >
            {Icon}
          </Slide>
        </Box>
      </div>

      {/* Cloud Computing Bestseller Courses   */}
      <div className="category-best-selling-header">
        <div className="container2">
          <div className="categoryfiltermain">
            <div className="categoryfilterwrapper">
            {mainmenu.map((course) => {
              if (pathname.slice(1) === course.Category) {
                console.log("Inside if condition");
              }

              return (
                pathname.slice(1) === course.Category && (
                <h2 className="catepage-title">
                 {course.MainMenuName} Bestseller Courses
                </h2> )
              );
            })}
              <section className="categoryfiltercontainer hidden-xs hidden-sm">
                <section className="categoryjobrolefiltermain">
                  <div className="dropdown categorynewfilterwithjobrole hidden-xs hidden-sm">
                    <button
                      className="dropdown-toggle trackButton"
                      type="button"
                      id="categoryfilterdropdown"
                      data-toggle="dropdown"
                    >
                      Career path
                      <i className="icon-down-arrow2"></i>
                      <span>NEW FILTER</span>
                    </button>
                  </div>
                </section>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* sub course cards */}
      {/* <div className="card"> */}
      <section className="category-best-selling noprice">
        <div className="category-best-sellingcontainer">
          <div className="displaycards">
            {/* style={{ height: "100%" }} */}
            {subcourse.map((course) => (
              <SubCourseCards
                subcourseid={course.subcourseid}
                image={course.image}
                subcoursename={course.subcoursename}
                enrolledcustomers={course.enrolledcustomers}
                sessionmodecategory={course.sessionmodecategory}
                classmodecategory={course.classmodecategory}
                batchstartdate={course.batchstartdate.slice(0, 10)}
                syllabus={course.syllabus}
                coursecompletionrate={course.coursecompletionrate}
              />
            ))}
          </div>
        </div>
      </section>

      <div class="load-more-btn-container best-seller-course">
        <a
          href="#/"
          class="load-more-course"
          data-item-variant="live"
          data-gi-action="Cloud Computing - Load More - Certification"
          data-gi-category=""
          data-gi-label=""
          onclick="if(!is_load_more_courses_exhausted) {trackGIEventClpV2(this);return true;}"
        >
          Load more courses
        </a>
        <i class="icon-down-arrow"></i>
        <span class="live-courses-count-show best-sell">
          6 more available live program(s)
        </span>
      </div>
    </div>
  );
};

export default BrowseCategory;



