import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import handIcon from "../../../assests/images/hand_icon.png";
import "./IntroPage.css";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

// --------------------------- Accordion Details -----------------------
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const IntroPage = () => {
  
  useEffect(() => {
    const handleSubmenuClick = (event) => {
      if (event.target.id === "submenu-icon") {
        const submenu = event.target.parentNode.nextElementSibling;
        submenu.classList.toggle("hidden");
      }
    };
    document.addEventListener("click", handleSubmenuClick);
    return () => {
      document.removeEventListener("click", handleSubmenuClick);
    };
  }, []);

  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [livecourses, setLivecourses] = useState([]);
  const [selfpacedcourses, setSelfpacedcourses] = useState([]);
  const [recommendedcourses, setRecommendedcourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");

  // ---------------------------
  //-------- Percentage for the Progress Bar
  const percentage = 90;
  // ---------------------------------------
  const location = useLocation();
  const { pathname } = location;
  const encodedCoursename = pathname.split("/").pop();
  const coursename = decodeURIComponent(encodedCoursename);
  const [courseNameState, setCourseNameState] = useState("");

  // console.log("pathname:", pathname);
  // console.log("encodedCoursename:", encodedCoursename);
  // console.log("coursename:", coursename);
  // console.log("courseNameState:", courseNameState);

  const handleButtonClick = () => {
    if (pathname !== "/user_homepage") {
      setCourseNameState(coursename);
    }
  };
  useEffect(() => {
    console.log("Course Name: ", courseNameState);
  }, [courseNameState]);

  useEffect(() => {
    fetchlivecourses();
    fetchselfpacedcourses();
    fetchrecommendedcourses();
  }, []);
  // ------------------------------ Live Courses ------------------------------
  const fetchlivecourses = async () => {
    try {
      const response = await fetch("/live-course");
      const data = await response.json();
      // console.log("data = ", data); // Log the data variable
      setLivecourses(data);
      // console.log("dataRecordset = ", data); // Log the data variable
    } catch (error) {
      console.log(error);
    }
  };

  // -------------------Self Paced Courses --------------------------------
  const fetchselfpacedcourses = async () => {
    try {
      const response = await fetch("/selfpaced-course");
      const data = await response.json();
      // console.log("data1 = ", data); // Log the data variable
      setSelfpacedcourses(data);
      // console.log("selfPacedRecordset = ", data); // Log the data variable
    } catch (error) {
      console.log(error);
    }
  };

  // --------------------Recommended Courses --------------------
  const fetchrecommendedcourses = async () => {
    try {
      const response = await fetch("/recommended-course");
      const data = await response.json();
      // console.log("data2 = ", data); // Log the data variable
      setRecommendedcourses(data);
      // console.log("data2Recordset = ", data); // Log the data variable
    } catch (error) {
      console.log(error);
    }
  };

  const handleCourseSelection = (coursename) => {
    setSelectedCourse(coursename);
    console.log('handleCourseSelection called with:', coursename);
    // console.log("Selected Course: ", coursename);
    // console.log("selectedCourse = ", selectedCourse);
  };

  return (
    <div>
      <section className=" flex gap-x-5 my-5 justify-items-center lg:w-11/12 md:w-11/12 sm:w-full mx-auto">
        {/* Flex-1 */}
        <div className="card rounded-lg shadow-md xl:w-96 xl:ml-0 lg:w-1/4 md:w-auto sm:w-auto bg-white h-1/3">
          {/* Accordion Div */}
          <div className="">
            <Accordion>
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <Typography>Live Courses</Typography>
              </AccordionSummary>
              {livecourses.map((course) => (
                <div
                  key={course.courseid}
                  className="hover:bg-slate-100 hover:text-blue-600"
                >
                  <AccordionDetails>
                    <Typography>
                      {" "}
                      <Link
                        to={`/user_homepage/course/${encodeURIComponent(course.coursename)}`}
                        onClick={() => handleCourseSelection(course.coursename)}
                      >
                        {course.coursename}
                      </Link>
                    </Typography>
                  </AccordionDetails>
                </div>
              ))}
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography>Self Paced Courses</Typography>
              </AccordionSummary>

              {selfpacedcourses.map((course) => (
                <div
                  key={course.courseid}
                  className="hover:bg-slate-100 hover:text-blue-600"
                >
                  <AccordionDetails>
                    <Typography>
                      <Link
                        to={`/user_homepage/course/${encodeURIComponent(course.coursename)}`}
                        onClick={() => {
                          console.log("Clicked course:", course.coursename);
                          handleCourseSelection(course.coursename);
                        }}
                      >
                        {course.coursename}
                      </Link>
                    </Typography>
                  </AccordionDetails>
                </div>
              ))}
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography>Recommended Courses</Typography>
              </AccordionSummary>

              {recommendedcourses &&
                recommendedcourses.map((course) => (
                  <div
                    key={course.courseid}
                    className="hover:bg-slate-100 hover:text-blue-600"
                  >
                    <AccordionDetails>
                      <Typography>
                        <Link
                          to={`/user_homepage/course/${encodeURIComponent(course.coursename)}`}

                          onClick={() =>
                            handleCourseSelection(course.coursename)
                          }
                        >
                          {course.coursename}
                        </Link>
                      </Typography>
                    </AccordionDetails>
                  </div>
                ))}
            </Accordion>
          </div>
        </div>
        {/* Flex-2 */}
        <div className="xl:ml-36 xl:max-w-max lg:w-2/4 md:w-3/4 sm:w-4/5 ">
          {/* Banner-1*/}
          <div className="card bg-gradient-to-r from-blue-200 to-slate-200 mb-5 p-4 flex-wrap rounded-lg shadow-md">
            <div className="flex">
              <img
                src="https://d3ejdag3om7lbm.cloudfront.net/assets/img/referral-ilustration.png"
                className="h-40 pt-5"
                alt=""
              />
              <div className="">
                <h4 className="text-blue-800 font-bold text-3xl">
                  Join Edureka's Referral Program
                </h4>
                <span className="hidden-xs text-blue-800 font-medium text-sm">
                  <span className="">
                    EARN upto 3000 Edureka Cash everytime your friends enroll
                  </span>
                </span>
              </div>
            </div>
            <div className="mt-2 text-end">
              <input
                className="px-2 py-2 outline-none"
                placeholder="Paul@abc.com..."
              />
              <button
                className="py-2 px-3 text-white"
                type="submit"
                id="inputreferbtn"
              >
                INVITE
              </button>
            </div>
          </div>
          {/* Banner-2 */}
          <div className="card bg-white rounded-lg shadow-md flex mb-5">
            <div className="py-2 mx-3 text-orange-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                fill="currentColor"
                class="bi bi-file-earmark-text"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
              </svg>
            </div>

            <p className="text-base font-light flex items-center py-2">
              Welcome back! Here’s wishing you a happy learning today!
            </p>
          </div>
          {/* Banner-3 */}
          <div className="bg-white rounded-lg shadow-md mb-5 p-3">
            <p className="text-blue-900 mb-2">Ongoing</p>
            <div class="p-2 py-6 bg-gradient-to-r from-purple-200 to-pink-300 rounded-md">
              {pathname !== "/user_homepage" && (
                <h2 class="font-medium text-3xl px-4 mb-4">{coursename}</h2>
              )}

              <div className="flex px-4">
                <button className=" text-orange-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="bi bi-arrow-right-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                  </svg>
                </button>
                <p className="ml-3 font-thin">
                  All live classes for this course have been completed
                </p>
              </div>
            </div>
            <app-mycourse-course-feedback>
              <div className="pt-4 px-4 text-xl flex text-blue-900">
                Hello, Rate us!
                <img src={handIcon} className="h-5 w-5 ml-2" alt="" />
              </div>
              {pathname !== "/user_homepage" && (
                <p className="text-blue-900 font-thin text-xs px-4">
                  How likely are you to recommend Edureka {coursename} to your
                  friends & family?
                </p>
              )}
              {/* Rating Section */}
              <div className="flex justify-evenly my-2">
                <div class="rating_with_smily_container">
                  <div class="rating_with_smily_box">
                    <div class="rating_smily_tooltip">Not at all likely</div>
                    <li class="rating_list_number li_rate_0">0</li>
                    <div class="smiley-rate-common smiley-rate-0 floatleft"></div>
                  </div>
                  <div class="rating_with_smily_box">
                    <div class="rating_smily_tooltip">Not at all likely</div>
                    <li class="rating_list_number li_rate_1">1</li>
                    <div class="smiley-rate-common smiley-rate-1 floatleft"></div>
                  </div>
                  <div class="rating_with_smily_box">
                    <div class="rating_smily_tooltip">Not at all likely</div>
                    <li class="rating_list_number li_rate_2">2</li>
                    <div class="smiley-rate-common smiley-rate-2 floatleft"></div>
                  </div>
                  <div class="rating_with_smily_box">
                    <div class="rating_smily_tooltip">Not at all likely</div>
                    <li class="rating_list_number li_rate_3">3</li>
                    <div class="smiley-rate-common smiley-rate-3 floatleft"></div>
                  </div>
                  <div class="rating_with_smily_box">
                    <div class="rating_smily_tooltip">Not at all likely</div>
                    <li class="rating_list_number li_rate_4">4</li>
                    <div class="smiley-rate-common smiley-rate-4 floatleft"></div>
                  </div>
                  <div class="rating_with_smily_box">
                    <div class="rating_smily_tooltip">Not at all likely</div>
                    <li class="rating_list_number li_rate_5">5</li>
                    <div class="smiley-rate-common smiley-rate-5 floatleft"></div>
                  </div>
                  <div class="rating_with_smily_box">
                    <div class="rating_smily_tooltip">Not at all likely</div>
                    <li class="rating_list_number li_rate_6">6</li>
                    <div class="smiley-rate-common smiley-rate-6 floatleft"></div>
                  </div>
                  <div class="rating_with_smily_box">
                    <div class="rating_smily_tooltip">Not at all likely</div>
                    <li class="rating_list_number li_rate_7">7</li>
                    <div class="smiley-rate-common smiley-rate-7 floatleft"></div>
                  </div>
                  <div class="rating_with_smily_box">
                    <div class="rating_smily_tooltip">Neutral</div>
                    <li class="rating_list_number li_rate_8">8</li>
                    <div class="smiley-rate-common smiley-rate-8 floatleft"></div>
                  </div>
                  <div class="rating_with_smily_box">
                    <div class="rating_smily_tooltip">Extremely Likely</div>
                    <li class="rating_list_number li_rate_9">9</li>
                    <div class="smiley-rate-common smiley-rate-9 floatleft"></div>
                  </div>
                  <div class="rating_with_smily_box">
                    <div class="rating_smily_tooltip">Extremely Likely</div>
                    <li class="rating_list_number li_rate_10">10</li>
                    <div class="smiley-rate-common smiley-rate-10 floatleft"></div>
                  </div>
                </div>
              </div>
            </app-mycourse-course-feedback>
            {/*  */}
            <div className="my-5 mx-5">
              <p>
                We are sorry to hear about your learning experience, What did
                you dislike about the course?
              </p>
              <div className="flex justify-between my-3">
                <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value=""
                    id="instructor"
                  />
                  <label
                    class="inline-block pl-[0.15rem] hover:cursor-pointer"
                    for="instructor"
                  >
                    Instructor
                  </label>
                </div>
                <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value=""
                    id="courseContent"
                  />
                  <label
                    class="inline-block pl-[0.15rem] hover:cursor-pointer"
                    for="courseContent"
                  >
                    Course Content
                  </label>
                </div>
                <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value=""
                    id="supportAssistance"
                  />
                  <label
                    class="inline-block pl-[0.15rem] hover:cursor-pointer"
                    for="supportAssistance"
                  >
                    Support Assistance
                  </label>
                </div>
                <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value=""
                    id="otherReason"
                  />
                  <label
                    class="inline-block pl-[0.15rem] hover:cursor-pointer"
                    for="otherReason"
                  >
                    Other Reasons
                  </label>
                </div>
                <button
                  class="middle none center flex items-center justify-center rounded-lg p-3 font-sans text-md font-bold uppercase text-blue-500 transition-all hover:bg-blue-500/10 active:bg-blue-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-dark="true"
                >
                  <i class="fa-solid fa-circle-arrow-right"></i>
                </button>
              </div>
              <div class="relative w-full min-w-[200px]">
                <textarea
                  class="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                ></textarea>
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Reply with feedback
                </label>
              </div>
            </div>
            {/* Go To Course */}
            <div className="flex justify-between">
              <div>
                {pathname !== "/user_homepage" && (
                  <a href={`/user_homepage/my-classroom/gettingstarted/${encodeURIComponent(coursename)}`}>
                    <button
                      onContextMenu={(e) => e.preventDefault()}
                      onClick={handleButtonClick}
                      class="bg-transparent hover:bg-blue-500 text-blue-700 font-sans text-xs font-bold uppercase hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                      Go to Course
                    </button>
                  </a>
                )}
              </div>
              <div className="flex w-2/4 items-center">
                <div class="h-2 w-full bg-neutral-200 dark:bg-neutral-600 rounded-md">
                  <div
                    class="h-2 bg-green-500 rounded-md"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className="mx-3">{percentage}%</span>
              </div>
              <div className="">
                <button
                  className="rounded-lg py-3 px-5 font-sans text-xs font-bold uppercase text-blue-600 hover:text-blue-600 transition-all hover:bg-blue-100 active:bg-blue-600 disabled:pointer-events-none disabled:shadow-none flex justify-evenly"
                  data-ripple-dark="true"
                >
                  <p>Curriculum</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntroPage;
