import React, { useEffect, useState } from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Search,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from '@syncfusion/ej2-react-grids';
import { useNavigate } from 'react-router-dom';
import { contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';


function Courses() {
  const editing = { allowDeleting: true, allowEditing: true };
  const toolbarOptions = ['Search'];
  const navigate = useNavigate();
  const [subcourse, setSubcourse] = useState([]);
  const fetchSubcourse = async () => {
    try {
      const response = await fetch('/Subcoursestable');
      const data = await response.json();
      console.log('datasubcourses =', data);
      setSubcourse(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchSubcourse();
  }, []);

  const transformData = (data) => data.map((item) => ({
    subcourseid: item.subcourseid,
    image: item.image,
    subcoursename: item.subcoursename,
    enrolledcustomers: item.enrolledcustomers,
    Status: item.Status,
    Trainer: item.Trainer,
    CourseAmount: item.Courseamount,
  }));
  const handleCourseClick = (args) => {
    const subcourseName = args.data.subcoursename;
    navigate(`/${subcourseName}`);
  };
  return (
    <div className='my-3 absolute top-12 left-96 w-9/12'>
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-slate-200 dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Page" title="Courses" />
      <GridComponent
        id="gridcomp"
        dataSource={transformData(subcourse)}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
        rowSelected={handleCourseClick}
        toolbar={toolbarOptions}
        style={{ cursor: 'pointer' }}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Search,
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
      </div>
    </div>
  );
}
export default Courses;
