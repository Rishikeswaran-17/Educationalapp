import React, { useEffect, useState } from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit} from '@syncfusion/ej2-react-grids';
import { useNavigate } from 'react-router-dom';
import { contextMenuItems, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Trainers = () => {
  const toolbarOptions = ['Search'];
  const [trainers, setTrainers] = useState([]);
  const navigate = useNavigate();
  const editing = { allowDeleting: true, allowEditing: true };

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
    }))
  );

  const handleCourseClick = (args) => {
    const EmployeeID = args.data.EmployeeID;
    navigate(`/trainers/${EmployeeID}`); // Update the route to include `/trainers/`
  };
  
  
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
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
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Search, Page,Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />

      </GridComponent>
    </div>
  );
};
export default Trainers;
