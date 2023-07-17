import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Header } from "../components";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import avatar3 from "../data/avatar3.png";
import { useStateContext } from "../contexts/ContextProvider";
import { Button } from "@mui/material";

function CourseInformation() {
  const { currentColor, currentMode } = useStateContext();
  const [subcourse, setSubcourse] = useState([]);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [count, setCount] = useState(0);
  const location = useLocation();
  const { pathname } = location;
  const encodedCoursename = pathname.split("/").pop();
  const coursename = decodeURIComponent(encodedCoursename);
  const [trainers, setTrainers] = useState([]);
  const [learnerCount, setLearnerCount] = useState(0);
  const [subcourseName, setSubcourseName] = useState("");
  const [employeeID, setEmployeeID] = useState("");
  const [classTimingsFrom, setClassTimingsFrom] = useState("");
  const [classTimingsTo, setClassTimingsTo] = useState("");
  const [dateRangefrom, setDateRangefrom] = useState("");
  const [dateRangeto, setDateRangeto] = useState("");

  const fetchSubcourse = async () => {
    try {
      const response = await fetch("/Subcourse");
      const data = await response.json();
      // console.log("datasubcourses =", data);
      setSubcourse(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSubcourse();
  }, []);

  const fetchTrainers = async () => {
    try {
      const response = await fetch("/trainers");
      const data = await response.json();
      // console.log("datatrainers =", data);
      setTrainers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrainers();
  }, []);

  const matchingCourseContent = subcourse.find(
    (course) => String(coursename) === String(course.subcoursename)
  );

  const matchingTrainerDetails = trainers.find(
    (trainer) => String(trainer.EmployeeID) === String(selectedTrainer)
  );

  const handleTrainerSelection = (EmployeeID) => {
    setSelectedTrainer((prevSelectedTrainer) =>
      prevSelectedTrainer === EmployeeID ? null : EmployeeID
    );
    console.log("Selected Trainer:", EmployeeID);
    setEmployeeID(EmployeeID); // Set the selected EmployeeID
  };

  const handlePlusClick = (e) => {
    e.preventDefault();
    if (count < 12) {
      setCount((prevCount) => prevCount + 1);
    }
    console.log("Plus Clicked:", count + 1);
  };

  const handleMinusClick = (e) => {
    e.preventDefault();
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
    console.log("Minus Clicked:", count - 1);
  };

  const handleSubmit = async () => {
    console.log("Form submitted!");

    const matchingCourse = subcourse.find(
      (course) => String(course.subcoursename) === String(coursename)
    );
    if (matchingCourse) {
      setSubcourseName(matchingCourse.subcoursename);
    }

    console.log("Handling form submission...");
    console.log("subcourseName:", subcourseName);
    console.log("employeeID:", employeeID);
    console.log("session:", count);
    console.log("totalLearners:", learnerCount);
    console.log("classTimingsFrom:", classTimingsFrom);
    console.log("classTimingsTo:", classTimingsTo);
    console.log("dateRangefrom:", dateRangefrom);
    console.log("dateRangeto:", dateRangeto);

    try {
      const formData = new FormData();
      formData.append("subcourseName", subcourseName);
      formData.append("employeeID", employeeID);
      formData.append("session", String(count));
      formData.append("totalLearners", learnerCount);
      formData.append("classTimingsFrom", classTimingsFrom);
      formData.append("classTimingsTo", classTimingsTo);
      formData.append("dateRangefrom", dateRangefrom);
      formData.append("dateRangeto", dateRangeto);

      console.log("Form Data:", Object.fromEntries(formData));
      console.log("Sending POST request to server...");

      const response = await fetch("/insertorupdatecourseschedule", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Response data:", data);
      } else {
        throw new Error("Upload Failed");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const visiblePaths = [
    "/reports",
    "/courses",
    "/trainers",
    "/learners",
    "/courseinformation",
    "/kanban",
    "/editor",
    "/calendar",
    "/color-picker",
    "/line",
    "/area",
    "/bar",
    "/pie",
    "/financial",
    "/color-mapping",
    "/pyramid",
    "/stacked",
    "/trainers/:EmployeeID",
    "/:subcoursename",
  ];

  const { subcoursename } = useParams(); // Extract the subcoursename from the URL
  const shouldShowThemesADMIN = subcourse.some(
    (course) => course.subcoursename === decodeURIComponent(subcoursename)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    shouldShowThemesADMIN && (
    <div className='my-3 absolute top-12 left-96 w-9/12'>
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      {matchingCourseContent && (
        <div>
          <Header
            category="Course Information"
            title={matchingCourseContent.subcoursename}
            onChange={(e) => setSubcourseName(e.target.value)}
          />
          <div className="flex flex-wrap gap-5">
            <div className="rounded-xl w-96 h-48 p-2">
              <img
                className={`rounded-xl w-full ${
                  selectedTrainer === matchingCourseContent.EmployeeID
                    ? "border-1"
                    : ""
                }`}
                src={matchingCourseContent.image}
                alt={matchingCourseContent.subcoursename}
                onClick={() =>
                  handleTrainerSelection(matchingCourseContent.EmployeeID)
                }
              />
            </div>
            <div
              key="Trainer"
              className="bg-slate-300 h-48 dark:text-gray-200 dark:bg-secondary-dark-bg lg:w-64 lg:ml-3 md:w-56 p-4 pt-9 rounded-2xl"
            >
              <div className="flex gap-5">
                <button
                  type="button"
                  style={{ color: "#03C9D7", backgroundColor: "#E5FAFB" }}
                  className="text-4xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
                >
                  <MdOutlineSupervisorAccount />
                </button>
                <div className="bg-orange-500 text-white text-sm my-auto px-2 py-1 rounded-xl">
                  Active
                </div>
              </div>
              <p className="mt-2">
                <span className="text-lg font-semibold">
                  {matchingCourseContent.Name}
                </span>
                <span className={`text-sm text-red-600 ml-2`}>
                  {matchingCourseContent.ClassTimingsfrom}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">Trainer</p>
            </div>
            {/* session trainers */}
            <div
              key="Trainer"
              className="bg-slate-300 h-48 dark:text-gray-200 dark:bg-secondary-dark-bg lg:w-64 lg:ml-3 md:w-56 p-4 pt-9 rounded-2xl"
            >
              <div className="flex gap-5 text-md font-semibold">
                Total session for this course
              </div>
              <p className="mt-2 flex gap-5">
                <span className="text-rose-600 text-6xl">
                  {matchingCourseContent.Session}
                </span>
                <span className="text-slate-400 text-3xl mt-4">Session</span>
              </p>
            </div>
            <div
              key="Trainer"
              className="bg-slate-300   h-48 dark:text-gray-200 dark:bg-secondary-dark-bg lg:w-64 lg:ml-3 md:w-56 p-4 pt-9 rounded-2xl"
            >
              <div className="flex gap-5 text-md font-semibold">
                Total Learners Enrolled for this course
              </div>
              <p className="mt-2 flex gap-5">
                <span className="text-rose-600 text-6xl">
                  {matchingCourseContent.TotalLearners}
                </span>
                <span className="text-slate-400 text-2xl mt-4">Learners</span>
              </p>
            </div>
            <div
              key="Trainer"
              className="bg-slate-300   h-48 dark:text-gray-200 dark:bg-secondary-dark-bg lg:w-64 lg:ml-3 md:w-56 p-4 pt-9 rounded-2xl"
            >
              <div className="flex gap-5 text-md font-semibold">
                Current Class Schedule
              </div>
              <p className="mt-2 flex gap-3">
                <span className="text-orange-600 text-xl">
                  {matchingCourseContent.ClassTimingsfrom}
                </span>
                <span className="text-orange-600 text-xl">To</span>
                <span className="text-orange-600 text-xl">
                  {matchingCourseContent.ClassTimingsto}
                </span>
                <span className="text-slate-400 text-lg mt-4"></span>
              </p>
            </div>
            <div
              key="Trainer"
              className="bg-slate-300   h-48 dark:text-gray-200 dark:bg-secondary-dark-bg lg:w-64 lg:ml-3 md:w-56 p-4 pt-9 rounded-2xl"
            >
              <div className="flex gap-5 text-md font-semibold">
                Dates alloted for this course to finish
              </div>
              <p className="mt-2 flex gap-3">
                <span className="text-orange-600 text-lg">
                  {matchingCourseContent.DateRangeFrom}
                </span>
                <span className="text-orange-600 text-lg">To</span>
                <span className="text-orange-600 text-lg">
                  {matchingCourseContent.DateRangeTo}
                </span>
                <span className="text-slate-400 text-lg mt-4"></span>
              </p>
            </div>
          </div>
        </div>
      )}
      
      <div className="w-400 bg-slate-300 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 mt-10">
        <div className="flex justify-between">
          <p className="text-xl font-semibold">Virtual Training schedule</p>
        </div>
        <div className="mt-2">
          <p className="text-md font-semibold mb-2">Trainers</p>
          <div className="flex gap-4">
            {trainers.length > 0 && (
              <img
                key={trainers[0].EmployeeID}
                className={`rounded-full w-20 h-20 ${
                  selectedTrainer === trainers[0].EmployeeID
                    ? "border-4 border-red-400"
                    : ""
                }`}
                src={avatar3}
                alt={trainers[0].EmployeeID}
                onClick={() => handleTrainerSelection(trainers[0].EmployeeID)}
              />
            )}
            {/* {trainers.map((trainer) => (
                <img
                  key={trainer.EmployeeID}
                  className={`rounded-full w-20 h-20 ${
                    selectedTrainer === trainer.EmployeeID
                      ? "border-4 border-red-400"
                      : ""
                  }`}
                  src={avatar3}
                  alt={trainer.EmployeeID}
                  onClick={() => handleTrainerSelection(trainer.EmployeeID)}
                />
              ))} */}
          </div>
        </div>
        <div className="border-t-1 border-color mt-4 p-2">
          <p className="text-md font-semibold mb-2">Session for the Trainer</p>
          <div className="flex gap-4">
            <button
              className="rounded-full text-4xl w-10 h-10 bg-slate-500 text-white hover:bg-ff5c8e"
              onClick={handleMinusClick}
            >
              -
            </button>
            <span className="text-gray-700 text-4xl">{count}</span>
            <button
              className="rounded-full text-4xl w-10 h-10 bg-slate-500 text-white"
              onClick={handlePlusClick}
            >
              +
            </button>
          </div>
        </div>
        {/* Input box for Number of Learners */}
        <div className="flex justify-between items-center mt-1 border-t-1 border-color">
          <p className="text-md font-semibold mb-2">Total Learners</p>
          <input
            type="number"
            placeholder="Number of Learners to be allotted"
            value={learnerCount}
            onChange={(e) => setLearnerCount(e.target.value)}
            className="p-2 border rounded"
          />
        </div>
        {/* Input box for Session Timings */}
        <div className="flex justify-between items-center mt-1 border-t-1 border-color">
          <p className="text-md font-semibold mb-2">Class Timings</p>
          <div className="flex-column mt-2">
            <input
              type="text"
              placeholder="From"
              onChange={(e) => setClassTimingsFrom(e.target.value)}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="To"
              onChange={(e) => setClassTimingsTo(e.target.value)}
              className="p-2 mt-2 border rounded"
            />
          </div>
        </div>
        {/* Input box for Date Range */}
        <div className="flex justify-between items-center mt-1 border-t-1 border-color">
          <p className="text-md font-semibold mb-2">Date Schedule</p>
          <div className="flex-column mt-2">
            <input
              type="text"
              placeholder="From"
              onChange={(e) => setDateRangefrom(e.target.value)}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="To"
              onChange={(e) => setDateRangeto(e.target.value)}
              className="p-2 mt-2 border rounded"
            />
          </div>
        </div>
        {/* Submit Button */}
        <div className="flex justify-between items-center mt-1 border-t-1 border-color">
          <div className="mt-3">
            <Button
              sx={{ bgcolor: "#FF5C8E" }}
              variant="contained"
              size="medium"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
  );
}

export default CourseInformation;
