import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import ThemesADMIN from "./components/ThemesADMIN";
import Reports from "./pages/Reports";
import { Footer, Pie, Stacked } from "./components";
import Courses from "./pages/CoursesAD";
import Trainers from "./pages/Trainers";
import Learners from "./pages/Learners";
import CourseInformation from "./pages/CourseInformation";
import TrainersDetails from "./pages/TrainersDetails";
import { Area, Bar, Calendar, ColorMapping, ColorPicker, Editor, Financial, Kanban, Line, Pyramid } from "./pages";
import StudentsInformation from "./pages/StudentsInformation";
import { useEffect } from "react";
import { useStateContext } from "./contexts/ContextProvider";
import { useState } from "react";


const AdminApp = () => {
    const {setCurrentColor,setCurrentMode,currentMode,activeMenu,currentColor,themeSettings,setThemeSettings,} = useStateContext();
    const [subcourse, setSubcourse] = useState([]);
    const [trainers, setTrainers] = useState([]);
    const [learners, setLearners] = useState([]);
    useEffect(() => {
        const currentThemeColor = localStorage.getItem("colorMode");
        const currentThemeMode = localStorage.getItem("themeMode");
        if (currentThemeColor && currentThemeMode) {
          setCurrentColor(currentThemeColor);
          setCurrentMode(currentThemeMode);
        }
      }, []);
      const fetchLearners = async () => {
        try {
          const response = await fetch("/learners");
          const data = await response.json();
          // console.log("datalearners =", data);
          setLearners(data);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        fetchLearners();
      }, []);
      const fetchsubcourse = async () => {
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
        fetchsubcourse();
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
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <Router>
        <Routes>
          {/* dashboard  */}

          <Route
            path="/reports"
            element={
              <>
                <ThemesADMIN />
                <Reports />
                <Footer />
              </>
            }
          />

          {/* pages  */}
          <Route
            path="/courses"
            element={
              <>
                <ThemesADMIN />
                <Courses />
                <Footer />
              </>
            }
          />
          <Route
            path="/trainers"
            element={
              <>
                <ThemesADMIN />
                <Trainers />
                <Footer />
              </>
            }
          />
          <Route
            path="/learners"
            element={
              <>
                <ThemesADMIN />
                <Learners />
                <Footer />
              </>
            }
          />
          <Route
            path="/courseinformation"
            element={
              <>
                <ThemesADMIN />
                <CourseInformation />
                <Footer />
              </>
            }
          />
          {subcourse.map((course) => (
            <Route
              key={course.subcourseid}
              path="/:subcoursename"
              element={
                <>
                  <ThemesADMIN />
                  <CourseInformation />
                  <Footer />
                </>
              }
            />
          ))}
          {trainers.map((course) => (
            <Route
              key={course.EmployeeID}
              path="/trainers/:EmployeeID"
              element={
                <>
                  <ThemesADMIN />
                  <TrainersDetails />
                  <Footer />
                </>
              }
            />
          ))}
          {learners.map((course) => (
            <Route
              key={course.LearnerID}
              path="/students-information/:LearnerID"
              element={
                <>
                  <ThemesADMIN />
                  <StudentsInformation />
                  <Footer />
                </>
              }
            />
          ))}
          {/* apps  */}
          <Route
            path="/kanban"
            element={
              <>
                <ThemesADMIN />
                <Kanban />
                <Footer />
              </>
            }
          />
          <Route
            path="/editor"
            element={
              <>
                <ThemesADMIN />
                <Editor />
                <Footer />
              </>
            }
          />
          <Route
            path="/calendar"
            element={
              <>
                <ThemesADMIN />
                <Calendar />
                <Footer />
              </>
            }
          />
          <Route
            path="/color-picker"
            element={
              <>
                <ThemesADMIN />
                <ColorPicker />
                <Footer />
              </>
            }
          />

          {/* charts  */}
          <Route
            path="/line"
            element={
              <>
                <ThemesADMIN />
                <Line />
                <Footer />
              </>
            }
          />
          <Route
            path="/area"
            element={
              <>
                <ThemesADMIN />
                <Area />
                <Footer />
              </>
            }
          />
          <Route
            path="/bar"
            element={
              <>
                <ThemesADMIN />
                <Bar />
                <Footer />
              </>
            }
          />
          <Route
            path="/pie"
            element={
              <>
                <ThemesADMIN />
                <Pie />
                <Footer />
              </>
            }
          />
          <Route
            path="/financial"
            element={
              <>
                <ThemesADMIN />
                <Financial />
                <Footer />
              </>
            }
          />
          <Route
            path="/color-mapping"
            element={
              <>
                <ThemesADMIN />
                <ColorMapping />
                <Footer />
              </>
            }
          />
          <Route
            path="/pyramid"
            element={
              <>
                <ThemesADMIN />
                <Pyramid />
                <Footer />
              </>
            }
          />
          <Route
            path="/stacked"
            element={
              <>
                <ThemesADMIN />
                <Stacked />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default AdminApp;
