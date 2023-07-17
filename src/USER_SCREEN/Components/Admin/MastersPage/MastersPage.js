import React, { useState } from 'react';

import { Divider } from "@mui/material";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const MastersPage = () => {

     const text =
          'Python Scripting allows programmers to build applications easily and rapidly. This course is an introduction to Python scripting, which focuses on the concepts of Python. It will help you to perform operations on variable types. You will learn the importance of Python in real-time environment and will be able to develop applications based on the Object-Oriented Programming concept.';

     const [showFullText, setShowFullText] = useState(false);
     const toggleText = () => {
          setShowFullText(!showFullText);
     };
     const displayText = showFullText ? text : text.slice(0, 199);

     // --------------------------- Accordion Details -----------------------
     const Accordion = styled((props) => (
          <MuiAccordion disableGutters elevation={0} square {...props} />
     ))(({ theme }) => ({
          border: `0px solid ${theme.palette.divider}`,
          "&:not(:last-child)": {
               borderBottom: 0,
          },
          "&:before": {
               display: "none",
          },
     }));
     const AccordionSummary = styled((props) => (
          <MuiAccordionSummary
               expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.8rem" }} />}
               {...props}
          />
     ))(({ theme }) => ({
          flexDirection: "row-reverse",
          "& .MuiAccordionSummary-content": {
               marginLeft: theme.spacing(2),
          },
          "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
               transform: "rotate(90deg)",
          },
     }));
     const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
          padding: theme.spacing(1),
          borderTop: "1px solid rgba(0, 0, 0, .125)",
     }));
     const [showContactInfo, setShowContactInfo] = useState(false);

     const toggleContactInfo = () => {
          setShowContactInfo((prevShowContactInfo) => !prevShowContactInfo);
     };
     const [expanded, setExpanded] = React.useState("panel1");
     const handleChange = (panel) => (event, newExpanded) => {
          setExpanded(newExpanded ? panel : false);
     };

     return (
          <div>
               {/* Banner - 1 */}
               <div className='bg-slate-200 py-5'>
                    <div className='w-10/12 mx-auto flex gap-5'>
                         <div className='w-3/4 rounded-lg shadow-md bg-white p-5'>
                              <div className='flex'>
                                   <div><img width="50" height="50" src="https://www.edureka.co/imgver.1688063257/img/masterclpimg/masterlogo_default_1.png" alt="crlogo" /></div>
                                   <div className='text-4xl pl-3 py-1 text-neutral-700'>Cloud Architect Masters Program</div>
                              </div>
                              <div className='mt-3 flex'>
                                   <div><iframe width="400" height="200" src="https://www.youtube.com/embed/WqHiD-Xtgig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                                   <div className='p-8'>
                                        <div className='text-xl'>Extensive Program with 11 Courses</div>
                                        <button className='text-blue-400 mb-4 pt-1 px-2 text-xs font-semibold'>View all</button>
                                        <div className='mb-4 text-xl'>200+ Hours of Interactive Learning</div>
                                        <div className='mb-4 text-xl'>Capstone Project</div>
                                   </div>
                              </div>
                              <div className='p-5'>Cloud Architect Masters Program makes you proficient in designing, planning, and scaling cloud implementation. It includes training in Python, Cloud Computing, AWS Architectural Principles, Migrating Applications on Cloud and DevOps. The curriculum has been determined by extensive research on 5000+ job descriptions across the globe.</div>
                         </div>
                         <div className='w-1/3 bg-white card rounded-lg shadow-md p-5'>
                              <div className='p-3'>
                                   <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="101" height="94" viewBox="0 0 101 94">
                                             <path fill="#7D91B8" fill-rule="nonzero" d="M43.487 4.144v16.878a4.14 4.14 0 0 1-4.14 4.144c-8.154 0-12.59 8.376-13.205 24.909h13.206a4.142 4.142 0 0 1 4.139 4.144v35.638A4.14 4.14 0 0 1 39.347 94H4.138A4.14 4.14 0 0 1 0 89.857V54.219c0-7.925.797-15.198 2.368-21.618 1.61-6.584 4.084-12.34 7.348-17.11 3.358-4.902 7.56-8.748 12.487-11.428C27.164 1.367 32.933 0 39.35 0a4.14 4.14 0 0 1 4.138 4.144zM96.86 25.166A4.143 4.143 0 0 0 101 21.022V4.144A4.142 4.142 0 0 0 96.861 0c-6.413 0-12.183 1.368-17.143 4.064-4.928 2.68-9.132 6.526-12.491 11.427-3.263 4.77-5.736 10.527-7.347 17.112-1.57 6.422-2.367 13.695-2.367 21.617v35.637A4.141 4.141 0 0 0 61.652 94H96.86a4.141 4.141 0 0 0 4.137-4.143V54.22a4.142 4.142 0 0 0-4.137-4.144H83.843c.606-16.532 4.977-24.909 13.018-24.909z" opacity=".1"></path>
                                        </svg>
                                        <p className='relative z-10 bottom-14 text-2xl text-center p-2'>Avg. salary earned by Cloud Architect is around $155,581 per annum.</p>
                                        <p className='relative z-10 bottom-14 text-center text-neutral-500 p-2'>It’s time to change your career story</p>
                                   </div>
                              </div>
                              <div>
                                   <p className='text-lg relative pt-2 px-2 bg-slate-100 z-10 bottom-14'>You Will Learn</p>
                                   <p className='text-sm pt-1 px-2 text-neutral-600 bg-slate-100 relative z-10 bottom-14'>In this Cloud Architect Program, you will learn SAAS, PAAS, IAAS, Cloud Virtualization, Cloud Deployment Models, Lambda, EC2, RDS, S3, VPC & 16 More Skills.</p>
                                   <button className='text-blue-400 pt-1 px-2 relative z-10 bottom-14 text-xs font-semibold'>View curriculum</button>
                              </div>
                              <div>
                                   <button className='bg-orange-400 text-white text-lg uppercase py-2 w-full'>Get in touch</button>
                              </div>
                         </div>
                    </div>
               </div>
               {/* ---------- */}
               <div className='w-full card bg-white shadow-xl sticky top-0 z-100'>
                    <div className='w-10/12 mx-auto text-neutral-700 flex gap-5 text-2xl'>
                         <a href='#ourAlumni'><button className='hover:text-blue-600 border border-b-2 border-t-0 border-x-0 p-5 hover:border-b-blue-600'>Our Alumni</button></a>
                         <a href='#syllabus'><button className='hover:text-blue-600 border border-b-2 border-t-0 border-x-0 p-5 hover:border-b-blue-600'>Syllabus</button></a>
                         <a href='#fees'><button className='hover:text-blue-600 border border-b-2 border-t-0 border-x-0 p-5 hover:border-b-blue-600'>Fees</button></a>
                         <a href='#certification'><button className='hover:text-blue-600 border border-b-2 border-t-0 border-x-0 p-5 hover:border-b-blue-600'>Certification</button></a>
                         <a href='#features'><button className='hover:text-blue-600 border border-b-2 border-t-0 border-x-0 p-5 hover:border-b-blue-600'>Features</button></a>
                         <a href='#faq'><button className='hover:text-blue-600 border border-b-2 border-t-0 border-x-0 p-5 hover:border-b-blue-600'>FAQ</button></a>
                    </div>
               </div>
               <div className='bg-white pb-8' id='ourAlumni'>
                    <div className='w-10/12 mx-auto mb-4'>
                         <div className='p-5 italic text-center text-neutral-700 text-2xl'>Our Masters Course Alumni work for amazing companies</div>
                         <div className='w-1/3 mx-auto'><img class="lazyImages" fullbase="true" alt="alumni-user" width="600" height="150" src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1688063257/img/alumni_comp_457_1564664397.png" /></div>
                    </div>
               </div>
               {/* Ṣyllabus */}
               <div id='syllabus'>
                    <div className='mt-10 w-10/12 mx-auto'>
                         <div className='text-3xl mb-2 text-blue-950'>Cloud Architect Course Syllabus</div>
                         <button className="flex border hover:border-blue-600 hover:shadow-md hover:rounded-md py-0.1 px-0.5">
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-file-pdf-fill" className="text-red-500 my-auto mr-2" viewBox="0 0 16 16">
                                   <path d="M5.523 10.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.035 21.035 0 0 0 .5-1.05 11.96 11.96 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.888 3.888 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 4.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z" />
                                   <path fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm.165 11.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.64 11.64 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.707 19.707 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z" />
                              </svg>
                              <p className="uppercase text-blue-800 py-3 px-0.5 text-sm">Download Curriculum</p>
                         </button>
                         <div className='my-8 w-5/6 mx-auto'>
                              <div className='card bg-white rounded-md p-6'>
                                   <div className='flex gap-x-5'>
                                        <div className='mb-2'>
                                             <div className='flex mb-2'>
                                                  <div className='text-3xl text-blue-900'>Python Scripting Certification Training</div>
                                                  <p className='text-xs ml-2 text-purple-600 bg-purple-200 px-1 py-2 uppercase'>Self paced</p>
                                             </div>
                                             <div className='p-1'>
                                                  {displayText}
                                                  {text.length > 199 && (
                                                       <button className='text-xs text-blue-800' onClick={toggleText}>
                                                            {showFullText ? 'Read less' : 'Read more'}
                                                       </button>
                                                  )}
                                             </div>
                                             <div className='flex gap-x-2'>
                                                  <p className='text-yellow-500 text-bold text-lg uppercase'>week 5-6</p>
                                                  <p className='text-black flex py-1'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                       <circle cx="8" cy="8" r="8" />
                                                  </svg></p>
                                                  <p className='text-lg font-bold'>10 Modules</p>
                                                  <p className='text-black flex py-1'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                       <circle cx="8" cy="8" r="8" />
                                                  </svg></p>
                                                  <p className='text-lg font-bold'>30 Hours</p>
                                                  <p className='text-black flex py-1'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                       <circle cx="8" cy="8" r="8" />
                                                  </svg></p>
                                                  <p className='text-lg font-bold'>6 Skills</p>
                                             </div>
                                        </div>
                                        <div className=''>
                                             <iframe width="250" height="140" src="https://www.youtube.com/embed/9F6zAuYtuFw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        </div>
                                   </div>
                                   <Divider />
                                   <div>
                                        <Accordion>
                                             <AccordionSummary
                                                  aria-controls="panel1d-content"
                                                  id="panel1d-header"
                                                  expanded={expanded === "panel1"}
                                                  onChange={handleChange("panel1")}
                                             >
                                                  <Typography>
                                                       <div className='text-xl'>Course Content</div>
                                                  </Typography>
                                             </AccordionSummary>
                                             <div>
                                                  <div className='flex'>
                                                       <div className='text-lg mr-5 py-2'>Python Scripting Certification Training</div>
                                                       <button className="flex py-0.1 px-0.5 hover:bg-blue-50 hover:rounded-md">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-file-pdf-fill" className="text-red-500 my-auto mr-2" viewBox="0 0 16 16">
                                                                 <path d="M5.523 10.424c.14-.082.293-.162.459-.238a7.878 7.878 0 0 1-.45.606c-.28.337-.498.516-.635.572a.266.266 0 0 1-.035.012.282.282 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548zm2.455-1.647c-.119.025-.237.05-.356.078a21.035 21.035 0 0 0 .5-1.05 11.96 11.96 0 0 0 .51.858c-.217.032-.436.07-.654.114zm2.525.939a3.888 3.888 0 0 1-.435-.41c.228.005.434.022.612.054.317.057.466.147.518.209a.095.095 0 0 1 .026.064.436.436 0 0 1-.06.2.307.307 0 0 1-.094.124.107.107 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256zM8.278 4.97c-.04.244-.108.524-.2.829a4.86 4.86 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.517.517 0 0 1 .145-.04c.013.03.028.092.032.198.005.122-.007.277-.038.465z" />
                                                                 <path fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm.165 11.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.64 11.64 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.707 19.707 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z" />
                                                            </svg>
                                                            <p className="uppercase text-blue-800 py-3 px-0.5 text-sm">Download Curriculum</p>
                                                       </button>
                                                  </div>
                                                  <AccordionDetails>
                                                       <Typography>
                                                            <Accordion>
                                                                 <AccordionSummary
                                                                      aria-controls="panel1d-content"
                                                                      id="panel1d-header"
                                                                      expanded={expanded === "panel1"}
                                                                      onChange={handleChange("panel1")}
                                                                 >
                                                                      <Typography>
                                                                           <div className='text-xl'>Introduction to Python</div>
                                                                      </Typography>
                                                                 </AccordionSummary>
                                                                 <div>
                                                                      <AccordionDetails>
                                                                           <Typography>
                                                                                <div className='flex mb-3'>
                                                                                     <p className='text-lg'>Learning Objective : </p><p className='text-neutral-500 py-0.5'> Give a brief idea of what Python is and touch on the basics.</p>
                                                                                </div>
                                                                                <div>
                                                                                     <p className=''>Topics</p>
                                                                                     <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                          <circle cx="8" cy="8" r="8" />
                                                                                     </svg>
                                                                                          <p className='text-neutral-600 text-sm'>Overview of Python</p>
                                                                                     </p>
                                                                                     <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                          <circle cx="8" cy="8" r="8" />
                                                                                     </svg>
                                                                                          <p className='text-neutral-600 text-sm'>The Companies using Python</p>
                                                                                     </p>
                                                                                     <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                          <circle cx="8" cy="8" r="8" />
                                                                                     </svg>
                                                                                          <p className='text-neutral-600 text-sm'>Other applications in which Python is used</p>
                                                                                     </p>
                                                                                     <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                          <circle cx="8" cy="8" r="8" />
                                                                                     </svg>
                                                                                          <p className='text-neutral-600 text-sm'>Discuss Python Scripts on UNIX/Windows</p>
                                                                                     </p>
                                                                                </div>
                                                                           </Typography>
                                                                      </AccordionDetails>
                                                                 </div>
                                                            </Accordion>
                                                            <Accordion>
                                                                 <AccordionSummary
                                                                      aria-controls="panel1d-content"
                                                                      id="panel1d-header"
                                                                      expanded={expanded === "panel1"}
                                                                      onChange={handleChange("panel1")}
                                                                 >
                                                                      <Typography>
                                                                           <div className='text-xl'>Sequences and File Operations</div>
                                                                      </Typography>
                                                                 </AccordionSummary>
                                                                 <div>
                                                                      <AccordionDetails>
                                                                           <Typography>
                                                                                <div className='flex mb-3'>
                                                                                     <p className='text-lg'>Learning Objective : </p><p className='text-neutral-500 py-0.5'> Give a brief idea of what Python is and touch on the basics.</p>
                                                                                </div>
                                                                                <div>
                                                                                     <p className=''>Topics</p>
                                                                                     <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                          <circle cx="8" cy="8" r="8" />
                                                                                     </svg>
                                                                                          <p className='text-neutral-600 text-sm'>Overview of Python</p>
                                                                                     </p>
                                                                                     <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                          <circle cx="8" cy="8" r="8" />
                                                                                     </svg>
                                                                                          <p className='text-neutral-600 text-sm'>The Companies using Python</p>
                                                                                     </p>
                                                                                     <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                          <circle cx="8" cy="8" r="8" />
                                                                                     </svg>
                                                                                          <p className='text-neutral-600 text-sm'>Other applications in which Python is used</p>
                                                                                     </p>
                                                                                     <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                          <circle cx="8" cy="8" r="8" />
                                                                                     </svg>
                                                                                          <p className='text-neutral-600 text-sm'>Discuss Python Scripts on UNIX/Windows</p>
                                                                                     </p>
                                                                                </div>
                                                                           </Typography>
                                                                      </AccordionDetails>
                                                                 </div>
                                                            </Accordion>
                                                            <Accordion>
                                                                 <AccordionSummary
                                                                      aria-controls="panel1d-content"
                                                                      id="panel1d-header"
                                                                      expanded={expanded === "panel1"}
                                                                      onChange={handleChange("panel1")}
                                                                 >
                                                                      <Typography>
                                                                           <div className='text-xl'>Deep Dive - Functions, OOPS, Modules, Errors and Exceptions</div>
                                                                      </Typography>
                                                                 </AccordionSummary>
                                                                 <div>
                                                                      <AccordionDetails>
                                                                           <Typography>
                                                                                <div className='flex mb-3'>
                                                                                     <p className='text-lg'>Learning Objective : </p><p className='text-neutral-500 py-0.5'> Give a brief idea of what Python is and touch on the basics.</p>
                                                                                </div>
                                                                                <div>
                                                                                     <p className=''>Topics</p>
                                                                                     <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                          <circle cx="8" cy="8" r="8" />
                                                                                     </svg>
                                                                                          <p className='text-neutral-600 text-sm'>Overview of Python</p>
                                                                                     </p>
                                                                                     <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                          <circle cx="8" cy="8" r="8" />
                                                                                     </svg>
                                                                                          <p className='text-neutral-600 text-sm'>The Companies using Python</p>
                                                                                     </p>
                                                                                     <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                          <circle cx="8" cy="8" r="8" />
                                                                                     </svg>
                                                                                          <p className='text-neutral-600 text-sm'>Other applications in which Python is used</p>
                                                                                     </p>
                                                                                     <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                          <circle cx="8" cy="8" r="8" />
                                                                                     </svg>
                                                                                          <p className='text-neutral-600 text-sm'>Discuss Python Scripts on UNIX/Windows</p>
                                                                                     </p>
                                                                                </div>
                                                                           </Typography>
                                                                      </AccordionDetails>
                                                                 </div>
                                                            </Accordion>
                                                            <Accordion>
                                                                 <AccordionSummary
                                                                      aria-controls="panel1d-content"
                                                                      id="panel1d-header"
                                                                      expanded={expanded === "panel1"}
                                                                      onChange={handleChange("panel1")}
                                                                 >
                                                                      <Typography>
                                                                           <div className='text-xl'>Introduction to Numpy and Pandas</div>
                                                                      </Typography>
                                                                 </AccordionSummary>
                                                                 <div>
                                                                      <AccordionDetails>
                                                                           <Typography>
                                                                                <div className='flex mb-3'>
                                                                                     <p className='text-lg'>Learning Objective : </p><p className='text-neutral-500 py-0.5'> Give a brief idea of what Python is and touch on the basics.</p>
                                                                                </div>
                                                                                <div>
                                                                                     <p className=''>Topics</p>
                                                                                     <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                          <circle cx="8" cy="8" r="8" />
                                                                                     </svg>
                                                                                          <p className='text-neutral-600 text-sm'>Overview of Python</p>
                                                                                     </p>
                                                                                     <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                          <circle cx="8" cy="8" r="8" />
                                                                                     </svg>
                                                                                          <p className='text-neutral-600 text-sm'>The Companies using Python</p>
                                                                                     </p>
                                                                                     <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                          <circle cx="8" cy="8" r="8" />
                                                                                     </svg>
                                                                                          <p className='text-neutral-600 text-sm'>Other applications in which Python is used</p>
                                                                                     </p>
                                                                                     <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                          <circle cx="8" cy="8" r="8" />
                                                                                     </svg>
                                                                                          <p className='text-neutral-600 text-sm'>Discuss Python Scripts on UNIX/Windows</p>
                                                                                     </p>
                                                                                </div>
                                                                           </Typography>
                                                                      </AccordionDetails>
                                                                 </div>
                                                            </Accordion>
                                                            <Accordion>
                                                                 <AccordionSummary
                                                                      aria-controls="panel1d-content"
                                                                      id="panel1d-header"
                                                                      expanded={expanded === "panel1"}
                                                                      onChange={handleChange("panel1")}
                                                                 >
                                                                      <Typography>
                                                                           <div className='text-xl'>Data Visualization</div>
                                                                      </Typography>
                                                                 </AccordionSummary>
                                                                 <div>
                                                                      <AccordionDetails>
                                                                           <Typography>
                                                                                <div className='flex mb-3'>
                                                                                     <p className='text-lg'>Learning Objective : </p><p className='text-neutral-500 py-0.5'> Give a brief idea of what Python is and touch on the basics.</p>
                                                                                </div>
                                                                                <div>
                                                                                     <p className=''>Topics</p>
                                                                                     <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                          <circle cx="8" cy="8" r="8" />
                                                                                     </svg>
                                                                                          <p className='text-neutral-600 text-sm'>Overview of Python</p>
                                                                                     </p>
                                                                                     <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                          <circle cx="8" cy="8" r="8" />
                                                                                     </svg>
                                                                                          <p className='text-neutral-600 text-sm'>The Companies using Python</p>
                                                                                     </p>
                                                                                     <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                          <circle cx="8" cy="8" r="8" />
                                                                                     </svg>
                                                                                          <p className='text-neutral-600 text-sm'>Other applications in which Python is used</p>
                                                                                     </p>
                                                                                     <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                          <circle cx="8" cy="8" r="8" />
                                                                                     </svg>
                                                                                          <p className='text-neutral-600 text-sm'>Discuss Python Scripts on UNIX/Windows</p>
                                                                                     </p>
                                                                                </div>
                                                                           </Typography>
                                                                      </AccordionDetails>
                                                                 </div>
                                                            </Accordion>
                                                       </Typography>
                                                  </AccordionDetails>
                                             </div>
                                        </Accordion>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               {/* Program Fees */}
               <div class="bg-gradient-to-r from-blue-500 to-blue-900" id='fees'>
                    <div className='w-9/12 mx-auto p-10'>
                         <div className='flex justify-between'>
                              <div className='text-4xl text-white'>Program Fees</div>
                              <div className='flex gap-3'>
                                   <div>
                                        <select className='outline-none bg-white py-1 px-0.5'>
                                             <option className='p-1'>IN - India</option>
                                             <option className='p-1'>US - USD</option>
                                             <option className='p-1'>AE - United Arab Emirates </option>
                                        </select>
                                   </div>
                                   <div>
                                        <select className='outline-none bg-white py-1 px-0.5'>
                                             <option className='p-1'>&#8377; INR</option>
                                             <option className='p-1'>&#36; DOLLAR</option>
                                             <option className='p-1'>&#1583; AED</option>
                                        </select>
                                   </div>
                              </div>
                         </div>
                         <div className='card rounded-md bg-white mt-5 p-5'>
                              <div className='w-11/12 mx-auto flex justify-evenly'>
                                   <div className='mt-5'>
                                        <div className='flex'>
                                             <div className='text-5xl'>&#8377; 69,999</div>
                                             <div className='ml-2 text-neutral-400 text-lg py-2'><s>&#8377; 125,879</s></div>
                                        </div>
                                        <div className='text-green-600 bg-green-50 border border-green-600 text-sm text-center w-11/12 mx-auto my-3 inline-block rounded-full '>
                                             Your total savings: &#8377; 55,880
                                        </div>
                                        <div>
                                             <a href='#emi' className='text-blue-600'><u>No Cost EMI</u></a> Available, Starting from <strong>&#8377;7,778</strong>/mo.
                                        </div>
                                        <div className='my-6 w-10/12 mx-auto'>
                                             <button type="button" className="bg-orange-500 text-white hover:bg-blue-50 hover:text-orange-500 border hover:shadow-lg hover:border-orange-500 rounded-md text-2xl w-full py-2 uppercase">Submit</button>
                                        </div>
                                        <div className='text-lg'>Financing options available <a href='#viewmore' className='text-blue-500'>View More</a></div>
                                   </div>
                                   <div>
                                        <Divider orientation="vertical" style={{ height: "100px", marginRight: "5px", marginLeft: "5px", marginTop: "20px" }}></Divider>
                                        <div className='text-neutral-500 my-1'>or</div>
                                        <Divider orientation="vertical" style={{ height: "100px", marginRight: "5px", marginLeft: "5px" }}></Divider>
                                   </div>

                                   <div>
                                        <div className='flex'>
                                             <img class="lazyImages" width="36" height="36" fullbase="true" alt="mlp get in touch user" src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1688063257/img/mlp_get_in_touch_ico.png" />
                                             <div className='text-xl ml-5 py-1 text-blue-400'>Not Sure? Talk to our advisors</div>
                                        </div>
                                        <div>
                                             <form className='mb-4'>
                                                  <div class="flex flex-col p-4">
                                                       <label for="exampleFormControlInput1" class="form-label" className='mb-2 text-neutral-500 text-sm'>Email ID</label>
                                                       <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" className='border rounded-md focus:border-blue-600 outline-none px-2 py-1' />
                                                  </div>
                                                  <div class="flex flex-col px-4">
                                                       <label for="Input2" class="form-label" className='mb-2 text-neutral-500 text-sm'>Phone Number</label>
                                                       <div>
                                                            <select className='outline-none text-white bg-blue-900 py-1.5 px-1 border border-blue-900 rounded-l-md'>
                                                                 <option className='p-1'>+91</option>
                                                                 <option className='p-1'>+198</option>
                                                                 <option className='p-1'>+823</option>
                                                            </select>
                                                            <input type="tel" class="form-control" id="Input2" placeholder='123 - 456 - 7890' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' className='border rounded-r-md focus:border-blue-700 outline-none px-2 py-1' required />
                                                       </div>
                                                  </div>
                                             </form>
                                        </div>
                                        <div className='my-6 w-9/12 mx-auto'>
                                             <button type="button" className="bg-blue-900 text-white hover:bg-blue-50 hover:text-blue-900 border hover:shadow-lg hover:border-blue-900 rounded-md text-md w-full py-2 uppercase">Submit</button>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               {/* Master Course Certification */}
               <div className='w-9/12 mx-auto' id='certification'>
                    <div className='my-8 text-4xl text-blue-900'>Master Course Certification</div>
                    <div className='card bg-white rounded-md p-3'>
                         <div className='text-neutral-500 text-xl text-center my-5'>Edureka’s Certificate Holders work at companies like :</div>
                         <div className='flex justify-evenly mb-4'>
                              <img class="lazyImages" width="71" height="56" fullbase="true" alt="wipro icon" src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1688063257/img/holder5-min.png" />
                              <img class="lazyImages" width="150" height="30" fullbase="true" alt="honeywell icon" src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1688063257/img/holder4-min.png"></img>
                              <img class="lazyImages" width="70" height="40" fullbase="true" alt="cisco icon" src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1688063257/img/holder3-min.png"></img>
                              <img class="lazyImages" width="130" height="25" fullbase="true" alt="vmware icon" src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1688063257/img/holder2-min.png"></img>
                              <img class="lazyImages" width="70" height="40" fullbase="true" alt="dell icon" src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1688063257/img/holder1-min.png"></img>
                         </div>
                         <div className='flex justify-center gap-x-5'>
                              <div className='my-6'>
                                   <button type="button" className="bg-white text-blue-900 hover:bg-blue-50 hover:text-blue-900 border hover:shadow-lg border-blue-900 rounded-md text-md py-2 px-3">Preview Sample Certificate</button>
                              </div>
                              <div className='my-6'>
                                   <button type="button" className="bg-blue-900 text-white border hover:shadow-lg hover:border-blue-900 rounded-md text-md py-2 px-3 uppercase">Start Learning</button>
                              </div>
                         </div>
                         <div className=''>
                              <img className="mx-auto" width="700" height="543" fullbase="true" alt="certificate" src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1688063257/img/certibackgrounds/Certificate-for-Masters-course-CLP_new.webp" />
                         </div>
                    </div>
               </div>
               {/* Feautres */}
               <div className='w-9/12 mx-auto mb-5' id='features'>
                    <div className='my-8 text-4xl text-blue-900'>Cloud Architect Course Features</div>
                    <div className='card bg-white rounded-md p-1'>
                         <div className="my-8 w-11/12 mx-auto grid grid-cols-2 gap-4">
                              <div className='flex'>
                                   <div>
                                        <img class="lazyImages" width="35" height="35" fullbase="true" alt="program-feature" src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1688063257/img/prog_feature_457_1564569275.svg" />
                                   </div>
                                   <div className='ml-3 py-1'>
                                        <div className='text-sm text-neutral-600'>As per your convenience</div>
                                        <div className='text-xs text-neutral-500'>Weekday or weekend; morning or evening. Multiple options for everyone.</div>
                                   </div>
                              </div>
                              <div className='flex'>
                                   <div>
                                        <img class="lazyImages" width="35" height="35" fullbase="true" alt="program-feature" src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1688063257/img/prog_feature_457_1564569287.svg" />
                                   </div>
                                   <div className='ml-3 py-1'>
                                        <div className='text-sm text-neutral-600'>Never miss a class</div>
                                        <div className='text-xs text-neutral-500'>You can always switch to another batch, depending upon your availability.</div>
                                   </div>
                              </div>
                              <div className='flex'>
                                   <div>
                                        <img class="lazyImages" width="35" height="35" fullbase="true" alt="program-featur" src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1688063257/img/prog_feature_457_1564569297.svg" />
                                   </div>
                                   <div className='ml-3 py-1'>
                                        <div className='text-sm text-neutral-600'>Personal Learning Manager</div>
                                        <div className='text-xs text-neutral-500'>A human, who is Ridiculously Committed to answer all your queries.</div>
                                   </div>
                              </div>
                              <div className='flex'>
                                   <div className='my-2'><img class="lazyImages" width="35" height="35" fullbase="true" alt="program-feature" src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1688063257/img/prog_feature_457_1564569317.svg" /></div>
                                   <div className='ml-3 py-1'>
                                        <div className='text-sm text-neutral-600'>Lifetime Access</div>
                                        <div className='text-xs text-neutral-500'>You'll have the keys to all our presentations, quizzes, installation guides. All for a lifetime!</div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               {/* FAQ */}
               <div className='w-9/12 mx-auto my-8' id='faq'>
                    <div className='text-3xl text-blue-900 mb-5'>FAQ</div>
                    <div className='card rounded-md bg-white p-1'>
                         <div>
                              <Accordion>
                                   <AccordionSummary
                                        aria-controls="panel1d-content"
                                        id="panel1d-header"
                                        expanded={expanded === "panel1"}
                                        onChange={handleChange("panel1")}
                                   >
                                        <Typography>
                                             <div className='text-xl'>Cloud Architect Course FAQ's</div>
                                        </Typography>
                                   </AccordionSummary>
                                   <div>
                                        <AccordionDetails>
                                             <Typography>
                                                  <Accordion>
                                                       <AccordionSummary
                                                            aria-controls="panel1d-content"
                                                            id="panel1d-header"
                                                            expanded={expanded === "panel1"}
                                                            onChange={handleChange("panel1")}
                                                       >
                                                            <Typography>
                                                                 <div className='text-xl'>What is Edureka’s Cloud Architect Masters Program and how is it different from the individual courses offered by Edureka?</div>
                                                            </Typography>
                                                       </AccordionSummary>
                                                       <div>
                                                            <AccordionDetails>
                                                                 <Typography>
                                                                      <div className='text-neutral-600'>
                                                                           Cloud Architect Course Master Program is a structured learning path recommended by leading industry experts and ensures that you transform into an expert Cloud Professional. Being a Cloud Professional requires you to be a master of a multitude of skills, and this program aims at providing you an in-depth knowledge of the entire Cloud Computation System. Individual courses focus on specialization in one or two specific skills, however, if you intend to become a master in Cloud Computation, then this is the path for you to follow.
                                                                      </div>
                                                                 </Typography>
                                                            </AccordionDetails>
                                                       </div>
                                                  </Accordion>
                                                  <Accordion>
                                                       <AccordionSummary
                                                            aria-controls="panel1d-content"
                                                            id="panel1d-header"
                                                            expanded={expanded === "panel1"}
                                                            onChange={handleChange("panel1")}
                                                       >
                                                            <Typography>
                                                                 <div className='text-xl'>Sequences and File Operations</div>
                                                            </Typography>
                                                       </AccordionSummary>
                                                       <div>
                                                            <AccordionDetails>
                                                                 <Typography>
                                                                      <div className='flex mb-3'>
                                                                           <p className='text-lg'>Learning Objective : </p><p className='text-neutral-500 py-0.5'> Give a brief idea of what Python is and touch on the basics.</p>
                                                                      </div>
                                                                      <div>
                                                                           <p className=''>Topics</p>
                                                                           <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                <circle cx="8" cy="8" r="8" />
                                                                           </svg>
                                                                                <p className='text-neutral-600 text-sm'>Overview of Python</p>
                                                                           </p>
                                                                           <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                <circle cx="8" cy="8" r="8" />
                                                                           </svg>
                                                                                <p className='text-neutral-600 text-sm'>The Companies using Python</p>
                                                                           </p>
                                                                           <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                <circle cx="8" cy="8" r="8" />
                                                                           </svg>
                                                                                <p className='text-neutral-600 text-sm'>Other applications in which Python is used</p>
                                                                           </p>
                                                                           <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                <circle cx="8" cy="8" r="8" />
                                                                           </svg>
                                                                                <p className='text-neutral-600 text-sm'>Discuss Python Scripts on UNIX/Windows</p>
                                                                           </p>
                                                                      </div>
                                                                 </Typography>
                                                            </AccordionDetails>
                                                       </div>
                                                  </Accordion>
                                                  <Accordion>
                                                       <AccordionSummary
                                                            aria-controls="panel1d-content"
                                                            id="panel1d-header"
                                                            expanded={expanded === "panel1"}
                                                            onChange={handleChange("panel1")}
                                                       >
                                                            <Typography>
                                                                 <div className='text-xl'>Deep Dive - Functions, OOPS, Modules, Errors and Exceptions</div>
                                                            </Typography>
                                                       </AccordionSummary>
                                                       <div>
                                                            <AccordionDetails>
                                                                 <Typography>
                                                                      <div className='flex mb-3'>
                                                                           <p className='text-lg'>Learning Objective : </p><p className='text-neutral-500 py-0.5'> Give a brief idea of what Python is and touch on the basics.</p>
                                                                      </div>
                                                                      <div>
                                                                           <p className=''>Topics</p>
                                                                           <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                <circle cx="8" cy="8" r="8" />
                                                                           </svg>
                                                                                <p className='text-neutral-600 text-sm'>Overview of Python</p>
                                                                           </p>
                                                                           <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                <circle cx="8" cy="8" r="8" />
                                                                           </svg>
                                                                                <p className='text-neutral-600 text-sm'>The Companies using Python</p>
                                                                           </p>
                                                                           <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                <circle cx="8" cy="8" r="8" />
                                                                           </svg>
                                                                                <p className='text-neutral-600 text-sm'>Other applications in which Python is used</p>
                                                                           </p>
                                                                           <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                <circle cx="8" cy="8" r="8" />
                                                                           </svg>
                                                                                <p className='text-neutral-600 text-sm'>Discuss Python Scripts on UNIX/Windows</p>
                                                                           </p>
                                                                      </div>
                                                                 </Typography>
                                                            </AccordionDetails>
                                                       </div>
                                                  </Accordion>
                                                  <Accordion>
                                                       <AccordionSummary
                                                            aria-controls="panel1d-content"
                                                            id="panel1d-header"
                                                            expanded={expanded === "panel1"}
                                                            onChange={handleChange("panel1")}
                                                       >
                                                            <Typography>
                                                                 <div className='text-xl'>Introduction to Numpy and Pandas</div>
                                                            </Typography>
                                                       </AccordionSummary>
                                                       <div>
                                                            <AccordionDetails>
                                                                 <Typography>
                                                                      <div className='flex mb-3'>
                                                                           <p className='text-lg'>Learning Objective : </p><p className='text-neutral-500 py-0.5'> Give a brief idea of what Python is and touch on the basics.</p>
                                                                      </div>
                                                                      <div>
                                                                           <p className=''>Topics</p>
                                                                           <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                <circle cx="8" cy="8" r="8" />
                                                                           </svg>
                                                                                <p className='text-neutral-600 text-sm'>Overview of Python</p>
                                                                           </p>
                                                                           <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                <circle cx="8" cy="8" r="8" />
                                                                           </svg>
                                                                                <p className='text-neutral-600 text-sm'>The Companies using Python</p>
                                                                           </p>
                                                                           <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                <circle cx="8" cy="8" r="8" />
                                                                           </svg>
                                                                                <p className='text-neutral-600 text-sm'>Other applications in which Python is used</p>
                                                                           </p>
                                                                           <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                <circle cx="8" cy="8" r="8" />
                                                                           </svg>
                                                                                <p className='text-neutral-600 text-sm'>Discuss Python Scripts on UNIX/Windows</p>
                                                                           </p>
                                                                      </div>
                                                                 </Typography>
                                                            </AccordionDetails>
                                                       </div>
                                                  </Accordion>
                                                  <Accordion>
                                                       <AccordionSummary
                                                            aria-controls="panel1d-content"
                                                            id="panel1d-header"
                                                            expanded={expanded === "panel1"}
                                                            onChange={handleChange("panel1")}
                                                       >
                                                            <Typography>
                                                                 <div className='text-xl'>Data Visualization</div>
                                                            </Typography>
                                                       </AccordionSummary>
                                                       <div>
                                                            <AccordionDetails>
                                                                 <Typography>
                                                                      <div className='flex mb-3'>
                                                                           <p className='text-lg'>Learning Objective : </p><p className='text-neutral-500 py-0.5'> Give a brief idea of what Python is and touch on the basics.</p>
                                                                      </div>
                                                                      <div>
                                                                           <p className=''>Topics</p>
                                                                           <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                <circle cx="8" cy="8" r="8" />
                                                                           </svg>
                                                                                <p className='text-neutral-600 text-sm'>Overview of Python</p>
                                                                           </p>
                                                                           <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                <circle cx="8" cy="8" r="8" />
                                                                           </svg>
                                                                                <p className='text-neutral-600 text-sm'>The Companies using Python</p>
                                                                           </p>
                                                                           <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                <circle cx="8" cy="8" r="8" />
                                                                           </svg>
                                                                                <p className='text-neutral-600 text-sm'>Other applications in which Python is used</p>
                                                                           </p>
                                                                           <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                                                                <circle cx="8" cy="8" r="8" />
                                                                           </svg>
                                                                                <p className='text-neutral-600 text-sm'>Discuss Python Scripts on UNIX/Windows</p>
                                                                           </p>
                                                                      </div>
                                                                 </Typography>
                                                            </AccordionDetails>
                                                       </div>
                                                  </Accordion>
                                             </Typography>
                                        </AccordionDetails>
                                   </div>
                              </Accordion>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default MastersPage