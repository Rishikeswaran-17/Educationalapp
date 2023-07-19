import React, { useEffect, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { Header } from "../components";
import avatar3 from "../data/avatar3.png";
import { sessionModeData } from "../data/dummy";
import { useLocation } from "react-router-dom";

const TrainersDetails = () => {
  const location = useLocation();
  const [trainers, setTrainers] = useState([]);
  const { pathname } = location;
  const [, afterTrainers] = pathname.split("trainers/");
  const encodedEmployeeID = afterTrainers.split("/").shift();
  const employeeid = decodeURIComponent(encodedEmployeeID);
  console.log("pathname:", pathname);
  console.log("afterTrainers:", afterTrainers);
  console.log("encodedEmployeeID:", encodedEmployeeID);
  console.log("employeeid:", employeeid);

  const fetchTrainers = async () => {
    try {
      const response = await fetch("/trainerstable");
      const data = await response.json();
      console.log("datatrainers =", data);
      setTrainers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrainers();
  }, []);

  const matchingtrainerdetails = trainers.find(
    (course) => String(employeeid) === String(course.EmployeeID)
  );

  console.log("Employee ID:", employeeid);
  console.log("Matching Trainer Details:", matchingtrainerdetails);

  if (matchingtrainerdetails) {
    console.log("Matching Trainer Details found.");
  } else {
    console.log("No matching Trainer Details found.");
  }
  // Helper function to format the date
  function formatDate(dateString) {
    // Parse the date string to a Date object
    const hiredDate = new Date(dateString);

    // Get the day, month, and year
    const day = hiredDate.getDate().toString().padStart(2, "0");
    const month = (hiredDate.getMonth() + 1).toString().padStart(2, "0");
    const year = hiredDate.getFullYear().toString();

    // Concatenate the formatted date
    return `${day}/${month}/${year}`;
  }

  return (
    <div className="my-3 absolute top-12 left-96 w-9/12">
      <div className="p-5">
        <Header category="Page" title="Trainer Details" />
        {matchingtrainerdetails && (
          <div className="">
            <div className="flex gap-5">
              <div className="my-auto md:ml-12 w-1/3 ">
                <img
                  className="rounded-full mx-auto w-60 h-60 border-slate-200 dark:border-black border-4"
                  src={avatar3}
                  alt="emp"
                />
              </div>
              <div className="w-6/12 p-8 mx-auto md:mr-96 md:w-8/12 dark:text-white bg-slate-200 dark:bg-white dark:bg-opacity-10 rounded-3xl">
                <div className="flex justify-between text-lg font-semibold dark:text-blue-500">
                  EmployeeID:{" "}
                  <p className="font-normal dark:text-white">
                    {matchingtrainerdetails.EmployeeID}
                  </p>
                </div>
                <div className="flex justify-between text-lg font-semibold dark:text-blue-500">
                  Name:{" "}
                  <p className="font-normal dark:text-white">
                    {matchingtrainerdetails.Name}
                  </p>
                </div>
                <div className="flex justify-between text-lg font-semibold dark:text-blue-500">
                  Designation:{" "}
                  <p className="font-normal dark:text-white">
                    {matchingtrainerdetails.Designation}
                  </p>
                </div>
                <div className="flex justify-between text-lg font-semibold dark:text-blue-500">
                  Courses:{" "}
                  <p className="font-normal dark:text-white">
                    {matchingtrainerdetails.Courses}
                  </p>
                </div>
                <div className="flex justify-between text-lg font-semibold dark:text-blue-500">
                  HiredDate:{" "}
                  <p className="font-normal dark:text-white">
                    {formatDate(matchingtrainerdetails.HiredDate)}
                  </p>
                </div>
                <div className="flex justify-between text-lg font-semibold dark:text-blue-500">
                  Reports to:{" "}
                  <p className="font-normal dark:text-white">
                    {matchingtrainerdetails.ReportsTo}
                  </p>
                </div>
                <div className="flex justify-between text-lg font-semibold dark:text-blue-500">
                  Contact No:{" "}
                  <p className="font-normal dark:text-white">
                    {matchingtrainerdetails.PhoneNumber}
                  </p>
                </div>
                <div className="flex justify-between text-lg font-semibold dark:text-blue-500">
                  Location:{" "}
                  <p className="font-normal dark:text-white">
                    {matchingtrainerdetails.Location}
                  </p>
                </div>
                <div />
              </div>
            </div>
          </div>
        )}
        {matchingtrainerdetails && (
          <div className="m-8 flex gap-5">
            <div className="dark:text-gray-200 bg-slate-200 dark:bg-white dark:bg-opacity-10 h-44 rounded-xl w-full lg:w-80 p-8 m-3">
              <div className="flex justify-between mb-3 items-center dark:bg-transparent">
                <div>
                  <p className="font-semibold text-gray-400">Payslip</p>
                  <p className="text-2xl">{matchingtrainerdetails.Payslip}</p>
                </div>
                <button
                  type="button"
                  className="text-2xl opacity-0.9 bg-blue-500 text-white hover:drop-shadow-xl rounded-full p-4"
                >
                  <BsCurrencyDollar />
                </button>
              </div>
              <div className="flex justify-between mb-3 items-center dark:bg-transparent">
                <div>
                  <p className="font-semibold text-gray-400">Monthly Salary</p>
                  <p className="text-2xl">
                    {matchingtrainerdetails.Monthlysalary}
                  </p>
                </div>
                <button
                  type="button"
                  className="text-2xl opacity-0.9 bg-green-500 text-white hover:drop-shadow-xl rounded-full p-4"
                >
                  <BsCurrencyDollar />
                </button>
              </div>
            </div>
            <div
              key="Schedule Timings"
              className="dark:text-gray-200 bg-slate-200 dark:bg-white dark:bg-opacity-10 h-44 rounded-xl w-full lg:w-80 p-8 m-3"
            >
              {matchingtrainerdetails.ClassTimingsfrom &&
              matchingtrainerdetails.ClassTimingsto ? (
                <>
                  <p className="mt-1">
                    <span className="text-lg font-semibold">
                      {matchingtrainerdetails.ClassTimingsfrom} -{" "}
                      {matchingtrainerdetails.ClassTimingsto}
                    </span>
                  </p>
                  <p className="mt-3">
                    <span className="text-lg font-semibold"></span>
                  </p>
                  <p className="text-sm text-right text-gray-400 mt-6">
                    Schedule Timings
                  </p>
                </>
              ) : (
                <p className="text-lg font-semibold">
                  No Schedule Timings Available
                </p>
              )}
            </div>
            {/* <div className="dark:text-gray-200 bg-slate-200 dark:bg-white dark:bg-opacity-10 h-44 rounded-xl w-full lg:w-80 p-8 m-3">
              Hello
            </div> */}
          </div>
        )}
        {/* <div className="md:m-5 w-11/12 mx-auto p-2 md:p-10 bg-slate-200 dark:bg-white dark:bg-opacity-10 rounded-3xl">
          Hello
        </div> */}
      </div>
    </div>
  );
};

export default TrainersDetails;
