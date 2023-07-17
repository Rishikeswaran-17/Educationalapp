import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import { useLocation } from "react-router-dom";
import AWSAccordion from "./AWSAccordion";

import TableData from "./TableData";
import FreeCourseForm from "./FreeCourseForm";

import "./AwsCertificationTraining.css";
import "../CloudComputing/CloudComputing.css";
import { Divider } from "@mui/material";
import { Button } from "@mui/material";

const AwsCertificationTraining = (subcourse) => {
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
    padding: theme.spacing(3),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));

  const [showContactInfo, setShowContactInfo] = useState(false);
  const toggleContactInfo = () => {
    setShowContactInfo((prevShowContactInfo) => !prevShowContactInfo);
  };

  const [expanded, setExpanded] = useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const location = useLocation();
  const { pathname } = location;

  const [subcourseinformation, setSubcourseinformation] = useState([]);
  const [subcoursefees, setSubcoursefees] = useState([]);

  useEffect(() => {
    fetchSubcourseFees();
    fetchSubcourseInformation();
  }, []);

  const fetchSubcourseFees = async () => {
    try {
      const response = await fetch("/subcoursefees");
      const data = await response.json();
      console.log("datasubcoursefees =", data);
      setSubcoursefees(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSubcourseInformation = async () => {
    try {
      const response = await fetch("/subcourseinfo");
      const data = await response.json();
      console.log("datasubcourseinfo =", data);
      setSubcourseinformation(data);
    } catch (error) {
      console.log(error);
    }
  };

  // const matchingSubcourseFees = subcoursefees.find(
  //      (course) => Number(pathname.slice(1)) === course.subcourseid
  // );
  const matchingSubcourseFees =
    Array.isArray(subcoursefees) &&
    subcoursefees.find(
      (course) => Number(pathname.slice(1)) === course.subcourseid
    );
  // const coursefees = matchingSubcourseFees ? matchingSubcourseFees.subcoursefees : 0;
  // const reducedCoursefees = Math.round(coursefees - coursefees * 0.1);
  const coursefees = matchingSubcourseFees
    ? matchingSubcourseFees.subcoursefees
    : 0;
  const reducedCoursefees = Math.round(coursefees - coursefees * 0.1);
  console.log("reducedCoursefees", reducedCoursefees);
  const savedCoursefees = Math.round(
    coursefees - (coursefees - coursefees * 0.1)
  );
  const emiCoursefees = Math.round(reducedCoursefees / 3);

  // const matchingSubcourse = subcourseinformation.find(
  //      (course) => Number(pathname.slice(1)) === course.subcourseid
  // );
  const matchingSubcourse =
    Array.isArray(subcourseinformation) &&
    subcourseinformation.find(
      (course) => Number(pathname.slice(1)) === course.subcourseid
    );

  console.log("pathname:", pathname);
  console.log("matchingSubcourseFees:", matchingSubcourseFees);
  console.log("matchingSubcourseInfo:", matchingSubcourse);
  console.log("subcourseinformation:", subcourseinformation);

  const formatDate = (dateString) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date(dateString);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    let daySuffix;

    if (day === 1 || day === 21 || day === 31) {
      daySuffix = "st";
    } else if (day === 2 || day === 22) {
      daySuffix = "nd";
    } else if (day === 3 || day === 23) {
      daySuffix = "rd";
    } else {
      daySuffix = "th";
    }

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${day}${daySuffix} ${months[monthIndex]} ${year} - ${hours}:${minutes}:${seconds}`;
  };

  const [selectedItem, setSelectedItem] = useState(null);

  const dataSource = [
    {
      position: 1,
      startingMonth: "JUL 01",
      WeekendWeekdays: "Weekend",
      days: "SAT & SUN (6.5 Weeks)",
      classTime: "07:00 AM to 10:00 AM (IST)",
      classDetails: "Orientation Class",
    },
    {
      position: 2,
      startingMonth: "JUL 03",
      WeekendWeekdays: "",
      days: "MON - FRI (18 Days)",
      classTime: "08:30 PM to 10:30 PM (IST)",
      classDetails: "Class 1",
    },
    {
      position: 3,
      startingMonth: "JUL 29",
      WeekendWeekdays: "Weekend",
      days: "SAT & SUN (0.5 Weeks)",
      classTime: "08:30 PM to 11:30 PM (IST)",
      classDetails: "Orientation Class",
    },
    {
      position: 4,
      startingMonth: "AUG 14",
      WeekendWeekdays: "",
      days: "MON - FRI (18 Days)",
      classTime: "07:00 AM to 09:00 AM (IST)",
      classDetails: "Class 1",
    },
  ];

  const selectItem = (row) => {
    setSelectedItem(row);
  };

  return (
    <div className="">
      <section className="w-11/12 mx-auto">
        {matchingSubcourse && (
          <div className="sticky top-0">
            <div className="flex card justify-between bg-white py-3 px-2 rounded-b-lg">
              <div className="flex">
                <div className="bg-red-600 text-xs text-white py-1 my-auto px-1.5 rounded-full">
                  Best Seller
                </div>
                <div className="text-2xl font-medium my-auto ml-4">
                  {matchingSubcourse.subcoursename}{" "}
                </div>
              </div>
              <div className="flex">
                <div className="mr-2 hover:border rounded-lg p-2 hover:border-blue-600">
                  <p className="text-xs text-right">Have queries? Ask us</p>
                  <div className="text-blue-700 font-semibold ">
                    <ion-icon name="call"></ion-icon> +91 89517 55401
                  </div>
                </div>
                <span className="text-neutral-400 flex hover:text-red-400 items-center py-0 px-2.5 mx-2 text-2xl outline-none rounded-full hover:shadow-lg">
                  <ion-icon name="heart"></ion-icon>
                </span>
                <span className="text-neutral-400 flex hover:text-yellow-400 items-center py-0 px-2.5 mx-2 text-2xl outline-none rounded-full hover:shadow-lg">
                  <ion-icon name="arrow-redo"></ion-icon>
                </span>
              </div>
            </div>
            <div className="flex mt-1">
              <button className="bg-white items-justify my-2 text-sm font-semibold text-blue-600 py-1 px-2 mx-2 outline-none rounded-full hover:shadow-lg flex">
                <p className="text-black">
                  <ion-icon name="person"></ion-icon>
                </p>
                <p className="ml-1">
                  {matchingSubcourse.enrolledcustomers} Learners
                </p>
              </button>
              <button className="flex bg-white my-2 text-sm py-1 px-2 mx-2 outline-none rounded-full hover:shadow-lg">
                <p className="text-yellow-500 text-xs mr-0.5">
                  <ion-icon name="star"></ion-icon>
                </p>
                <p className="text-xs">5 </p>
                <p className="text-xs py-0.5 mx-1">
                  <ion-icon name="chevron-down"></ion-icon>
                </p>{" "}
                <p className="text-blue-600 font-semibold">Reviews</p>
              </button>
            </div>
          </div>
        )}
        <div className="card bg-white rounded-lg p-3 shadow-sm w-10/12 mx-auto mt-2">
          <div className="w-11/12 m-3 mx-auto flex md:flex-wrap lg:flex-nowrap gap-10 justify-between">
            <div className="my-auto mx-auto">
              {matchingSubcourse && (
                <div>
                  <iframe
                    width="600"
                    height="350"
                    src={`${matchingSubcourse.videolink}`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              )}
              <div className="mt-5 text-center flex justify-center">
                <button className="text-red-600 hover:bg-slate-100 text-sm hover:shadow-lg py-1 px-3 rounded-full mr-2">
                  Free
                </button>
                <p className="text-sm py-1">Linux Course*</p>
              </div>
            </div>
            {matchingSubcourse && (
              <div className="my-auto p-4">
                <div>{matchingSubcourse.coursedescription}</div>
                <div className="my-10">
                  <div className="text-red-600 flex">
                    <p className="py-0.5">
                      <ion-icon name="radio"></ion-icon>
                    </p>
                    <p className="text-black ml-2">
                      <strong>Live Online Classes </strong>starting on{" "}
                      <strong>
                        {matchingSubcourse.batchstartdate.slice(0, 10)}
                      </strong>
                    </p>
                  </div>
                  <div
                    class=" mx-2 text-center flex justify-evenly my-10"
                    role="group"
                    aria-label="Basic outlined example"
                  >
                    <button
                      type="button"
                      className="bg-blue-700 text-white hover:bg-blue-50 hover:text-blue-700 border hover:shadow-lg hover:border-blue-700 px-5 py-2 rounded-lg text-md mr-2"
                    >
                      Enroll Now
                    </button>
                    <button
                      type="button"
                      className="border border-blue-700 text-blue-700 hover:bg-blue-50 px-5 py-2 rounded-lg text-md ml-2"
                    >
                      Download Curriculum
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Button
            id="openButton"
            className="text-blue-700 bg-white"
            onClick={toggleContactInfo}
          >
            Contact us
          </Button>
          <div
            id="message"
            className={showContactInfo ? "" : "hidden"}
            style={{
              transform: showContactInfo
                ? "translateX(300px)"
                : "translateX(0)",
            }}
          >
            <p className="text-sm my-2">Call us for any query</p>
            <p className="text-blue-800 font-semibold">+91 89517 55408</p>
            <p className="text-xs text-neutral-500 my-1">
              Experts Available 24 x 7
            </p>
          </div>
        </div>
        {matchingSubcourse && (
          <div className="card flex bg-white rounded-lg shadow-sm w-10/12 mx-auto mt-5 p-6 justify-evenly">
            <div>
              <div className="flex">
                <picture>
                  <img
                    width="40"
                    height="40"
                    src="https://d1jnx9ba8s6j9r.cloudfront.net/img/clp_re_1.webp"
                    alt="Edureka Google Review"
                    title="Google Review"
                    loading="lazy"
                  />
                </picture>
                <p className="text-blue-900 text-4xl pl-2">
                  {matchingSubcourse.googlereviews}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  className="text-yellow-500 my-auto ml-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <div className="mt-1.5 text-sm text-neutral-500 text-center">
                Google Reviews
              </div>
            </div>
            <Divider orientation="vertical" flexItem />
            <div>
              <div className="flex">
                <picture>
                  <img
                    width="40"
                    height="40"
                    src="https://d1jnx9ba8s6j9r.cloudfront.net/img/clp_re_2.webp"
                    alt="Edureka Trustpilot Review"
                    title="Trustpilot Review"
                    loading="lazy"
                  />
                </picture>
                <p className="text-blue-900 text-4xl pl-2">
                  {matchingSubcourse.trustpilotreviews}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  className="text-yellow-500 my-auto ml-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <div className="mt-1.5 text-sm text-neutral-500 text-center">
                Trustpilot Reviews
              </div>
            </div>
            <Divider orientation="vertical" flexItem />
            <div>
              <div className="flex">
                <picture>
                  <img
                    width="40"
                    height="40"
                    src="https://d1jnx9ba8s6j9r.cloudfront.net/img/clp_re_3.webp"
                    alt="Edureka G2 Review"
                    title="G2 Review"
                    loading="lazy"
                  />
                </picture>
                <p className="text-blue-900 text-4xl pl-2">
                  {matchingSubcourse.Gtworeviews}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  className="text-yellow-500 my-auto ml-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <div className="mt-1.5 text-sm text-neutral-500 text-center">
                G2 Reviews
              </div>
            </div>
            <Divider orientation="vertical" flexItem />
            <div>
              <div className="flex">
                <picture>
                  <img
                    width="40"
                    height="40"
                    src="https://d1jnx9ba8s6j9r.cloudfront.net/img/clp_re_4.webp"
                    alt="Edureka SiteJabber Review"
                    title="SiteJabber Review"
                    loading="lazy"
                  />
                </picture>
                <p className="text-blue-900 text-4xl pl-2">
                  {matchingSubcourse.sitejabberreviews}
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  className="text-yellow-500 my-auto ml-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </div>
              <div className="mt-1.5 text-sm text-neutral-500 text-center">
                SiteJabber Reviews
              </div>
            </div>
          </div>
        )}
        {/* Table */}
        {matchingSubcourse && (
          <div className="my-8">
            <div className="text-2xl my-3 text-center text-blue-900 font-medium">
              Instructor-led {matchingSubcourse.subcoursename.slice(0, 3)} live
              online Training Schedule
            </div>
            <div className="text-5xl my-1 mb-3 text-center text-blue-900">
              <div>Flexible batches for you</div>
            </div>
          </div>
        )}

        <div className="flex bg-white rounded-lg shadow-sm w-10/12 mx-auto mt-2">
          <div className="w-11/12">
            <TableData />
          </div>
          <div className="">
            <div className="text-lg text-neutral-500 p-2 flex px-10">
              <p className="py-1 text-md">
                Price <s className="mx-0.5">&#8377;{coursefees}</s>
              </p>{" "}
              {/* 19000 */}
              <p className="font-semibold text-4xl text-blue-950 ml-0.5 pt-3">
                &#8377;{reducedCoursefees}
              </p>
            </div>
            <div className="text-blue-950 text-sm text-center">
              10% OFF , Save &#8377;{savedCoursefees}
            </div>
            <div className="mx-3 my-2 border border-red-600 py-1 text-xs flex">
              <p className="pl-2">
                <TimerOutlinedIcon />
              </p>{" "}
              <p className="pl-5 py-1 text-sm">Ends in 21h : 06m : 08s</p>
            </div>
            <div className="bg-orange-50 pt-4 rounded-br-lg">
              <div className="text-center  p-3">
                <div className="text-xl">
                  Starts at &#8377;{emiCoursefees} / month
                </div>
                <div className="text-xs flex justify-center">
                  <p>with No Cost EMI</p>
                  <p className="text-blue-700 ml-1">View more</p>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="bg-orange-600 text-white px-8 py-2.5 rounded-md text-lg mr-2 uppercase mb-3"
                >
                  Enroll now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="card flex bg-white text-blue-700 rounded-md hover:shadow-md w-fit mx-auto mt-8  py-3 px-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-calendar2-week"
            className=""
            viewBox="0 0 16 16"
          >
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
            <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
          </svg>
          <p className="uppercase text-lg font-medium py-1 pl-2">
            Cant find a batch?
          </p>
        </div>
        {matchingSubcourse && (
          <div className="card flex text-blue-900 text-4xl w-fit mx-auto mt-5  py-3 px-10">
            Why enroll for {matchingSubcourse.subcoursename.slice(0, 3)}?
          </div>
        )}
        {matchingSubcourse && (
          <div className="flex w-10/12 mx-auto mt-5 gap-7 py-3 px-10">
            <div className="card w-1/3 bg-white rounded-lg shadow-md p-3">
              <picture>
                <img
                  width="38"
                  height="35"
                  src="https://d1jnx9ba8s6j9r.cloudfront.net/img/box_traning_1.webp"
                  alt="pay scale by Edureka course"
                  title="Pay scale"
                  className="my-4 mx-auto"
                />
              </picture>
              <span className="text-center text-sm text-neutral-500">
                {matchingSubcourse.subcoursename.slice(0, 3)} is rated as one of
                the most popular and lucrative cloud certifications in IT
                globally - Global Knowledge Study
              </span>
            </div>
            <div className="card w-1/3 bg-white rounded-lg shadow-md p-3">
              <picture>
                <img
                  width="38"
                  height="35"
                  src="https://d1jnx9ba8s6j9r.cloudfront.net/img/box_traning_2.webp"
                  alt="Industries"
                  title="Industries"
                  className="my-4 mx-auto"
                />
              </picture>
              <span className="text-center text-sm text-neutral-500">
                Market Research Future predicts the worldwide public cloud
                service market is expected to reach USD 1386.14B by 2030,
                growing at a CAGR of 21.4%.
              </span>
            </div>
            <div className="card w-1/3 bg-white rounded-lg shadow-md p-3">
              <picture className="">
                <img
                  width="38"
                  height="35"
                  src="https://d1jnx9ba8s6j9r.cloudfront.net/img/box_traning_3.webp"
                  alt="Average Salary growth by Edureka course"
                  title="Average Salary growth"
                  className="my-4 mx-auto"
                />
              </picture>
              <span className="text-center text-sm text-neutral-500">
                The average salary of an{" "}
                {matchingSubcourse.subcoursename.slice(0, 23)} ranges from
                $95,853 per year to $150,332 per year. - ZipRecruiter
              </span>
            </div>
          </div>
        )}
        {/* Banner - 2 */}
        {matchingSubcourse && (
          <div className="bg-slate-200 w-full mt-5 p-6">
            <div className="text-lg text-center text-blue-900 font-medium">
              {matchingSubcourse.subcoursename.slice(0, 3)} Course Curriculum
            </div>
            <div className="flex justify-center">
              <div className="text-4xl text-center text-blue-900 mt-3 pr-4">
                Curriculum Designed by Experts
              </div>
              <button className="flex border hover:border-blue-600 hover:shadow-md hover:rounded-md py-0.1 px-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-file-pdf-fill"
                  className="text-red-500 my-auto mr-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.523 10.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.035 21.035 0 0 0 .5-1.05 11.96 11.96 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.888 3.888 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 4.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z" />
                  <path
                    fill-rule="evenodd"
                    d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm.165 11.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.64 11.64 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.707 19.707 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z"
                  />
                </svg>
                <p className="uppercase text-blue-800 py-5 text-sm">
                  Download Curriculum
                </p>
              </button>
            </div>

            <div className="flex bg-slate-200 rounded-lg w-10/12 mx-auto mt-2 gap-5 justify-between">
              <div className="w-2/3">
                <div className="card rounded-md mb-2">
                  <Accordion className="rounded-md">
                    <AccordionSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                      expanded={expanded === "panel1"}
                      onChange={handleChange("panel1")}
                    >
                      <Typography>
                        <div className="flex">
                          <div className="text-xl p-3">
                            Introduction to{" "}
                            {matchingSubcourse.subcoursename.slice(0, 3)}
                          </div>
                          <div className="text-blue-900 my-auto flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              class="bi bi-filter-left"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            16 Topics
                          </div>
                        </div>
                      </Typography>
                    </AccordionSummary>
                    <div>
                      <AccordionDetails>
                        <Typography>
                          <AWSAccordion />
                        </Typography>
                      </AccordionDetails>
                    </div>
                  </Accordion>
                </div>
                <div className="card rounded-md mb-2">
                  <Accordion className="rounded-md">
                    <AccordionSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                      expanded={expanded === "panel1"}
                      onChange={handleChange("panel1")}
                    >
                      <Typography>
                        <div className="flex">
                          <div className="text-xl p-3">
                            Identity and Access Management in{" "}
                            {matchingSubcourse.subcoursename.slice(0, 3)}
                          </div>
                          <div className="text-blue-900 my-auto flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              class="bi bi-filter-left"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            21 Topics
                          </div>
                        </div>
                      </Typography>
                    </AccordionSummary>
                    <div className="">
                      <AccordionDetails>
                        <Typography>Accordion Contents</Typography>
                      </AccordionDetails>
                    </div>
                  </Accordion>
                </div>
                <div className="card rounded-md mb-2">
                  <Accordion className="rounded-md">
                    <AccordionSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                      expanded={expanded === "panel1"}
                      onChange={handleChange("panel1")}
                    >
                      <Typography>
                        <div className="flex">
                          <div className="text-xl p-3">Amazon EC2</div>
                          <div className="text-blue-900 my-auto flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              class="bi bi-filter-left"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            20 Topics
                          </div>
                        </div>
                      </Typography>
                    </AccordionSummary>
                    <div className="">
                      <AccordionDetails>
                        <Typography>Accordion Contents</Typography>
                      </AccordionDetails>
                    </div>
                  </Accordion>
                </div>
                <div className="card rounded-md mb-2">
                  <Accordion className="rounded-md">
                    <AccordionSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                      expanded={expanded === "panel1"}
                      onChange={handleChange("panel1")}
                    >
                      <Typography>
                        <div className="flex">
                          <div className="text-xl p-3">AWS Storage Options</div>
                          <div className="text-blue-900 my-auto flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              class="bi bi-filter-left"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            18 Topics
                          </div>
                        </div>
                      </Typography>
                    </AccordionSummary>
                    <div className="">
                      <AccordionDetails>
                        <Typography>Accordion Contents</Typography>
                      </AccordionDetails>
                    </div>
                  </Accordion>
                </div>
                <div className="card rounded-md mb-2">
                  <Accordion className="rounded-md">
                    <AccordionSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                      expanded={expanded === "panel1"}
                      onChange={handleChange("panel1")}
                    >
                      <Typography>
                        <div className="flex">
                          <div className="text-xl p-3">
                            Networking using AWS
                          </div>
                          <div className="text-blue-900 my-auto flex">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              fill="currentColor"
                              class="bi bi-filter-left"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            19 Topics
                          </div>
                        </div>
                      </Typography>
                    </AccordionSummary>
                    <div className="">
                      <AccordionDetails>
                        <Typography>Accordion Contents</Typography>
                      </AccordionDetails>
                    </div>
                  </Accordion>
                </div>
              </div>
              <div className="w-1/3 h-fit bg-white rounded-md shadow-md">
                <FreeCourseForm />
              </div>
            </div>
            {/* Banner - 3 */}
            <div className="bg-white rounded-lg shadow-md w-11/12 mx-auto mt-8 p-4">
              <div className="mt-3 text-lg text-blue-900 text-center">
                About your AWS Course
              </div>
              <div className="mt-3 text-4xl text-blue-900 text-center">
                AWS Solutions Architect Course Skills Covered
              </div>
              <div className="my-8 w-11/12 mx-auto grid grid-cols-3 gap-y-4">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-check2-circle"
                    className="text-green-600 my-0.5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                  <p className="pl-2">Designing Identity Solutions</p>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-check2-circle"
                    className="text-green-600 my-0.5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                  <p className="pl-2">Managing Security</p>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-check2-circle"
                    className="text-green-600 my-0.5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                  <p className="pl-2">Designing Data Storage Solutions</p>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-check2-circle"
                    className="text-green-600 my-0.5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                  <p className="pl-2">Monitoring Cloud Solutions</p>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-check2-circle"
                    className="text-green-600 my-0.5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                  <p className="pl-2">Designing Resilient AWS Solutions</p>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-check2-circle"
                    className="text-green-600 my-0.5"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                  </svg>
                  <p className="pl-2">AWS Cloud Cost Optimization</p>
                </div>
              </div>
              <div className="mt-8 text-4xl text-blue-900 text-center">
                AWS Training and Certification Tools Covered
              </div>
              <div className="p-3 mt-8 w-11/12 mx-auto grid grid-cols-6 gap-y-4">
                <div className="">
                  <img
                    alt="HIVE - AWS Course tools"
                    title="HIVE"
                    width="100"
                    height="100"
                    fullbase="true"
                    loading="lazy"
                    src="https://d1jnx9ba8s6j9r.cloudfront.net/img/multi_section_image_1981_0_1673437825.png"
                  />
                </div>
                <div className="">
                  <img
                    alt="HIVE - AWS Course tools"
                    title="HIVE"
                    width="100"
                    height="100"
                    fullbase="true"
                    loading="lazy"
                    src="https://d1jnx9ba8s6j9r.cloudfront.net/img/multi_section_image_1981_1_1673437825.png"
                  />
                </div>
                <div className="">
                  <img
                    alt="HIVE - AWS Course tools"
                    title="HIVE"
                    width="100"
                    height="100"
                    fullbase="true"
                    loading="lazy"
                    src="https://d1jnx9ba8s6j9r.cloudfront.net/img/multi_section_image_1981_2_1673437825.png"
                  />
                </div>
                <div className="">
                  <img
                    alt="HIVE - AWS Course tools"
                    title="HIVE"
                    width="100"
                    height="100"
                    fullbase="true"
                    loading="lazy"
                    src="https://d1jnx9ba8s6j9r.cloudfront.net/img/multi_section_image_1981_3_1673437825.png"
                  />
                </div>
                <div className="">
                  <img
                    alt="HIVE - AWS Course tools"
                    title="HIVE"
                    width="100"
                    height="100"
                    fullbase="true"
                    loading="lazy"
                    src="https://d1jnx9ba8s6j9r.cloudfront.net/img/multi_section_image_1981_4_1673437825.png"
                  />
                </div>
                <div className="">
                  <img
                    alt="HIVE - AWS Course tools"
                    title="HIVE"
                    width="100"
                    height="100"
                    fullbase="true"
                    loading="lazy"
                    src="https://d1jnx9ba8s6j9r.cloudfront.net/img/multi_section_image_1981_5_1673437825.png"
                  />
                </div>
                <div className="">
                  <img
                    alt="HIVE - AWS Course tools"
                    title="HIVE"
                    width="100"
                    height="100"
                    fullbase="true"
                    loading="lazy"
                    src="https://d1jnx9ba8s6j9r.cloudfront.net/img/multi_section_image_1981_6_1673437825.png"
                  />
                </div>
                <div className="">
                  <img
                    alt="HIVE - AWS Course tools"
                    title="HIVE"
                    width="100"
                    height="100"
                    fullbase="true"
                    loading="lazy"
                    src="https://d1jnx9ba8s6j9r.cloudfront.net/img/multi_section_image_1981_7_1673437825.png"
                  />
                </div>
                <div className="">
                  <img
                    alt="HIVE - AWS Course tools"
                    title="HIVE"
                    width="100"
                    height="100"
                    fullbase="true"
                    loading="lazy"
                    src="https://d1jnx9ba8s6j9r.cloudfront.net/img/multi_section_image_1981_8_1673437825.png"
                  />
                </div>
                <div className="">
                  <img
                    alt="HIVE - AWS Course tools"
                    title="HIVE"
                    width="100"
                    height="100"
                    fullbase="true"
                    loading="lazy"
                    src="https://d1jnx9ba8s6j9r.cloudfront.net/img/multi_section_image_1981_9_1673437825.png"
                  />
                </div>
                <div className="">
                  <img
                    alt="HIVE - AWS Course tools"
                    title="HIVE"
                    width="100"
                    height="100"
                    fullbase="true"
                    loading="lazy"
                    src="https://d1jnx9ba8s6j9r.cloudfront.net/img/multi_section_image_1981_10_1673437825.jpg"
                  />
                </div>
              </div>
            </div>
            {/* Banner - 4 */}
            <div className="bg-slate-200 w-10/12 mx-auto mt-14">
              <div className="text-4xl text-blue-900 text-center">
                Why AWS Course from edureka
              </div>
              <div className="mt-10 w-11/12 mx-auto grid grid-cols-3 gap-5">
                <div className="card bg-white rounded-md p-5">
                  <div className="flex mb-2">
                    <img
                      width="40"
                      height="40"
                      alt="Live Interactive Learning"
                      title="Live Interactive Learning"
                      fullbase="true"
                      loading="lazy"
                      src="https://d1jnx9ba8s6j9r.cloudfront.net/img/live_intr_live.webp"
                    />
                    <p className="text-xl text-blue-900 pl-2 py-1">
                      Live Interactive Learning
                    </p>
                  </div>
                  <Divider />
                  <div className="">
                    <p className="text-neutral-500 flex mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        fill="currentColor"
                        class="bi bi-circle-fill"
                        className="my-1.5"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                      <p className="text-neutral-600 text-sm pl-2">
                        World-Class Instructors
                      </p>
                    </p>
                    <p className="text-neutral-500 flex mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        fill="currentColor"
                        class="bi bi-circle-fill"
                        className="my-1.5"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                      <p className="text-neutral-600 text-sm pl-2">
                        Expert-Led Mentoring Sessions
                      </p>
                    </p>
                    <p className="text-neutral-500 flex mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        fill="currentColor"
                        class="bi bi-circle-fill"
                        className="my-1.5"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                      <p className="text-neutral-600 text-sm pl-2">
                        Instant doubt clearing
                      </p>
                    </p>
                  </div>
                </div>
                <div className="card bg-white rounded-md p-5">
                  <div className="flex mb-2">
                    <img
                      width="40"
                      height="40"
                      fullbase="true"
                      alt="Lifetime Access"
                      title="Lifetime Access"
                      loading="lazy"
                      src="https://d1jnx9ba8s6j9r.cloudfront.net/img/live_intr_life.webp"
                    />
                    <p className="text-xl text-blue-900 pl-2 py-1">
                      Lifetime Access
                    </p>
                  </div>
                  <Divider />
                  <div className="">
                    <p className="text-neutral-500 flex mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        fill="currentColor"
                        class="bi bi-circle-fill"
                        className="my-1.5"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                      <p className="text-neutral-600 text-sm pl-2">
                        Course Access Never Expires
                      </p>
                    </p>
                    <p className="text-neutral-500 flex mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        fill="currentColor"
                        class="bi bi-circle-fill"
                        className="my-1.5"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                      <p className="text-neutral-600 text-sm pl-2">
                        Free Access to Future Updates
                      </p>
                    </p>
                    <p className="text-neutral-500 flex mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        fill="currentColor"
                        class="bi bi-circle-fill"
                        className="my-1.5"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                      <p className="text-neutral-600 text-sm pl-2">
                        Unlimited Access to Course Content
                      </p>
                    </p>
                  </div>
                </div>
                <div className="card bg-white rounded-md p-5">
                  <div className="flex mb-2">
                    <img
                      width="40"
                      height="40"
                      alt="24x7 Support"
                      title="24x7 Support"
                      fullbase="true"
                      loading="lazy"
                      src="https://d1jnx9ba8s6j9r.cloudfront.net/img/live_intr_247.webp"
                    />
                    <p className="text-xl text-blue-900 pl-2 py-1">
                      24x7 Support
                    </p>
                  </div>
                  <Divider />
                  <div className="">
                    <p className="text-neutral-500 flex mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        fill="currentColor"
                        class="bi bi-circle-fill"
                        className="my-1.5"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                      <p className="text-neutral-600 text-sm pl-2">
                        One-On-One Learning Assistance
                      </p>
                    </p>
                    <p className="text-neutral-500 flex mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        fill="currentColor"
                        class="bi bi-circle-fill"
                        className="my-1.5"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                      <p className="text-neutral-600 text-sm pl-2">
                        Help Desk Support
                      </p>
                    </p>
                    <p className="text-neutral-500 flex mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        fill="currentColor"
                        class="bi bi-circle-fill"
                        className="my-1.5"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                      <p className="text-neutral-600 text-sm pl-2">
                        Resolve Doubts in Real-time
                      </p>
                    </p>
                  </div>
                </div>
                <div className="card bg-white rounded-md p-5">
                  <div className="flex mb-2">
                    <img
                      width="40"
                      height="40"
                      fullbase="true"
                      alt="Hands-On Project Based Learning"
                      title="Hands-On Project Based Learning"
                      loading="lazy"
                      src="https://d1jnx9ba8s6j9r.cloudfront.net/img/live_intr_handson.webp"
                    />
                    <p className="text-xl text-blue-900 pl-2 py-1">
                      Hands-On Project Based Learning
                    </p>
                  </div>
                  <Divider />
                  <div className="">
                    <p className="text-neutral-500 flex mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        fill="currentColor"
                        class="bi bi-circle-fill"
                        className="my-1.5"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                      <p className="text-neutral-600 text-sm pl-2">
                        Industry-Relevant Projects
                      </p>
                    </p>
                    <p className="text-neutral-500 flex mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        fill="currentColor"
                        class="bi bi-circle-fill"
                        className="my-1.5"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                      <p className="text-neutral-600 text-sm pl-2">
                        Course Demo Dataset & Files
                      </p>
                    </p>
                    <p className="text-neutral-500 flex mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        fill="currentColor"
                        class="bi bi-circle-fill"
                        className="my-1.5"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                      <p className="text-neutral-600 text-sm pl-2">
                        Quizzes & Assignments
                      </p>
                    </p>
                  </div>
                </div>
                <div className="card bg-white rounded-md p-5">
                  <div className="flex mb-2">
                    <img
                      width="40"
                      height="40"
                      fullbase="true"
                      alt="Industry Recognised Certification"
                      title="Industry Recognised Certification"
                      loading="lazy"
                      src="https://d1jnx9ba8s6j9r.cloudfront.net/img/live_intr_certi.webp"
                    />
                    <p className="text-xl text-blue-900 ml-2 py-1">
                      Industry Recognised Certification
                    </p>
                  </div>
                  <Divider />
                  <div className="">
                    <p className="text-neutral-500 flex mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        fill="currentColor"
                        class="bi bi-circle-fill"
                        className="my-1.5"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                      <p className="text-neutral-600 text-sm pl-2">
                        Edureka Training Certificate
                      </p>
                    </p>
                    <p className="text-neutral-500 flex mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        fill="currentColor"
                        class="bi bi-circle-fill"
                        className="my-1.5"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                      <p className="text-neutral-600 text-sm pl-2">
                        Graded Performance Certificate
                      </p>
                    </p>
                    <p className="text-neutral-500 flex mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        fill="currentColor"
                        class="bi bi-circle-fill"
                        className="my-1.5"
                        viewBox="0 0 16 16"
                      >
                        <circle cx="8" cy="8" r="8" />
                      </svg>
                      <p className="text-neutral-600 text-sm pl-2">
                        Certificate of Completion
                      </p>
                    </p>
                  </div>
                </div>
                <div className="card bg-white rounded-md p-5">
                  <div className="p-4">
                    <div className="text-sm text-blue-900 text-center mt-3">
                      Like what you hear from our learners?
                    </div>
                    <div className="text-2xl text-blue-900 text-center">
                      Take the first step!
                    </div>
                    <div className="mt-5 w-9/12 mx-auto">
                      <button
                        type="button"
                        className="bg-blue-900 text-white hover:bg-blue-50 hover:text-blue-900 border hover:shadow-lg hover:border-blue-900 rounded-md text-md w-full py-2"
                      >
                        Drop us query
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Banner - 5 */}
            <div className="bg-white w-11/12 mx-auto my-14 rounded-lg pb-5">
              <div className="text-2xl text-blue-900 text-center pt-8">
                AWS Training and Certification Projects
              </div>
              <div className="mt-10 mb-3 w-11/12 mx-auto grid grid-cols-2 gap-5">
                <div className="border p-5">
                  <img
                    width="133"
                    height="83"
                    fullbase="true"
                    alt="AWS Course certification projects"
                    title="AWS Course industry projects"
                    loading="lazy"
                    src="https://d1jnx9ba8s6j9r.cloudfront.net/img/industry_projects_clp_2_1981_1663135769.png"
                  />
                  <div className="my-4 text-2xl text-blue-950">
                    Industry: E-commerce
                  </div>
                  <div className="mb-4 text-blue-900">
                    A start-up company wants to host its Python and React-based
                    application (Backend: Python API and Frontend React) using
                    AWS. But they are not familiar with the AWS cloud
                    platform.....
                  </div>
                </div>
                <div className="border p-5">
                  <img
                    width="133"
                    height="83"
                    fullbase="true"
                    alt="AWS Course certification projects"
                    title="AWS Course industry projects"
                    loading="lazy"
                    src="https://d1jnx9ba8s6j9r.cloudfront.net/img/industry_projects_clp_2_1981_1663135841.png"
                  />
                  <div className="my-4 text-2xl text-blue-950">
                    Industry: IT
                  </div>
                  <div className="mb-4 text-blue-900">
                    You are recently promoted from a Cloud Engineer to a Cloud
                    Architect and assigned a project to prepare a new
                    environment in the cloud, to which your team will later
                    migrate their....
                  </div>
                </div>
              </div>
            </div>
            {/* Banner - 6 */}
            <div className=" bg-slate-200 rounded-lg w-10/12 mx-auto mt-2 ">
              <div className="my-6 text-3xl text-blue-950">
                AWS Solutions Architect Certification
              </div>
              <div className="flex gap-5 justify-between">
                <div className="w-2/3 text-blue-950">
                  <div className="card rounded-md mb-2">
                    <Accordion className="rounded-md">
                      <AccordionSummary
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                        expanded={expanded === "panel1"}
                        onChange={handleChange("panel1")}
                      >
                        <Typography>
                          <div className="text-md p-2 text-blue-950">
                            What do I need to do to unlock Edureka’s AWS
                            Solutions Architect Training certificate?
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <div>
                        <AccordionDetails>
                          <Typography>
                            <div className="text-blue-950 ">
                              To unlock Edureka’s AWS Solutions Architect
                              Training completion certificate, you must ensure
                              the following:
                            </div>
                            <div className="mb-2">
                              <p className="text-neutral-500 flex mt-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="6"
                                  height="6"
                                  fill="currentColor"
                                  class="bi bi-circle-fill"
                                  className="my-1.5"
                                  viewBox="0 0 16 16"
                                >
                                  <circle cx="8" cy="8" r="8" />
                                </svg>
                                <p className="text-blue-950 text-sm pl-2">
                                  Completely participate in this AWS Solutions
                                  Architect Training Course.
                                </p>
                              </p>
                              <p className="text-neutral-500 flex mt-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="6"
                                  height="6"
                                  fill="currentColor"
                                  class="bi bi-circle-fill"
                                  className="my-1.5"
                                  viewBox="0 0 16 16"
                                >
                                  <circle cx="8" cy="8" r="8" />
                                </svg>
                                <p className="text-blue-950 text-sm pl-2">
                                  Evaluation and completion of the quizzes and
                                  projects listed.
                                </p>
                              </p>
                              <p className="text-neutral-500 flex mt-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="6"
                                  height="6"
                                  fill="currentColor"
                                  class="bi bi-circle-fill"
                                  className="my-1.5"
                                  viewBox="0 0 16 16"
                                >
                                  <circle cx="8" cy="8" r="8" />
                                </svg>
                                <p className="text-blue-950 text-sm pl-2">
                                  You must complete the AWS course and earn a
                                  minimum score of 80% in the assessment.
                                </p>
                              </p>
                            </div>
                          </Typography>
                        </AccordionDetails>
                      </div>
                    </Accordion>
                  </div>
                  <div className="card rounded-md mb-2">
                    <Accordion className="rounded-md">
                      <AccordionSummary
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                        expanded={expanded === "panel1"}
                        onChange={handleChange("panel1")}
                      >
                        <Typography>
                          <div className="text-md p-2 text-blue-950">
                            Is Cloud Computing a good career option?
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <div>
                        <AccordionDetails>
                          <Typography>
                            <div className="text-blue-950">
                              Cloud Computing has huge demand in the industry
                              and latest studies suggest that cloud computing
                              market will continue to grow in the coming years.
                              Various companies are switching from using their
                              own data centres to third-party cloud service
                              providers. Consequently, businesses have been able
                              to significantly reduce costs and improve service.
                              There will be a need for a workforce in the
                              industry as the sector appears to grow
                              significantly in the future.
                            </div>
                          </Typography>
                        </AccordionDetails>
                      </div>
                    </Accordion>
                  </div>
                  <div className="card rounded-md mb-2">
                    <Accordion className="rounded-md">
                      <AccordionSummary
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                        expanded={expanded === "panel1"}
                        onChange={handleChange("panel1")}
                      >
                        <Typography>
                          <div className="text-md p-2 text-blue-950">
                            How can beginners learn AWS?
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <div>
                        <AccordionDetails>
                          <Typography>
                            <div className="text-blue-950 ">
                              Beginners can become familiar with AWS easily as
                              it is a user-friendly and popular cloud computing
                              service. The proper guidance and a well-structured
                              AWS course are necessary to learn its services and
                              functionality. Beginners aspiring to pursue a
                              career in AWS can sign up for our AWS online
                              training and earn certificates to demonstrate
                              their expertise in this domain.
                            </div>
                          </Typography>
                        </AccordionDetails>
                      </div>
                    </Accordion>
                  </div>
                  <div className="card rounded-md mb-2">
                    <Accordion className="rounded-md">
                      <AccordionSummary
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                        expanded={expanded === "panel1"}
                        onChange={handleChange("panel1")}
                      >
                        <Typography>
                          <div className="text-md p-2 text-blue-950">
                            What is the value of AWS Certification?
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <div>
                        <AccordionDetails>
                          <Typography>
                            <div className="text-blue-950 ">
                              AWS certification significantly boosts your Cloud
                              computing knowledge and your ability to command a
                              higher wage. AWS Certification validates skills
                              and knowledge across 11 technical domains and job
                              roles, helping organizations stand out and earn
                              customer trust.
                            </div>
                          </Typography>
                        </AccordionDetails>
                      </div>
                    </Accordion>
                  </div>
                  <div className="card rounded-md mb-2">
                    <Accordion className="rounded-md">
                      <AccordionSummary
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                        expanded={expanded === "panel1"}
                        onChange={handleChange("panel1")}
                      >
                        <Typography>
                          <div className="text-md p-2 text-blue-950">
                            What are the different job roles available after AWS
                            Certification?
                          </div>
                        </Typography>
                      </AccordionSummary>
                      <div>
                        <AccordionDetails>
                          <Typography>
                            <div className="text-blue-950">
                              Amazon Web Services (AWS) certifications open the
                              door to many highest-paying jobs. It helps you get
                              over the risk of unstable careers. If you are AWS
                              certified, there are a number of job roles that
                              you can apply for. Here are the top 5 Job Roles
                              based on your AWS Certification:
                            </div>
                            <div className="mb-2">
                              <p className="text-neutral-500 flex mt-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="6"
                                  height="6"
                                  fill="currentColor"
                                  class="bi bi-circle-fill"
                                  className="my-1.5"
                                  viewBox="0 0 16 16"
                                >
                                  <circle cx="8" cy="8" r="8" />
                                </svg>
                                <p className="text-blue-950 text-sm pl-2">
                                  AWS Cloud Architect
                                </p>
                              </p>
                              <p className="text-neutral-500 flex mt-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="6"
                                  height="6"
                                  fill="currentColor"
                                  class="bi bi-circle-fill"
                                  className="my-1.5"
                                  viewBox="0 0 16 16"
                                >
                                  <circle cx="8" cy="8" r="8" />
                                </svg>
                                <p className="text-blue-950 text-sm pl-2">
                                  Cloud Developer
                                </p>
                              </p>
                              <p className="text-neutral-500 flex mt-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="6"
                                  height="6"
                                  fill="currentColor"
                                  class="bi bi-circle-fill"
                                  className="my-1.5"
                                  viewBox="0 0 16 16"
                                >
                                  <circle cx="8" cy="8" r="8" />
                                </svg>
                                <p className="text-blue-950 text-sm pl-2">
                                  Cloud DevOps Engineer
                                </p>
                              </p>
                              <p className="text-neutral-500 flex mt-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="6"
                                  height="6"
                                  fill="currentColor"
                                  class="bi bi-circle-fill"
                                  className="my-1.5"
                                  viewBox="0 0 16 16"
                                >
                                  <circle cx="8" cy="8" r="8" />
                                </svg>
                                <p className="text-blue-950 text-sm pl-2">
                                  Cloud Software Engineer
                                </p>
                              </p>
                              <p className="text-neutral-500 flex mt-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="6"
                                  height="6"
                                  fill="currentColor"
                                  class="bi bi-circle-fill"
                                  className="my-1.5"
                                  viewBox="0 0 16 16"
                                >
                                  <circle cx="8" cy="8" r="8" />
                                </svg>
                                <p className="text-blue-950 text-sm pl-2">
                                  SysOps Administrator
                                </p>
                              </p>
                            </div>
                          </Typography>
                        </AccordionDetails>
                      </div>
                    </Accordion>
                  </div>
                </div>
                <div className="w-2/5 h-fit bg-slate-200">
                  <div>
                    <img
                      alt="Edureka Certification"
                      title="Certification"
                      fullbase="true"
                      width="100%"
                      height=""
                      loading="lazy"
                      src="https://d1jnx9ba8s6j9r.cloudfront.net/img/certibackgrounds/B2C_CLP_new.webp"
                    />
                    <div className="w-full">
                      <button
                        type="button"
                        className="bg-white text-blue-800 border-blue-800 hover:shadow-lg border rounded-b-md text-lg w-full py-2 uppercase"
                      >
                        Get a Sample Certificate
                      </button>
                    </div>
                    <div className="my-6 w-9/12 mx-auto">
                      <button
                        type="button"
                        className="bg-orange-400 text-white border hover:shadow-lg hover:border-orange-400 rounded-md text-md w-full py-2"
                      >
                        Get in touch
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        )}
      </section>
    </div>
  );
};

export default AwsCertificationTraining;
