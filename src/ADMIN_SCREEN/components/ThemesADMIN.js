import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import React, { useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { Navbar, Sidebar, ThemeSettings } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { useLocation, useParams } from "react-router-dom";
import { useState } from "react";

const ThemesADMIN = () => {
  const { activeMenu, currentColor, themeSettings, setThemeSettings } =
    useStateContext();

  const location = useLocation();
  const currentPage = location.pathname;
  const [trainers, setTrainers] = useState([]);
  const fetchTrainers = async () => {
    try {
      const response = await fetch("/trainerstable");
      const data = await response.json();
      //console.log("datatrainers =", data);
      setTrainers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrainers();
  }, []);

  const [subcourse, setSubcourse] = useState([]);
  const fetchSubcourse = async () => {
    try {
      const response = await fetch("/Subcoursestable");
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

  const shouldShowThemesADMIN = visiblePaths.some((path) => {
    if (currentPage.startsWith(path)) {
      if (path === "/trainers/:EmployeeID") {
        const regex = /^\/trainers\/(\d+)$/;
        const match = currentPage.match(regex);
        const employeeID = match ? match[1] : null;
        return trainers.some((trainer) => trainer.EmployeeID === employeeID);
      }
      return true;
    }
    return false;
  });

  const shouldShowThemesADMIN1 = subcourse.some(
    (course) => course.subcoursename === decodeURIComponent(subcoursename)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      {(shouldShowThemesADMIN && shouldShowThemesADMIN1) || (
        <div className="flex relative dark:bg-main-dark-bg">
          <div
            className={
              activeMenu
                ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
            }
          >
            <div>
              {themeSettings && <ThemeSettings />}
              <div
                className="fixed right-4 bottom-4"
                style={{ zIndex: "1000" }}
              >
                <TooltipComponent content="Settings" position="Top">
                  <button
                    type="button"
                    onClick={() => setThemeSettings(true)}
                    style={{ background: currentColor, borderRadius: "50%" }}
                    className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                  >
                    <FiSettings />
                  </button>
                </TooltipComponent>
              </div>
              {activeMenu ? (
                <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                  <Sidebar />
                </div>
              ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                  <Sidebar />
                </div>
              )}
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                <Navbar />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemesADMIN;
