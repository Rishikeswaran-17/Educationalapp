import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Calendar, Stacked, Pyramid, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';
import Reports from './pages/Reports';
import Courses from './pages/Courses';
import Trainers from './pages/Trainers';
import Learners from './pages/Learners';
import CourseInformation from './pages/CourseInformation';
import TrainersDetails from './pages/TrainersDetails';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  const [subcourse, setSubcourse] = useState([]);
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  const fetchsubcourse = async () => {
    try {
      const response = await fetch('/Subcourse');
      const data = await response.json();
      console.log('datasubcourses =', data);
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
      const response = await fetch('/trainers');
      const data = await response.json();
      console.log('datatrainers =', data);
      setTrainers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrainers();
  }, []);
  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
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
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {/* dashboard  */}
                <Route path="/" element={(<Reports />)} />
                <Route path="/reports" element={(<Reports />)} />

                {/* pages  */}
                <Route path="/courses" element={<Courses />} />
                <Route path="/trainers" element={<Trainers />} />
                <Route path="/learners" element={<Learners />} />
                <Route path="/courseinformation" element={<CourseInformation />} />
                {subcourse.map((course) => (
                  <Route
                    key={course.subcourseid}
                    path="/:subcoursename"
                    element={<CourseInformation />}
                  />
                ))}
                {trainers.map((course) => (
                  <Route key={course.EmployeeID} path="/trainers/:EmployeeID" element={<TrainersDetails />} />
                ))}
                {/* apps  */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* charts  */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />

              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
