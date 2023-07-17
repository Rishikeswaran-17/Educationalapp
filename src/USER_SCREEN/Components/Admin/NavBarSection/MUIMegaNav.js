import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      style={{ width: "480px", backgroundColor: "#f5f5f5" }}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function MUIMegaNav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex", height: "600px" }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          width: "25%",
        }}
      >
        <Tab
          label="Cloud Computing"
          {...a11yProps(0)}
          sx={{
            width: "full",
            textDecoration: "none",
            "&:hover": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
            "&:focus": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
          }}
        />
        <Tab
          label="DevOps"
          sx={{
            width: "full",
            textDecoration: "none",
            "&:hover": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
            "&:focus": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
          }}
          {...a11yProps(1)}
        />
        <Tab
          label="BI and Visualization"
          sx={{
            width: "full",
            textDecoration: "none",
            "&:hover": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
            "&:focus": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
          }}
          {...a11yProps(2)}
        />
        <Tab
          label="Cyber Security"
          sx={{
            width: "full",
            textDecoration: "none",
            "&:hover": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
            "&:focus": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
          }}
          {...a11yProps(3)}
        />
        <Tab
          label="Data Science"
          sx={{
            width: "full",
            textDecoration: "none",
            "&:hover": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
            "&:focus": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
          }}
          {...a11yProps(4)}
        />
        <Tab
          label="Programming & Frameworks"
          sx={{
            width: "full",
            textDecoration: "none",
            "&:hover": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
            "&:focus": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
          }}
          {...a11yProps(5)}
        />
        <Tab
          label="Project Management and Methodologies"
          sx={{
            width: "full",
            textDecoration: "none",
            "&:hover": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
            "&:focus": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
          }}
          {...a11yProps(6)}
        />
        <Tab
          label="Software Testing"
          sx={{
            width: "full",
            textDecoration: "none",
            "&:hover": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
            "&:focus": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
          }}
          {...a11yProps(7)}
        />
        <Tab
          label="Big Data"
          sx={{
            width: "full",
            textDecoration: "none",
            "&:hover": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
            "&:focus": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
          }}
          {...a11yProps(8)}
        />
        <Tab
          label="Artificial Intelligence"
          sx={{
            width: "full",
            textDecoration: "none",
            "&:hover": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
            "&:focus": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
          }}
          {...a11yProps(9)}
        />
        <Tab
          label="Frontend Development"
          sx={{
            width: "full",
            textDecoration: "none",
            "&:hover": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
            "&:focus": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
          }}
          {...a11yProps(10)}
        />
        <Tab
          label="Databases"
          sx={{
            width: "full",
            textDecoration: "none",
            "&:hover": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
            "&:focus": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
          }}
          {...a11yProps(11)}
        />
        <Tab
          label="Robotic Process Automation"
          sx={{
            width: "full",
            textDecoration: "none",
            "&:hover": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
            "&:focus": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
          }}
          {...a11yProps(13)}
        />
        <Tab
          label="Data Warehousing and ETL"
          sx={{
            width: "full",
            textDecoration: "none",
            "&:hover": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
            "&:focus": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
          }}
          {...a11yProps(14)}
        />
        <Tab
          label="Digital Marketing"
          sx={{
            width: "full",
            textDecoration: "none",
            "&:hover": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
            "&:focus": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
          }}
          {...a11yProps(15)}
        />
        <Tab
          label="Operating Systems"
          sx={{
            width: "full",
            textDecoration: "none",
            "&:hover": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
            "&:focus": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
          }}
          {...a11yProps(16)}
        />
        <Tab
          label="Mobile Development"
          sx={{
            width: "full",
            textDecoration: "none",
            "&:hover": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
            "&:focus": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
          }}
          {...a11yProps(17)}
        />
        <Tab
          label="Architecture & Design Patterns"
          sx={{
            width: "full",
            textDecoration: "none",
            "&:hover": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
            "&:focus": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
          }}
          {...a11yProps(18)}
        />
        <Tab
          label="Blockchain"
          sx={{
            width: "full",
            textDecoration: "none",
            "&:hover": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
            "&:focus": {
              backgroundImage: "linear-gradient(to right, #04318a, #0845bf)",
              color: "white",
            },
          }}
          {...a11yProps(19)}
        />
      </Tabs>
      {/* Tab Side Panels */}
      <TabPanel value={value} index={0}>
        <div className="mx-3">
          <div className="hover:text-blue-700 py-1 text-md hover:-translate-y-0.5 my-1">
            <a href="#cloudArchitectMasters">Cloud Architect Masters Program</a>
          </div>
          <div className="hover:text-blue-700 py-1 text-md hover:-translate-y-0.5 my-1">
            <a href="#microsoftAzureCloudEngineer">
              Microsoft Azure Cloud Engineer Masters Program
            </a>
          </div>
          <div className="hover:text-blue-700 py-1 text-md hover:-translate-y-0.5 my-1">
            <a href="#awsMasters">AWS Masters Program</a>
          </div>
          <div className="hover:text-blue-700 py-1 text-md hover:-translate-y-0.5 my-1">
            <a href="#microsoftAzureArchitect">
              Microdoft Azure Architect Certification Training Course (AZ-305)
            </a>
          </div>
          <div className="hover:text-blue-700 py-1 text-md hover:-translate-y-0.5 my-1">
            <a href="#salesforceCRMMAsters">
              Salesforce CRM Masters Certification Program
            </a>
          </div>
          <div className="hover:text-blue-700 py-1 text-md hover:-translate-y-0.5 my-1">
            <a href="#microservicesCertification">
              Microservices Certification Training Course
            </a>
          </div>
          <div className="hover:text-blue-700 py-1 text-md hover:-translate-y-0.5 my-1">
            <a href="#awsDeveloper">AWS Developer Certification Training</a>
          </div>
          <div className="hover:text-blue-700 py-1 text-md hover:-translate-y-0.5 my-1">
            <a href="#googleCloudPlatform">
              Google Cloud Platform (GCP) Certification Training
            </a>
          </div>
        </div>
      </TabPanel>
      {/* ----- */}
      <Divider orientation="vertical" flexItem />
      {/* Tab Second Side Panel */}
      <TabPanel value={value} index={0}>
        <div className="mx-2 h-auto">
          <div className="title text-xs py-2 text-center text-neutral-500">
            Masters Program
          </div>
          <div className="mt-5 flex justify-between">
            <img
              className="w-15 h-14 mr-3"
              alt=""
              src="https://radicals.in/wp-content/uploads/2020/07/master-2-1024x576.jpg"
            />
            <div className="text-md font-semibold">
              Cloud Architect Masters Program
            </div>
          </div>
          <div className="mt-6 flex justify-evenly">
            <div>
              <div className="italic text-center text-xs text-neutral-400">
                Courses
              </div>
              <div className="text-4xl mt-4">12</div>
            </div>
            <Divider orientation="vertical" flexItem />
            <div>
              <div className="italic text-center text-xs text-neutral-400">
                Hours
              </div>
              <div className="text-4xl mt-4">250</div>
            </div>
            <Divider orientation="vertical" flexItem />
            <div>
              <div className="italic text-center text-xs text-neutral-400">
                Learners
              </div>
              <div className="text-4xl mt-4">320K</div>
            </div>
          </div>
          <div className="mt-2">
            <div className="italic text-xs text-neutral-400">Reviews</div>
            <div className="flex">
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={4}
                  precision={0.5}
                  readOnly
                />
              </Stack>
              <div className="ml-4 flex">
                4.4{" "}
                <p className="text-neutral-500 text-xs py-1 pl-1">(14450)</p>
              </div>
            </div>
          </div>
          <div className="border border-black mx-2 mt-3 p-1 text-center italic text-neutral-500">
            View Details
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        DevOps
      </TabPanel>
      <Divider orientation="vertical" flexItem />
      <TabPanel value={value} index={1}>
        Master Certificate section
      </TabPanel>
      <TabPanel value={value} index={2}>
        BI and Visualization
      </TabPanel>
      <Divider orientation="vertical" flexItem />
      <TabPanel value={value} index={2}>
        Master Certificate section
      </TabPanel>
      <TabPanel value={value} index={3}>
        Cyber Security
      </TabPanel>
      <Divider orientation="vertical" flexItem />
      <TabPanel value={value} index={3}>
        Master Certificate section
      </TabPanel>
      <TabPanel value={value} index={4}>
        Data Science
      </TabPanel>
      <Divider orientation="vertical" flexItem />
      <TabPanel value={value} index={4}>
        Master Certificate section
      </TabPanel>
      <TabPanel value={value} index={5}>
        Programming & Frameworks
      </TabPanel>
      <Divider orientation="vertical" flexItem />
      <TabPanel value={value} index={5}>
        Master Certificate section
      </TabPanel>
      <TabPanel value={value} index={6}>
        Project Management
      </TabPanel>
      <Divider orientation="vertical" flexItem />
      <TabPanel value={value} index={6}>
        Master Certificate section
      </TabPanel>
      <TabPanel value={value} index={7}>
        Software Testing
      </TabPanel>
      <Divider orientation="vertical" flexItem />
      <TabPanel value={value} index={7}>
        Master Certificate section
      </TabPanel>
      <TabPanel value={value} index={8}>
        Big Data
      </TabPanel>
      <Divider orientation="vertical" flexItem />
      <TabPanel value={value} index={8}>
        Master Certificate section
      </TabPanel>
      <TabPanel value={value} index={9}>
        AI
      </TabPanel>
      <Divider orientation="vertical" flexItem />
      <TabPanel value={value} index={9}>
        Master Certificate section
      </TabPanel>
      <TabPanel value={value} index={10}>
        Frontend Development
      </TabPanel>
      <Divider orientation="vertical" flexItem />
      <TabPanel value={value} index={10}>
        Master Certificate section
      </TabPanel>
      <TabPanel value={value} index={11}>
        Databases
      </TabPanel>
      <Divider orientation="vertical" flexItem />
      <TabPanel value={value} index={11}>
        Master Certificate section
      </TabPanel>
      <TabPanel value={value} index={12}>
        Robotic
      </TabPanel>
      <Divider orientation="vertical" flexItem />
      <TabPanel value={value} index={12}>
        Master Certificate section
      </TabPanel>
      <TabPanel value={value} index={13}>
        Data Warehousing
      </TabPanel>
      <Divider orientation="vertical" flexItem />
      <TabPanel value={value} index={13}>
        Master Certificate section
      </TabPanel>
      <TabPanel value={value} index={14}>
        Digital Marketing
      </TabPanel>
      <Divider orientation="vertical" flexItem />
      <TabPanel value={value} index={14}>
        Master Certificate section
      </TabPanel>
      <TabPanel value={value} index={15}>
        Operating Systems
      </TabPanel>
      <Divider orientation="vertical" flexItem />
      <TabPanel value={value} index={15}>
        Master Certificate section
      </TabPanel>
      <TabPanel value={value} index={16}>
        Mobile Development
      </TabPanel>
      <Divider orientation="vertical" flexItem />
      <TabPanel value={value} index={16}>
        Master Certificate section
      </TabPanel>
      <TabPanel value={value} index={17}>
        Architecture
      </TabPanel>
      <Divider orientation="vertical" flexItem />
      <TabPanel value={value} index={17}>
        Master Certificate section
      </TabPanel>
      <TabPanel value={value} index={18}>
        Blockchain
      </TabPanel>
      <Divider orientation="vertical" flexItem />
      <TabPanel value={value} index={18}>
        Master Certificate section
      </TabPanel>
      {/* ----------- */}
    </Box>
  );
}
