import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Radio from '@mui/material/Radio';
import { useLocation } from 'react-router-dom';

export default function TableData() {
  const location = useLocation();
  const { pathname } = location;
  const [selectedRow, setSelectedRow] = useState(null);
  const [subcoursefees, setSubcoursefees] = useState([]);

  useEffect(() => {
    fetchSubcourseFees();
  }, []);

  const fetchSubcourseFees = async () => {
    try {
      const response = await fetch("/subcoursefees");
      const data = await response.json();
      console.log("datasubcourseinfo =", data);
      setSubcoursefees(data);
      console.log("datasubcourseinfo =", data);
    } catch (error) {
      console.log(error);
    }
  };

  const matchingSubcourseFees = subcoursefees.find(
    (course) => Number(pathname.slice(1)) === course.subcourseid
  );

  const handleRowSelection = (index) => {
    setSelectedRow(index);
  };

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead></TableHead>
        <TableBody>
          {matchingSubcourseFees && (
            <TableRow
              key={matchingSubcourseFees.subcourseid}
              className={`hover:bg-orange-50 active:bg-orange-50 selection:bg-orange-50 ${selectedRow === matchingSubcourseFees.subcourseid ? 'selected' : ''
                }`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={() => handleRowSelection(matchingSubcourseFees.subcourseid)}
            >
              <TableCell component="th" scope="row">
                <Radio
                  checked={selectedRow === matchingSubcourseFees.subcourseid}
                  onChange={() => handleRowSelection(matchingSubcourseFees.subcourseid)}
                />
              </TableCell>
              <TableCell align="left">{matchingSubcourseFees.batchstartdate && matchingSubcourseFees.batchstartdate.slice(1, 9)}</TableCell>
              <TableCell align="left">
                <p className="font-semibold">{matchingSubcourseFees.batchdays && matchingSubcourseFees.batchdays.slice(1, 20)}</p>
              </TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left">
                <div>
                  <p className="font-semibold">{matchingSubcourseFees.batchTiming && matchingSubcourseFees.batchTiming.slice(1, 27)}</p>
                  <p className="text-sm">{matchingSubcourseFees.batchTiming && matchingSubcourseFees.batchTiming.slice(27, 34)}</p>
                </div>
              </TableCell>
            </TableRow>
          )}
          {matchingSubcourseFees && (
            <TableRow
              key={matchingSubcourseFees.subcourseid}
              className='hover:bg-orange-50 active:bg-orange-50 selection:bg-orange-50'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Radio
                  checked={selectedRow === `${matchingSubcourseFees.subcourseid}`}
                  onChange={() => handleRowSelection(`${matchingSubcourseFees.subcourseid}`)}
                />
              </TableCell>
              <TableCell align="left">{matchingSubcourseFees.batchstartdate && matchingSubcourseFees.batchstartdate.slice(10, 18)}</TableCell>
              <TableCell align="left"><p className='font-semibold'>{matchingSubcourseFees.batchdays && matchingSubcourseFees.batchdays.slice(21, 42)}</p></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"><div><p className='font-semibold'>{matchingSubcourseFees.batchTiming && matchingSubcourseFees.batchTiming.slice(35, 61)}</p><p className='text-sm'>{matchingSubcourseFees.batchTiming && matchingSubcourseFees.batchTiming.slice(61, 78)}</p></div></TableCell>
            </TableRow>
          )}
          {matchingSubcourseFees && (
            <TableRow
              key={matchingSubcourseFees.subcourseid}
              className='hover:bg-orange-50 active:bg-orange-50 selection:bg-orange-50'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Radio
                  checked={selectedRow === `${matchingSubcourseFees.subcourseid}`}
                  onChange={() => handleRowSelection(`${matchingSubcourseFees.subcourseid}`)}
                />
              </TableCell>
              <TableCell align="left">{matchingSubcourseFees.batchstartdate && matchingSubcourseFees.batchstartdate.slice(19, 27)}</TableCell>
              <TableCell align="left"><p className='font-semibold'>{matchingSubcourseFees.batchdays && matchingSubcourseFees.batchdays.slice(43, 64)}</p></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"><div><p className='font-semibold'>{matchingSubcourseFees.batchTiming && matchingSubcourseFees.batchTiming.slice(1, 27)}</p><p className='text-sm'>{matchingSubcourseFees.batchTiming && matchingSubcourseFees.batchTiming.slice(27, 34)}</p></div></TableCell>
            </TableRow>
          )}
          {matchingSubcourseFees && (
            <TableRow
              key={matchingSubcourseFees.subcourseid}
              className='hover:bg-orange-50 active:bg-orange-50 selection:bg-orange-50'
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Radio
                  checked={selectedRow === `${matchingSubcourseFees.subcourseid}`}
                  onChange={() => handleRowSelection(`${matchingSubcourseFees.subcourseid}`)}
                />
              </TableCell>
              <TableCell align="left">{matchingSubcourseFees.batchstartdate && matchingSubcourseFees.batchstartdate.slice(1, 9)}</TableCell>
              <TableCell align="left"><p className='font-semibold'>{matchingSubcourseFees.batchdays && matchingSubcourseFees.batchdays.slice(1, 20)}</p></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"><div><p className='font-semibold'>{matchingSubcourseFees.batchTiming && matchingSubcourseFees.batchTiming.slice(1, 27)}</p><p className='text-sm'>{matchingSubcourseFees.batchTiming && matchingSubcourseFees.batchTiming.slice(27, 34)}</p></div></TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}








// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';

// import Radio from '@mui/material/Radio';
// import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';


// export default function TableData() {
//   const location = useLocation();
//   const { pathname } = location;
//   const [selectedRow, setSelectedRow] = React.useState(null);
//   const [subcoursefees, setSubcoursefees] = useState([]);

//   useEffect(() => {
//     fetchsubcoursefees();
//   }, []);
//   const fetchsubcoursefees = async () => {
//     try {
//       const response = await fetch("/subcoursefees");
//       const data = await response.json();
//       console.log("datasubcourseinfo =", data);
//       setSubcoursefees(data);
//       console.log("datasubcourseinfo =", data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const matchingSubcoursefees = subcoursefees.find(
//     (course) => Number(pathname.slice(1)) === course.subcourseid
//   );

//   const handleRowSelection = (index) => {
//     setSelectedRow(index);
//   };
//   return (
//     <TableContainer>
//       <Table aria-label="simple table">
//         <TableHead></TableHead>
//         <TableBody>
//         {matchingSubcoursefees && (
//             <TableRow
//               key={matchingSubcoursefees.subcourseid}
//               className={`hover:bg-orange-50 active:bg-orange-50 selection:bg-orange-50 ${
//                 selectedRow === matchingSubcoursefees.subcourseid ? 'selected' : ''
//               }`}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//               onClick={() => handleRowSelection(matchingSubcoursefees.subcourseid)}
//             >
//               <TableCell component="th" scope="row">
//                 <Radio
//                   checked={selectedRow === matchingSubcoursefees.subcourseid}
//                   onChange={() => handleRowSelection(matchingSubcoursefees.subcourseid)}
//                 />
//               </TableCell>
//               <TableCell align="left">{matchingSubcoursefees.batchstartdate.slice(1, 9)}</TableCell>
//               <TableCell align="left">
//                 <p className="font-semibold">{matchingSubcoursefees.batchdays.slice(1, 20)}</p>
//               </TableCell>
//               <TableCell align="left"></TableCell>
//               <TableCell align="left">
//                 <div>
//                   <p className="font-semibold">{matchingSubcoursefees.batchTiming.slice(1, 27)}</p>
//                   <p className="text-sm">{matchingSubcoursefees.batchTiming.slice(27, 34)}</p>
//                 </div>
//               </TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//         <TableBody>
//         {matchingSubcoursefees && (
//             <TableRow
//               key={matchingSubcoursefees.subcourseid}
//               className='hover:bg-orange-50 active:bg-orange-50 selection:bg-orange-50'
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 <Radio
//                   checked={selectedRow === `${matchingSubcoursefees.subcourseid}`}
//                   onChange={() => handleRowSelection(`${matchingSubcoursefees.subcourseid}`)}
//                 />
//               </TableCell>
//               <TableCell align="left">{matchingSubcoursefees.batchstartdate.slice(10, 18)}</TableCell>
//               <TableCell align="left"><p className='font-semibold'>{matchingSubcoursefees.batchdays.slice(21, 42)}</p></TableCell>
//               <TableCell align="left"></TableCell>
//               <TableCell align="left"><div><p className='font-semibold'>{matchingSubcoursefees.batchTiming.slice(35, 61)}</p><p className='text-sm'>{matchingSubcoursefees.batchTiming.slice(61, 78)}</p></div></TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//         <TableBody>
//         {matchingSubcoursefees && (
//             <TableRow
//               key={matchingSubcoursefees.subcourseid}
//               className='hover:bg-orange-50 active:bg-orange-50 selection:bg-orange-50'
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 <Radio
//                   checked={selectedRow === `${matchingSubcoursefees.subcourseid}`}
//                   onChange={() => handleRowSelection(`${matchingSubcoursefees.subcourseid}`)}
//                 />
//               </TableCell>
//               <TableCell align="left">{matchingSubcoursefees.batchstartdate.slice(19, 27)}</TableCell>
//               <TableCell align="left"><p className='font-semibold'>{matchingSubcoursefees.batchdays.slice(43, 64)}</p></TableCell>
//               <TableCell align="left"></TableCell>
//               <TableCell align="left"><div><p className='font-semibold'>{matchingSubcoursefees.batchTiming.slice(1, 27)}</p><p className='text-sm'>{matchingSubcoursefees.batchTiming.slice(27, 34)}</p></div></TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//         <TableBody>
//         {matchingSubcoursefees && (
//             <TableRow
//               key={matchingSubcoursefees.subcourseid}
//               className='hover:bg-orange-50 active:bg-orange-50 selection:bg-orange-50'
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 <Radio
//                   checked={selectedRow === `${matchingSubcoursefees.subcourseid}`}
//                   onChange={() => handleRowSelection(`${matchingSubcoursefees.subcourseid}`)}
//                 />
//               </TableCell>
//               <TableCell align="left">{matchingSubcoursefees.batchstartdate.slice(1, 9)}</TableCell>
//               <TableCell align="left"><p className='font-semibold'>{matchingSubcoursefees.batchdays.slice(1, 20)}</p></TableCell>
//               <TableCell align="left"></TableCell>
//               <TableCell align="left"><div><p className='font-semibold'>{matchingSubcoursefees.batchTiming.slice(1, 27)}</p><p className='text-sm'>{matchingSubcoursefees.batchTiming.slice(27, 34)}</p></div></TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }