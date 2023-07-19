// console.log("datasubcourses =", data); 
//clone-model edureka
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import {
  Navbar,
  Footer,
  Sidebar,
  ThemeSettings,
} from "./ADMIN_SCREEN/components";
import {
  Calendar,
  Stacked,
  Pyramid,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./ADMIN_SCREEN/pages";
import "./App.css";

import { useStateContext } from "./ADMIN_SCREEN/contexts/ContextProvider";
import Reports from "./ADMIN_SCREEN/pages/Reports";
import CoursesAD from "./ADMIN_SCREEN/pages/CoursesAD";
import Trainers from "./ADMIN_SCREEN/pages/Trainers";
import Learners from "./ADMIN_SCREEN/pages/Learners";
import CourseInformation from "./ADMIN_SCREEN/pages/CourseInformation";
import TrainersDetails from "./ADMIN_SCREEN/pages/TrainersDetails";
import CloudComputing from "./USER_SCREEN/Components/Admin/CloudComputing/CloudComputing";
import AdminHomepage from "./USER_SCREEN/Components/Admin/AdminHomepage";
import BrowsCategoriesNavBar from "./USER_SCREEN/Components/Admin/NavBarSection/BrowsCategoriesNavBar";
import AdminNavbar from "./USER_SCREEN/Components/Admin/NavBarSection/AdminNavbar";
import FooterUser from "./USER_SCREEN/Components/Footer/FooterUser";
import Login from "./USER_SCREEN/Components/LoginAuth/Login";
import Signup from "./USER_SCREEN/Components/LoginAuth/Signup";
import IntroPage from "./USER_SCREEN/Components/Users/IntroPage/IntroPage";
import AwsCertificationTraining from "./USER_SCREEN/Components/Admin/TrainingPage/AwsCertificationTraining";
import MastersPage from "./USER_SCREEN/Components/Admin/MastersPage/MastersPage";
import ThemesADMIN from "./ADMIN_SCREEN/components/ThemesADMIN";
import Footer1 from "./USER_SCREEN/Components/Footer/Footer1";
import StudentsInformation from "./ADMIN_SCREEN/pages/StudentsInformation";
import MyClassroom from "./USER_SCREEN/Components/Users/MyClassRoom/MyClassroom";
import MyclassContent from "./USER_SCREEN/Components/Admin/Body/Myclassroom/MyclassContent/MyclassContent";
import GettingStarted from "./USER_SCREEN/Components/Admin/Body/Myclassroom/GettingStarted/GettingStarted";
import CourseContent from "./USER_SCREEN/Components/Admin/Body/Myclassroom/CourseContent/CourseContent";
import StaffComplete from "./STAFF_SCREEN/StaffComplete/StaffComplete";

const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
  } = useStateContext();
  const [subcourse, setSubcourse] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [livecourses, setLivecourses] = useState([]);
  const [selfpacedcourses, setSelfpacedcourses] = useState([]);
  const [recommendedcourses, setRecommendedcourses] = useState([]);
  const [mainmenu, setMainmenu] = useState([]);
  const [sidemenu, setSidemenu] = useState([]);
  const [learners, setLearners] = useState([]);
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

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
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

  useEffect(() => {
    fetchlivecourses();
    fetchselfpacedcourses();
    fetchrecommendedcourses();
    fetchmainmenu();
    fetchsidemenu();
  }, []);

  const fetchlivecourses = async () => {
    try {
      const response = await fetch("/live-course");
      const data = await response.json();
      console.log("dataapp = ", data); // Log the data variable
      setLivecourses(data);
      console.log("dataRecordsetapp = ", data); // Log the data variable
    } catch (error) {
      console.log(error);
    }
  };

  const fetchselfpacedcourses = async () => {
    try {
      const response = await fetch("/selfpaced-course");
      const data1 = await response.json();
      setSelfpacedcourses(data1);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchrecommendedcourses = async () => {
    try {
      const response = await fetch("/recommended-course");
      const data2 = await response.json();
      setRecommendedcourses(data2);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchmainmenu = async () => {
    try {
      const response = await fetch("/main-menu");
      const data3 = await response.json();
      setMainmenu(data3);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchsidemenu = async () => {
    try {
      const response = await fetch("/subcourseinfo");
      const data3 = await response.json();
      setSidemenu(data3);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AdminHomepage />
                <BrowsCategoriesNavBar />
                <AdminNavbar />
                <CloudComputing />
                <FooterUser />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/user_homepage"
            element={
              <>
                <AdminHomepage />
                <AdminNavbar />
                <IntroPage />
                <Footer1 />
              </>
            }
          />
          {livecourses.map((course) => (
            <Route
              key={course.coursename}
              path={`/user_homepage/course/${encodeURIComponent(
                course.coursename
              )}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <IntroPage />
                  <Footer1 />
                </>
              }
            />
          ))}

          {selfpacedcourses.map((course) => (
            <Route
              key={course.coursename}
              path={`/user_homepage/course/${encodeURIComponent(
                course.coursename
              )}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <IntroPage />
                  <Footer1 />
                </>
              }
            />
          ))}
          {recommendedcourses.map((course) => (
            <Route
              key={course.coursename}
              path={`/user_homepage/course/${encodeURIComponent(
                course.coursename
              )}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <IntroPage />
                  <Footer1 />
                </>
              }
            />
          ))}
          {/* next page for user to enter course */}

          {livecourses.map((course) => (
            <Route
              key={course.coursename}
              path={`/user_homepage/my-classroom/${encodeURIComponent(
                course.coursename
              )}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <MyClassroom />
                  <MyclassContent />
                  <GettingStarted />
                  <FooterUser />
                </>
              }
            />
          ))}
          {selfpacedcourses.map((course) => (
            <Route
              key={course.coursename}
              path={`/user_homepage/my-classroom/${encodeURIComponent(
                course.coursename
              )}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <MyClassroom />
                  <MyclassContent />
                  <GettingStarted />
                  <FooterUser />
                </>
              }
            />
          ))}
          {recommendedcourses.map((course) => (
            <Route
              path={`/user_homepage/my-classroom/${encodeURIComponent(
                course.coursename
              )}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <MyClassroom />
                  <MyclassContent />
                  <GettingStarted />
                  <FooterUser />
                </>
              }
            />
          ))}
          {/*                        homepage/gettingstarted for main page            */}

          {livecourses.map((course) => (
            <Route
              key={course.coursename}
              path={`/user_homepage/my-classroom/gettingstarted/${encodeURIComponent(
                course.coursename
              )}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <MyClassroom />
                  <MyclassContent />
                  <GettingStarted />
                  <FooterUser />
                </>
              }
            />
          ))}
          {selfpacedcourses.map((course) => (
            <Route
              key={course.coursename}
              path={`/user_homepage/my-classroom/gettingstarted/${encodeURIComponent(
                course.coursename
              )}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <MyClassroom />
                  <MyclassContent />
                  <GettingStarted />
                  <FooterUser />
                </>
              }
            />
          ))}
          {recommendedcourses.map((course) => (
            <Route
              path={`/user_homepage/my-classroom/gettingstarted/${encodeURIComponent(
                course.coursename
              )}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <MyClassroom />
                  <MyclassContent />
                  <GettingStarted />
                  <FooterUser />
                </>
              }
            />
          ))}

{/*                     user_homepage/coursecontent for main page                                                              */}
            {livecourses.map((course) => (
            <Route
              key={course.coursename}
              path={`/user_homepage/my-classroom/coursecontent/page/:page/${encodeURIComponent(
                course.coursename
              )}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <MyClassroom />
                  <MyclassContent />
                  <CourseContent />
                  <FooterUser />
                </>
              }
            />
          ))}
          {selfpacedcourses.map((course) => (
            <Route
              key={course.coursename}
              path={`/user_homepage/my-classroom/coursecontent/page/:page/${encodeURIComponent(
                course.coursename
              )}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <MyClassroom />
                  <MyclassContent />
                  <CourseContent />
                  <FooterUser />
                </>
              }
            />
          ))}
          {recommendedcourses.map((course) => (
            <Route
              path={`/user_homepage/my-classroom/coursecontent/page/:page/${encodeURIComponent(
                course.coursename
              )}`}
              element={
                <>
                 <AdminHomepage />
                  <AdminNavbar />
                  <MyClassroom />
                  <MyclassContent />
                  <CourseContent />
                  <FooterUser />
                </>
              }
            />
          ))}
          {/*  <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <MyClassroom />
                  <MyclassContent />
                  <CourseContent />
                  <FooterUser />
                </> */}
          {mainmenu.map((course) => (
            <Route
              key={course.coursename}
              path={`/${course.category}`}
              element={
                <>
                  <AdminHomepage />
                  <BrowsCategoriesNavBar />
                  <AdminNavbar />
                  <CloudComputing />
                  <FooterUser />
                </>
              }
            />
          ))}
          {sidemenu.map((course) => (
            <Route
              path={`/${course.subcourseid}`}
              element={
                <>
                  <AdminHomepage />
                  <AdminNavbar />
                  <AwsCertificationTraining />
                  <FooterUser />
                </>
              }
            />
          ))}
          <Route
            path="/masters-program/cloud-architect"
            element={
              <>
                <AdminHomepage />
                <AdminNavbar />
                <MastersPage />
                <FooterUser />
              </>
            }
          />
        </Routes>

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
                <CoursesAD />
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
          {/* <Route path="/master" element={<StaffComplete />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
    
    
  );
};

export default App;
