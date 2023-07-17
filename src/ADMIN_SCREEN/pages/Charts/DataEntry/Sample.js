import React, { useState } from 'react';
import "./DataEntry.css";
import { Box, Button, TextField, FormControlLabel, Radio, RadioGroup } from '@mui/material';

const Sample = () => {
  const [mainmenuid, setMainmenuid] = useState("");
  const [mainmenuname, setMainmenuname] = useState("");
  const [category, setCategory] = useState("");
  const [tagheading, setTagheading] = useState("");
  const [tagtext, setTagtext] = useState("");
  const [status, setStatus] = useState("");

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Handling form submission...");
    console.log("mainmenuid: ", mainmenuid);
    console.log("mainmenuname: ", mainmenuname);
    console.log("category: ", category);
    console.log("tagheading: ", tagheading);
    console.log("tagtext: ", tagtext);
    console.log("status: ", status);

    const formData = new FormData();
    formData.append("mainmenuid", mainmenuid);
    formData.append("mainmenuname", mainmenuname);
    formData.append("category", category);
    formData.append("tagheading", tagheading);
    formData.append("tagtext", tagtext);
    formData.append("status", status);
    console.log("Form Data:", Object.fromEntries(formData)); // Display form data as an object
    console.log("Sending POST request to server...");

    fetch("/save-mainmenu", {
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
    <div className="firstDiv bg-white rounded-b-lg">
      <p className="heading1 text-2xl text-blue-900 mb-8">Main Menu Data Entry</p>
      <div className="temp">
        <TextField
          className="Textfield"
          required
          id="outlined-required"
          label="mainmenuid"
          placeholder='100001'
          defaultValue=""
          size="small"
          onChange={(e) => setMainmenuid(e.target.value)}
        />
        <TextField
          className="Textfield"
          style={{ marginTop: "18px" }}
          required
          id="outlined-required"
          label="Mainmenuname Required"
          defaultValue=""
          size="small"
          onChange={(e) => setMainmenuname(e.target.value)}
        />
        <TextField
          className="Textfield"
          style={{ marginTop: "18px" }}
          required
          id="outlined-required"
          label="Category Required"
          defaultValue=""
          size="small"
          onChange={(e) => setCategory(e.target.value)}
        />
        <TextField
          className="Textfield"
          style={{ marginTop: "18px" }}
          required
          id="outlined-required"
          label="Tag Heading Required"
          defaultValue=""
          size="small"
          onChange={(e) => setTagheading(e.target.value)}
        />
        <TextField
          className="Textfield"
          style={{ marginTop: "18px" }}
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
            style={{ marginTop: "18px" }}
            required
            name="status"
            value={status}
            onChange={handleChangeStatus}
          >
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel value="Female" control={<Radio />} label="Female" />
          </RadioGroup>
        </div>
        <div>
          <Box sx={{ "& > :not(style)": { marginX: 'auto', width: '100%', marginTop: 3 } }}>
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
  );
};

export default Sample;
