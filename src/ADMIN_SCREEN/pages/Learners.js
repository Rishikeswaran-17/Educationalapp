import React from "react";
import { Link } from 'react-router-dom';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";
import {
  classModeData,
  coursesPurchasedData,
  customersData,
  customersGrid,
  earningData,
  progressData,
  sessionModeData,
} from "../data/dummy";
import { Header } from "../components";
import CircularProgressWithLabel from "./Charts/CircularProgress";
import { useState } from "react";
import { useEffect } from "react";
const Learners = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Delete"];
  const editing = { allowDeleting: true, allowEditing: true };
  const [learners, setLearners] = useState([]);
  const fetchLearners = async () => {
    try {
      const response = await fetch("/learners");
      const data = await response.json();
       console.log("datalearners =",data);
      setLearners(data);
    } catch (error) {
       console.log(error);
    }
  };
  useEffect(() => {
    fetchLearners();
  }, []);
  const customersData = (data) => (
    data.map((item) => ({
      LearnerID: item.LearnerID,
      Batch: item.Batch,
      BatchTimings: item.BatchTimings,
      Name: item.Name,
      Age: item.Age,
      Grade: item.Grade,
      CoursesEnrolled: item.CoursesEnrolled,
      Payment: item.Payment,
      PhoneNumber: item.PhoneNumber,
      Email: item.Email,
    }))
  );
  return (
    <div className='my-3 absolute top-12 left-96 w-9/12'>
      <div className="p-5">
        <Header category="Page" title="Students" />
      </div>
      <div className="flex grid-cols-1 gap-3 ml-3">
        <div className="flex mb-3 flex-wrap justify-center gap-5 w-11/12 mx-auto">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-slate-200 h-44 dark:text-gray-200 dark:bg-secondary-dark-bg lg:w-64 md:w-56 p-4 pt-9 rounded-2xl "
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.tutorName}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.BatchTiming}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
          {coursesPurchasedData.map((course) => (
            <div
              key={course.coursesPurchased}
              className="bg-slate-200 h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl "
            >
              <button
                type="button"
                style={{
                  color: course.iconColor,
                  backgroundColor: course.iconBg,
                }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {course.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">
                  {course.coursesPurchased}
                </span>
                <span className={`text-sm text-${course.pcColor} ml-2`}>
                  {course.BatchTiming}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{course.title}</p>
            </div>
          ))}
          {progressData.map((progress) => (
            <div
              key={progress.title}
              className="bg-slate-200 h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 rounded-2xl "
            >
              <span className="mt-10 m-3">
                <CircularProgressWithLabel value={progress.value} />
              </span>
              <p className="text-sm text-gray-400 mt-3">{progress.title}</p>
            </div>
          ))}
          {sessionModeData.map((time) => (
            <div
              key={time.title}
              className="bg-slate-200 h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl "
            >
              <p className="mt-1">
                <span className="text-lg font-semibold">{time.time1}</span>
              </p>
              <p className="mt-3">
                <span className="text-lg font-semibold">{time.time2}</span>
              </p>
              <p className="text-sm text-gray-400 mt-6">{time.title}</p>
            </div>
          ))}
          {classModeData.map((time) => (
            <div
              key={time.title}
              className="bg-slate-200 h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl "
            >
              <p className="">
                <span className="text-lg font-semibold">{time.time1}</span>
              </p>
              <p className="mt-3">
                <span className="text-lg font-semibold">{time.time2}</span>
              </p>
              <p className="text-sm text-gray-400  mt-7">{time.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="md:m-5 mt-16 p-2 w-11/12 md:p-6 bg-slate-200 dark:bg-secondary-dark-bg rounded-3xl">
      {/* {learners.map((course) => (
    <a key={course.LearnerID} href={`/students-information/${course.LearnerID}`}> */}
    {/* < a href="/students-information/:LearnerID"> */}
        <GridComponent
          dataSource={customersData(learners)}
          // dataSource={customersData([course])}
          enableHover={false}
          allowPaging={true}
          width="100%"
          pageSettings={{ pageCount: 5 }}
          selectionSettings={selectionsettings}
          toolbar={toolbarOptions}
          editSettings={editing}
          allowSorting={true}
          allowFiltering={true}
        >
          <ColumnsDirective>
            {customersGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            )
            )
            }
            {/* {learners.map((course) => (
      <ColumnDirective key={course.LearnerID} {...item} />
    ))} */}
          </ColumnsDirective>
          <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
        </GridComponent>
        {/* </a> */}
          {/* ))}  */}
      </div>
    </div>
  );
};
export default Learners;