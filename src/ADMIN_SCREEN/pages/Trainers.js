import React, { useEffect, useState } from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit } from '@syncfusion/ej2-react-grids';
import { useNavigate } from 'react-router-dom';
import { contextMenuItems, employeesGrid } from '../data/dummy';
import { Button, Header } from '../components';
import { useLocation } from "react-router-dom";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import avatar3 from "../data/avatar3.png";
import { useStateContext } from "../contexts/ContextProvider";

const Trainers = () => {
  const toolbarOptions = ['Search'];
  const [trainers, setTrainers] = useState([]);
  const navigate = useNavigate();
  const editing = { allowDeleting: true, allowEditing: true };
  const { currentColor, currentMode } = useStateContext();
  const [employeeID, setEmployeeID] = useState("");
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [courses, setCourses] = useState("");
  const [hiredDate, setHiredDate] = useState("");
  const [reportsTo, setReportsTo] = useState("");
  const [status, setStatus] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [payslip, setPayslip] = useState("");
  const [monthlysalary, setMonthlySalary] = useState("");


  const fetchTrainers = async () => {
    try {
      const response = await fetch('/trainerstable');
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
  const handleCourseClick = (args) => {
    const EmployeeID = args.data.EmployeeID;
    navigate(`/trainers/${EmployeeID}`); // Update the route to include `/trainers/`
  };
  const employeesData = (data) => (
    data.map(item => ({
      image: item.image,
      EmployeeID: item.EmployeeID,
      Name: item.Name,
      Designation: item.Designation,
      Courses: item.Courses,
      HiredDate: item.HiredDate,
      ReportsTo: item.ReportsTo,
      Status: item.Status,
      PhoneNumber: item.PhoneNumber,
      Location: item.Location,
      EmployeeImage: item.image,
      Payslip: item.Payslip,
      Monthlysalary: item.Monthlysalary
    }))
  );

  const handleSubmit = (e) => {
    console.log("Handling form submission...");
    console.log("employeeID: ",employeeID);
    console.log("name: ",name);
    console.log("designation: ",designation);
    console.log("courses: ",courses);
    console.log("hiredDate: ",hiredDate);
    console.log("reportsTo: ",reportsTo);
    console.log("status: ",status);
    console.log("phoneNumber: ",phoneNumber);
    console.log("location: ",location);
    console.log("image: ",image);
    console.log("payslip: ",payslip);
    console.log("monthlysalary: ",monthlysalary);
    e.preventDefault();
    const formData = new FormData();
    formData.append("employeeID",employeeID);
    formData.append("name",name);
    formData.append("designation",designation);
    formData.append("courses",courses);
    formData.append("hiredDate",hiredDate);
    formData.append("reportsTo",reportsTo);
    formData.append("status",status);
    formData.append("phoneNumber",phoneNumber);
    formData.append("location",location);
    formData.append("image",image);
    formData.append("payslip",payslip);
    formData.append("monthlysalary",monthlysalary);
    console.log("Form Data:", Object.fromEntries(formData)); // Display form data as an object
    console.log("Sending POST request to server...");
    fetch("/insertupdatetrainer", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log("Request successful");
        } else {
          throw new Error("Upload Failed");
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        console.log("Response data:", data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    
    <div className='my-3 absolute top-12 left-96 w-9/12'>
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-slate-200 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData(trainers)}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
        contextMenuItems={contextMenuItems}
        rowSelected={handleCourseClick}
        style={{
          cursor: 'pointer'
        }}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search, Page, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
      <div className="w-9/12 mx-auto flex justify-evenly bg-slate-300 dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-5 mt-10">
        <form class="w-full max-w-sm">
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                EmployeeID
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" onChange={(e) => setEmployeeID(e.target.value)} />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Name
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" onChange={(e) => setName(e.target.value)} />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Designation
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" onChange={(e) => setDesignation(e.target.value)}  />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Courses
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" onChange={(e) => setCourses(e.target.value)} />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Hired Date
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" onChange={(e) => setHiredDate(e.target.value)} />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Reports To
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" onChange={(e) => setReportsTo(e.target.value)}  />
            </div>
          </div>
        </form>
        <form class="w-full max-w-sm">
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Status
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" onChange={(e) => setStatus(e.target.value)}  />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Phone Number
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Location
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" onChange={(e) => setLocation(e.target.value)} />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Payslip
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" onChange={(e) => setPayslip(e.target.value)}  />
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                Monthly Salary
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" onChange={(e) => setMonthlySalary(e.target.value)} />
            </div>
          </div>
          <div class="md:flex md:items-end">
            <div class="md:w-2/3 ml-auto">
              <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white  font-bold py-2 px-4 rounded" type="button" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};
export default Trainers;