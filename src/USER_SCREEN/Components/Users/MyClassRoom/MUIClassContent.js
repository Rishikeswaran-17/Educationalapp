import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SchoolIcon from "@mui/icons-material/School";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
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

export default function CourseContentPagination() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="">
      <Box
        sx={{
          display: "flex",
          paddingX: "10px",
          width: "850px",
          marginX: "auto",
        }}
      >
        <Tabs
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{
            bgcolor: "background.paper",
            display: "flex",
            width: "100%",
          }}
        >
          <Tab label="1" {...a11yProps(0)} />
          <Tab label="2" {...a11yProps(1)} />
          <Tab label="3" {...a11yProps(2)} />
          <Tab label="4" {...a11yProps(3)} />
          <Tab label="5" {...a11yProps(4)} />
          <Tab label="6" {...a11yProps(5)} />
          <Tab label="7" {...a11yProps(6)} />
          <Tab label="8" {...a11yProps(7)} />
          <Tab label="9" {...a11yProps(8)} />
          <Tab label="10" {...a11yProps(9)} />
          <Tab label="11" {...a11yProps(10)} />
          <Tab label="12" {...a11yProps(11)} />
          <Tab label="13" {...a11yProps(12)} />
          <Tab icon={<SchoolIcon />} {...a11yProps(12)} />
        </Tabs>
      </Box>

      <TabPanel
        value={value}
        index={0}
        sx={{
          paddingX: "10px",
          width: "850px",
          marginX: "auto",
        }}
      >
        <div>
          <div className="text-2xl flex mt-4 text-blue-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-1-circle-fill"
              className="mr-3"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312V4.002Z" />
            </svg>
            <p>Introduction to Microsoft Azure and its Services</p>
          </div>
          <div className="my-4 mx-3">
            In this module, you will learn about the Creation of a Free Tier
            Azure Account, accessing Azure Services through Azure Portal and
            Azure Storage Service. You will gain knowledge of ARM Templates and
            learn to use them for deploying Azure resources.
          </div>
          <div>
            <div className="card my-3 py-3 shadow-sm border border-1 border-slate-100 hover:shadow-lg flex justify-between">
              <div className="flex m-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-play-circle"
                  className="text-neutral-500 mx-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                </svg>
                <div>
                  <h3 className="text-neutral-600 mb-2">Class 1 Recording</h3>
                  <p className="text-xs text-neutral-500 text-end">
                    2023-11-05
                  </p>
                </div>
              </div>
              <div className="text-blue-800 text-sm m-3">Viewed</div>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <div className="text-2xl flex mt-4 text-blue-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-2-circle-fill"
              className="mr-3"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z" />
            </svg>
            <p>Azure Virtual Machines and Networking</p>
          </div>
          <div className="my-4 mx-3">
            In this module, you will learn to deploy and manage Azure Virtual
            Machines. You will learn to create and deploy an Azure Storage
            account, Azure Blobs and Azure Managed Disks. You will learn about
            Azure Virtual Networks and all its related concepts like NIC, NSG,
            Subnets, and more.
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>
          <div className="text-2xl flex mt-4 text-blue-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-3-circle-fill"
              className="mr-3"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z" />
            </svg>
            <p>Azure VMSS and Availability Zones</p>
          </div>
          <div className="my-4 mx-3">
            In this module, you will learn to about Azure Availability Sets and
            its Features. You will learn about various Availability Zones and
            Virtual Machine Scale Sets, Azure Load Balancer and Azure
            Application Gateway.
          </div>
          
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div>
          <div className="text-2xl flex mt-4 text-blue-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-4-circle-fill"
              className="mr-3"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM7.519 5.057c-.886 1.418-1.772 2.838-2.542 4.265v1.12H8.85V12h1.26v-1.559h1.007V9.334H10.11V4.002H8.176c-.218.352-.438.703-.657 1.055ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z" />
            </svg>
            <p>Azure App Services and Its Features</p>
          </div>
          <div className="my-4 mx-3">
            This Module deals with aspects such as Deploying and Managing Web
            Applications, App Security Services, and Azure App Service Plan. You
            will learn to create, deploy and configure Function App and Logic
            App.
          </div>
         
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div>
          <div className="text-2xl flex mt-4 text-blue-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-5-circle-fill"
              className="mr-3"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.006 4.158c1.74 0 2.924-1.119 2.924-2.806 0-1.641-1.178-2.584-2.56-2.584-.897 0-1.442.421-1.612.68h-.064l.193-2.344h3.621V4.002H5.791L5.445 8.63h1.149c.193-.358.668-.809 1.435-.809.85 0 1.582.604 1.582 1.57 0 1.085-.779 1.682-1.57 1.682-.697 0-1.389-.31-1.53-1.031H5.276c.065 1.213 1.149 2.115 2.72 2.115Z" />
            </svg>
            <p>Advanced Azure Hybrid Connectivity and Site Recovery</p>
          </div>
          <div className="my-4 mx-3">
            This Module deals with the Azure Hybrid Connectivity and its related
            concepts. You will also implement VNet Peering, P2S and S2S
            connectivity. You will also learn about VPN Gateway, ExpressRoute
            and BGP Protocol.
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <div>
          <div className="text-2xl flex mt-4 text-blue-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-6-circle-fill"
              className="mr-3"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.21 3.855c-1.868 0-3.116 1.395-3.116 4.407 0 1.183.228 2.039.597 2.642.569.926 1.477 1.254 2.409 1.254 1.629 0 2.847-1.013 2.847-2.783 0-1.676-1.254-2.555-2.508-2.555-1.125 0-1.752.61-1.98 1.155h-.082c-.012-1.946.727-3.036 1.805-3.036.802 0 1.213.457 1.312.815h1.29c-.06-.908-.962-1.899-2.573-1.899Zm-.099 4.008c-.92 0-1.564.65-1.564 1.576 0 1.032.703 1.635 1.558 1.635.868 0 1.553-.533 1.553-1.629 0-1.06-.744-1.582-1.547-1.582Z" />
            </svg>
            <p>Azure Storage Solution and Design Patterns</p>
          </div>
          
        </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <div>
          <div className="text-2xl flex mt-4 text-blue-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-7-circle-fill"
              className="mr-3"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM5.37 5.11h3.972v.07L6.025 12H7.42l3.258-6.85V4.002H5.369v1.107Z" />
            </svg>
            <p>Azure Kubernetes Service</p>
          </div>
          <div className="my-4 mx-3">
            This module provides an in-depth knowledge of Azure Service Fabric
            as a distributed systems platform that makes it easy to package,
            deploy, and manage scalable and reliable microservices and
            containers. You will also explore Kubernetes Service (AKS) in Azure.
          </div>
         
        </div>
      </TabPanel>
      <TabPanel value={value} index={7}>
        <div>
          <div className="text-2xl flex mt-4 text-blue-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-8-circle-fill"
              className="mr-3"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-5.03 1.803c0-1.248-.943-1.84-1.646-1.992v-.065c.598-.187 1.336-.72 1.336-1.781 0-1.225-1.084-2.121-2.654-2.121-1.57 0-2.66.896-2.66 2.12 0 1.044.709 1.589 1.33 1.782v.065c-.697.152-1.647.732-1.647 2.003 0 1.39 1.19 2.344 2.953 2.344 1.77 0 2.989-.96 2.989-2.355Zm-4.347-3.71c0 .739.586 1.255 1.383 1.255s1.377-.516 1.377-1.254c0-.733-.58-1.23-1.377-1.23s-1.383.497-1.383 1.23Zm-.281 3.645c0 .838.72 1.412 1.664 1.412.943 0 1.658-.574 1.658-1.412 0-.843-.715-1.424-1.658-1.424-.944 0-1.664.58-1.664 1.424Z" />
            </svg>
            <p>Azure Active Directory and Role Based Access Control</p>
          </div>
          <div className="my-4 mx-3">
            This module deals with aspects such as Access Control and RBAC. You
            will learn about implementing authentication and authorization in
            applications. Also, you will learn to conceptualize the data
            security using End-to-end encryption, Azure confidential computing,
            Azure Key Vault, SSL and TLS communications.
          </div>
          
        </div>
      </TabPanel>
      <TabPanel value={value} index={8}>
        <div>
          <div className="text-2xl flex mt-4 text-blue-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-9-circle-fill"
              className="mr-3"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.223 4.146c2.104 0 3.123-1.464 3.123-4.3 0-3.147-1.459-4.014-2.97-4.014-1.63 0-2.871 1.02-2.871 2.73 0 1.706 1.171 2.667 2.566 2.667 1.06 0 1.7-.557 1.934-1.184h.076c.047 1.67-.475 3.023-1.834 3.023-.71 0-1.149-.363-1.248-.72H5.258c.094.908.926 1.798 2.52 1.798Zm.118-3.972c.808 0 1.535-.528 1.535-1.594s-.668-1.676-1.56-1.676c-.838 0-1.517.616-1.517 1.659 0 1.072.708 1.61 1.54 1.61Z" />
            </svg>
            <p>Azure Messaging Service (Events, Hubs, Queue and Bus)</p>
          </div>
          <div className="my-4 mx-3">
            In this module, you will learn to configure a message-based
            integration architecture, develop a methodology for Asynchronous
            Processing, and create apps for Autoscaling.
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={9}>
        <div>
          <div className="text-2xl flex mt-4 text-blue-900">
            <span className="text-white bg-blue-900 px-2.5 py-2 mr-3 rounded-full">
              10
            </span>
            <p className="items-center py-1">
              Azure Monitoring and Insights Service
            </p>
          </div>
          <div className="my-4 mx-3">
            In this module you will learn about Monitoring Azure Services. You
            will learn about Azure alerts, metrics services. You will also get
            an overview on Azure Log analytics, App Insights service, Azure
            Activity Log and Azure Service Health.
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={10}>
        <div>
          <div className="text-2xl flex mt-4 text-blue-900">
            <span className="text-white bg-blue-900 px-2.5 py-2 mr-3 rounded-full">
              11
            </span>
            <p className="items-center py-1">
              Design Identity & Security & Design Storage
            </p>
          </div>
          <div className="my-4 mx-3 text-white">.</div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={11}>
        <div>
          <div className="text-2xl flex mt-4 text-blue-900">
            <span className="text-white bg-blue-900 px-2.5 py-2 mr-3 rounded-full">
              12
            </span>
            <p className="items-center py-1">Design Azure Migration</p>
          </div>
          <div className="my-4 mx-3 text-white">.</div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={12}>
        <div>
          <div className="text-2xl flex mt-4 text-blue-900">
            <span className="text-white bg-blue-900 px-2.5 py-2 mr-3 rounded-full">
              13
            </span>
            <p className="items-center py-1">Design Monitoring (Self-Paced)</p>
          </div>
          <div className="my-4 mx-3 text-white">.</div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={13}>
        <div>
          <div className="text-2xl flex mt-4 text-blue-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-mortarboard-fill"
              className="mr-3"
              viewBox="0 0 16 16"
            >
              <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
              <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
            </svg>
            <p className="items-center py-1">Certification Project</p>
          </div>
          <div className="my-4 mx-3 text-white">.</div>
          <div>
            <div className="card my-3 py-3 shadow-sm border border-1 border-slate-100 hover:shadow-lg flex justify-between">
              <div className="flex m-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-play-circle"
                  className="text-neutral-500 mx-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                </svg>
                <div>
                  <h3 className="text-neutral-600 mb-2">Project Statement</h3>
                  <p className="text-xs text-neutral-500 text-end">
                    2023-11-05
                  </p>
                </div>
              </div>
              <div className="text-red-700 text-xs m-3 text-right">
                You are late! Last date was - 13 May,{" "}
                <p>2023, 10:00 AM (IST)</p>
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
    </div>
  );
}
