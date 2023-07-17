import React, { useState } from 'react';

import './DataEntry.css';
import { Box, Button, FormControl, FormControlLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';

const DataEntry = () => {
  // --------------------------------- MAIN MENU
  const [mainmenuid, setMainmenuid] = useState('');
  const [mainmenuname, setMainmenuname] = useState('');
  const [category, setCategory] = useState('');
  const [tagheading, setTagheading] = useState('');
  const [tagtext, setTagtext] = useState('');
  const [status, setStatus] = useState('');

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
  };

  // --------------------------------- SUBCOURSE
  const [subcourseid, setSubcourseid] = useState('');
  const [subcoursename, setSubcoursename] = useState('');
  const [image, setImage] = useState('');
  const [enrolledcustomers, setEnrolledcustomers] = useState('');
  const [sessionmodecategory, setSessionmodecategory] = useState('');
  const [classmodecategory, setClassmodecategory] = useState('');
  const [batchstartdate, setBatchstartdate] = useState('');
  const [syllabus, setSyllabus] = useState('');
  const [coursecompletionrate, setCoursecompletionrate] = useState('');

  const handleChangeSessionModeCategory = (e) => {
    setSessionmodecategory(e.target.value);
  };

  const handleChangeClassModeCategory = (e) => {
    setClassmodecategory(e.target.value);
  };

  // ---------------------------------- MASTER COURSE
  const [mastercourseid, setMastercourseid] = useState('');
  const [mastercoursename, setMastercoursename] = useState('');
  const [Reviews, setReviews] = useState('');
  const [numberofcourses, setNumberofcourses] = useState('');
  const [coursehours, setCoursehours] = useState('');
  const [numberoflearners, setNumberoflearners] = useState('');
  const [minicoursesyllabus, setMinicoursesyllabus] = useState('');

  // ------------------------------------ MAIN MENU ADD
  const handleSubmit = (e) => {
    console.log('Handling form submission...');

    console.log('mainmenuid: ', mainmenuid);
    console.log('mainmenuname: ', mainmenuname);
    console.log('category: ', category);
    console.log('tagheading: ', tagheading);
    console.log('tagtext: ', tagtext);
    console.log('status: ', status);

    e.preventDefault();

    const formData = new FormData();
    formData.append('mainmenuid', mainmenuid);
    formData.append('mainmenuname', mainmenuname);
    formData.append('category', category);
    formData.append('tagheading', tagheading);
    formData.append('tagtext', tagtext);
    formData.append('status', status);
    console.log('Form Data:', Object.fromEntries(formData)); // Display form data as an object
    console.log('Sending POST request to server...');
    fetch('/save-mainmenu', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log('Request successful');
        } else {
          throw new Error('Upload Failed');
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        console.log('Response data:', data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  // -------------------------------- SUBCOURSE ADD
  const handleSubmitbutton = (e) => {
    console.log('Handling form submission...');
    console.log('mainmenuid:', mainmenuid);
    console.log('subcourseid :', subcourseid);
    console.log('subcoursename:', subcoursename);
    console.log('image:', image);
    console.log('enrolledcustomers:', enrolledcustomers);
    console.log('sessionmodecategory:', sessionmodecategory);
    console.log('classmodecategory:', classmodecategory);
    console.log('batchstartdate:', batchstartdate);
    console.log('syllabus:', syllabus);
    console.log('coursecompletionrate:', coursecompletionrate);
    console.log('category', category);
    e.preventDefault();
    const formData = new FormData();
    formData.append('mainmenuid', mainmenuid);
    formData.append('subcourseid', subcourseid);
    formData.append('subcoursename', subcoursename);
    formData.append('image', image);
    formData.append('enrolledcustomers', enrolledcustomers);
    formData.append('sessionmodecategory', sessionmodecategory);
    formData.append('classmodecategory', classmodecategory);
    formData.append('batchstartdate', batchstartdate);
    formData.append('syllabus', syllabus);
    formData.append('coursecompletionrate', coursecompletionrate);
    formData.append('category', category);
    console.log('Form Data:', Object.fromEntries(formData)); // Display form data as an object
    console.log('Sending POST request to server...');
    fetch('/save-subcourse', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log('Request successful');
        } else {
          throw new Error('Upload Failed');
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        console.log('Response data:', data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };
  // -------------------------------- MASTER COURSE ADD
  const handleSubmitmastercourse = (e) => {
    e.preventDefault();
    // Access the state values
    console.log('Handling form submission...');
    console.log('mainmenuid:', mainmenuid);
    console.log('mastercourseid :', mastercourseid);
    console.log(' mastercoursename:', mastercoursename);
    console.log('Reviews:', Reviews);
    console.log('numberofcourses:', numberofcourses);
    console.log('coursehours:', coursehours);
    console.log('numberoflearners:', numberoflearners);
    console.log('minicoursesyllabus:', minicoursesyllabus);
    console.log('category', category);
    e.preventDefault();
    const formData = new FormData();
    formData.append('mainmenuid', mainmenuid);
    formData.append('mastercourseid', mastercourseid);
    formData.append('mastercoursename', mastercoursename);
    formData.append('Reviews', Reviews);
    formData.append('numberofcourses', numberofcourses);
    formData.append('coursehours', coursehours);
    formData.append('numberoflearners', numberoflearners);
    formData.append('minicoursesyllabus', minicoursesyllabus);
    formData.append('category', category);
    console.log('Form Data:', Object.fromEntries(formData)); // Display form data as an object
    console.log('Sending POST request to server...');
    fetch('/save-mastercourse', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log('Request successful');
        } else {
          throw new Error('Upload Failed');
        }
        return response.json(); // Parse the response as JSON
      })
      .then((data) => {
        console.log('Response data:', data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };
  return (
    <div className="Dentry grid lg:grid-cols-3">
      {/* MAIN MENU ADD */}
      <div className="firstDiv bg-slate-200 rounded-lg">
        <p className="heading1 text-2xl text-blue-900 mb-8">Main Menu</p>
        <div className="temp">
          <TextField
            className="Textfield"
            required
            id="outlined-required"
            label="mainmenuid"
            placeholder="100001"
            defaultValue=""
            size="small"
            onChange={(e) => setMainmenuid(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: '18px' }}
            required
            id="outlined-required"
            label="Mainmenuname Required"
            defaultValue=""
            size="small"
            onChange={(e) => setMainmenuname(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: '18px' }}
            required
            id="outlined-required"
            label="Category Required"
            defaultValue=""
            size="small"
            onChange={(e) => setCategory(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: '18px' }}
            required
            id="outlined-required"
            label="Tag Heading Required"
            defaultValue=""
            size="small"
            onChange={(e) => setTagheading(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: '18px' }}
            required
            id="outlined-required"
            label="Tag Text Required"
            multiline
            rows={3}
            defaultValue=""
            size="small"
            onChange={(e) => setTagtext(e.target.value)}
          />
          <div>
            <RadioGroup
              className="Textfield"
              style={{ marginTop: '18px' }}
              required
              name="status"
              value={status}
              onChange={handleChangeStatus}
            >
              <div>
                <div>Status Required *</div>
                <div className="flex">
                  <FormControlLabel value="Active" control={<Radio />} label="Active" />
                  <FormControlLabel value="Non-Active" control={<Radio />} label="Non-Active" />
                </div>
              </div>
            </RadioGroup>
          </div>
          <div>
            <Box sx={{ '& > :not(style)': { marginX: 'auto', width: '100%', marginTop: 3 } }}>
              <Button
                className="SubmitButton"
                variant="contained"
                size="large"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </div>
        </div>
      </div>
      {/* SUBCOURSE ADD */}
      <div className="firstDiv bg-slate-200 rounded-md">
        <p className="heading1 text-2xl text-blue-900 mb-8">Sub Course</p>
        <div className="temp">
          <TextField
            className="Textfield"
            required
            id="outlined-required"
            label="mainmenuid Required"
            defaultValue=""
            placeholder="100001"
            size="small"
            onChange={(e) => setMainmenuid(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: '18px' }}
            required
            id="outlined-required"
            label="subcourseid Required"
            defaultValue=""
            size="small"
            onChange={(e) => setSubcourseid(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: '18px' }}
            required
            id="outlined-required"
            label="subcoursename Required"
            defaultValue=""
            size="small"
            onChange={(e) => setSubcoursename(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: '18px' }}
            required
            id="outlined-required"
            label="image Required"
            defaultValue=""
            size="small"
            onChange={(e) => setImage(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: '18px' }}
            required
            id="outlined-required"
            label="enrolledcustomers Required"
            defaultValue=""
            size="small"
            onChange={(e) => setEnrolledcustomers(e.target.value)}
          />
          <div>
            <RadioGroup
              className="Textfield"
              style={{ marginTop: '18px' }}
              required
              name="sessionmodecategory"
              value={sessionmodecategory}
              onChange={handleChangeSessionModeCategory}
            >
              <div>
                <div>Session Mode Required *</div>
                <div>
                  <FormControlLabel value="Weekend/Weekday" control={<Radio />} label="Weekend/Weekday" />
                  <FormControlLabel value="Weekend" control={<Radio />} label="Weekend" />
                </div>
              </div>
            </RadioGroup>
          </div>
          <div>
            <RadioGroup
              className="Textfield"
              style={{ marginTop: '18px' }}
              required
              name="classmodecategory"
              value={classmodecategory}
              onChange={handleChangeClassModeCategory}
            >
              <div>
                <div>Class Mode Required *</div>
                <div>
                  <FormControlLabel value="LiveClass" control={<Radio />} label="LiveClass" />
                  <FormControlLabel value="LiveClass/Self-Paced Course" control={<Radio />} label="LiveClass/Self-Paced Course" />
                </div>
              </div>
            </RadioGroup>
          </div>
          <TextField
            className="Textfield"
            style={{ marginTop: '18px' }}
            required
            id="outlined-required"
            label="batchstartdate Required"
            defaultValue=""
            size="small"
            onChange={(e) => setBatchstartdate(e.target.value)}
          />
          <TextField
            className="TextField"
            style={{ marginTop: '18px' }}
            required
            multiline
            rows={4}
            id="outlined-required"
            label="syllabus Required"
            defaultValue=""
            size="small"
            onChange={(e) => setSyllabus(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: '18px' }}
            required
            id="outlined-required"
            label="coursecompletionrate Required"
            defaultValue=""
            size="small"
            onChange={(e) => setCoursecompletionrate(e.target.value)}
          />
          <FormControl fullWidth sx={{ marginTop: '18px' }}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              required
              value={category}
              label="Category"
              defaultValue="CCC"
              size="small"
              onChange={handleChangeCategory}
            >
              <MenuItem value="CCC">CCC</MenuItem>
              <MenuItem value="DOC">DOC</MenuItem>
              <MenuItem value="BDC">BDC</MenuItem>
              <MenuItem value="BVC">BVC</MenuItem>
              <MenuItem value="CYS">CYS</MenuItem>
              <MenuItem value="DSC">DSC</MenuItem>
              <MenuItem value="P&F">P&F</MenuItem>
              <MenuItem value="PMM">PMM</MenuItem>
              <MenuItem value="STC">STC</MenuItem>
              <MenuItem value="AIC">AIC</MenuItem>
              <MenuItem value="FDC">FDC</MenuItem>
              <MenuItem value="DBC">DBC</MenuItem>
              <MenuItem value="RPA">RPA</MenuItem>
              <MenuItem value="DWC">DWC</MenuItem>
              <MenuItem value="DMC">DMC</MenuItem>
              <MenuItem value="OSC">OSC</MenuItem>
              <MenuItem value="MDC">MDC</MenuItem>
              <MenuItem value="APC">APC</MenuItem>
              <MenuItem value="BCC">BCC</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{
            '& > :not(style)': {
              marginX: 'auto',
              width: '100%',
              marginTop: 3,
            },
          }}
          >
            <Button
              className="SubmitButton"
              variant="contained"
              size="large"
              onClick={handleSubmitbutton}
            >
              Submit
            </Button>
          </Box>
        </div>
      </div>
      {/* MASTER COURSE ADD */}
      <div className="firstDiv bg-slate-200 rounded-md">
        <p className="heading1 text-2xl text-blue-900 mb-8">Master Course</p>
        <div className="temp">
          <TextField
            className="Textfield"
            required
            id="outlined-required"
            label="mainmenuid Required"
            defaultValue=""
            placeholder="100001"
            size="small"
            onChange={(e) => setMainmenuid(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: '10px' }}
            required
            id="outlined-required"
            label="mastercourseid Required"
            defaultValue=""
            placeholder="11001"
            size="small"
            onChange={(e) => setMastercourseid(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: '10px' }}
            required
            id="outlined-required"
            label="mastercoursename Required"
            defaultValue=""
            placeholder=" Masters Program names"
            size="small"
            onChange={(e) => setMastercoursename(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: '10px' }}
            required
            id="outlined-required"
            label="Reviews Required"
            defaultValue=""
            placeholder="4.4(12645)"
            size="small"
            onChange={(e) => setReviews(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: '10px' }}
            required
            id="outlined-required"
            label="numberofcourses Required"
            defaultValue=""
            placeholder="6"
            size="small"
            onChange={(e) => setNumberofcourses(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: '10px' }}
            required
            id="outlined-required"
            label="coursehours Required"
            defaultValue=""
            placeholder="250/200"
            size="small"
            onChange={(e) => setCoursehours(e.target.value)}
          />
          <TextField
            className="Textfield"
            style={{ marginTop: '10px' }}
            required
            id="outlined-required"
            label="numberoflearners Required"
            defaultValue=""
            placeholder="31376"
            size="small"
            onChange={(e) => setNumberoflearners(e.target.value)}
          />
          <TextField
            className="TextField"
            style={{ marginTop: '10px' }}
            required
            multiline
            rows={3}
            id="outlined-required"
            label="minicourse syllabus Required"
            defaultValue=""
            placeholder="syllabus"
            size="small"
            onChange={(e) => setMinicoursesyllabus(e.target.value)}
          />
          <FormControl fullWidth sx={{ marginTop: '18px' }}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              required
              value={category}
              label="Category"
              defaultValue="CCC"
              size="small"
              onChange={handleChangeCategory}
            >
              <MenuItem value="CCC">CCC</MenuItem>
              <MenuItem value="DOC">DOC</MenuItem>
              <MenuItem value="BDC">BDC</MenuItem>
              <MenuItem value="BVC">BVC</MenuItem>
              <MenuItem value="CYS">CYS</MenuItem>
              <MenuItem value="DSC">DSC</MenuItem>
              <MenuItem value="P&F">P&F</MenuItem>
              <MenuItem value="PMM">PMM</MenuItem>
              <MenuItem value="STC">STC</MenuItem>
              <MenuItem value="AIC">AIC</MenuItem>
              <MenuItem value="FDC">FDC</MenuItem>
              <MenuItem value="DBC">DBC</MenuItem>
              <MenuItem value="RPA">RPA</MenuItem>
              <MenuItem value="DWC">DWC</MenuItem>
              <MenuItem value="DMC">DMC</MenuItem>
              <MenuItem value="OSC">OSC</MenuItem>
              <MenuItem value="MDC">MDC</MenuItem>
              <MenuItem value="APC">APC</MenuItem>
              <MenuItem value="BCC">BCC</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{
            '& > :not(style)': {
              marginX: 'auto',
              width: '100%',
              marginTop: 3,
            },
          }}
          >
            <Button
              className="SubmitButton"
              variant="contained"
              size="large"
              onClick={handleSubmitmastercourse}
            >
              Submit
            </Button>
          </Box>
        </div>
      </div>
      <div>Hello</div>
    </div>
  );
};
export default DataEntry;

