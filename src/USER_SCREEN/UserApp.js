import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import AdminHomepage from "./Components/Admin/AdminHomepage";
import BrowsCategoriesNavBar from "./Components/Admin/NavBarSection/BrowsCategoriesNavBar";
import AdminNavbar from "./Components/Admin/NavBarSection/AdminNavbar";
import CloudComputing from "./Components/Admin/CloudComputing/CloudComputing";
import FooterUser from "./Components/Footer/FooterUser";
import { Login } from "@mui/icons-material";
import Signup from "./Components/LoginAuth/Signup";
import IntroPage from "./Components/Users/IntroPage/IntroPage";
import Footer1 from "./Components/Footer/Footer1";
import AwsCertificationTraining from "./Components/Admin/TrainingPage/AwsCertificationTraining";
import MastersPage from "./Components/Admin/MastersPage/MastersPage";
import { useEffect } from "react";
import { useState } from "react";

const UserApp = () => {
    const [livecourses, setLivecourses] = useState([]);
    const [selfpacedcourses, setSelfpacedcourses] = useState([]);
    const [recommendedcourses, setRecommendedcourses] = useState([]);
    const [mainmenu, setMainmenu] = useState([]);
    const [sidemenu, setSidemenu] = useState([]);
    
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
    <div>
      <Router>
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
      </Router>
    </div>
  );
};

export default UserApp;
