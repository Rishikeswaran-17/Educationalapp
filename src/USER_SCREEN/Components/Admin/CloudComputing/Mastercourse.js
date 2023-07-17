import React, { useState } from 'react'
import Rating from "@mui/material/Rating";
import { Divider } from "@mui/material";

const Mastercourse = ({
     mainmenuid,
     mastercourseid,
     mastercoursename,
     Reviews,
     numberofcourses,
     coursehours,
     numberoflearners,
     minicoursesyllabus,
     category
}) => {

     const [value, setValue] = useState(4.4);
     // Split the syllabus string into an array of lines using comma as a delimiter
     const syllabusLines = minicoursesyllabus.split(',');

     return (
          <div className='my-5'>
               <div className="border p-2 w-9/12 flex gap-4 m-2">
                    <div className="flex gap-4">
                         <div className="w-20">
                              <img class="lazyImages img-responsive" fullbase="true" alt="master-course" src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1688063435/img/s/co_img_457_1522158452.png" /></div>
                         <div>
                              <div className="font-semibold text-xl w-80">{mastercoursename}</div>
                              <div>
                                   <Rating
                                        className="mt-1"
                                        name="read-only"
                                        value={value}
                                        readOnly
                                   />
                                   <span class="ml-2 py-1">{Reviews.slice(0, 3)}</span>
                                   <span class="text-xs ml-1 py-1 text-blue-500">{Reviews.slice(3, 10)}</span>
                              </div>
                              <div className="mt-6 flex justify-evenly w-56">
                                   <div>
                                        <div className="text-3xl mb-3 text-neutral-400 text-center">{numberofcourses}</div>
                                        <div className="italic text-center text-xs text-neutral-400">
                                             Courses
                                        </div>
                                   </div>
                                   <Divider orientation="vertical" flexItem />
                                   <div>
                                        <div className="text-3xl mb-3 text-neutral-400 text-center">{coursehours}</div>
                                        <div className="italic text-center text-xs text-neutral-400">
                                             Hours
                                        </div>
                                   </div>
                                   <Divider orientation="vertical" flexItem />
                                   <div>
                                        <div className="text-3xl mb-3 text-neutral-400 text-center">{numberoflearners}</div>
                                        <div className="italic text-center text-xs text-neutral-400">
                                             Learners
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="flex gap-2">
                         <div className='text-left w-96'>
                              <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                   <circle cx="8" cy="8" r="8" />
                              </svg>
                                   <p className='text-neutral-600 text-sm'>{syllabusLines[0].slice(1)}</p>
                              </p>
                              <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                   <circle cx="8" cy="8" r="8" />
                              </svg>
                                   <p className='text-neutral-600 text-sm'>{syllabusLines[1]}</p>
                              </p>
                              <p className='text-neutral-500 flex mt-2'><svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" fill="currentColor" class="bi bi-circle-fill" className='my-1.5 mr-2' viewBox="0 0 16 16">
                                   <circle cx="8" cy="8" r="8" />
                              </svg>
                                   <p className='text-neutral-600 text-sm'>{syllabusLines[2] && syllabusLines[2].slice(0, -1)}</p>
                              </p>
                              <div className="mt-3 text-xs text-neutral-500 italic">9 more courses under this Masters program </div>
                         </div>
                         <div className="my-auto">
                              <a href="/masters-program/cloud-architect">
                                   <button className="bg-white uppercase text-xs text-blue-900 hover:text-white hover:bg-orange-300 border border-blue-900 hover:border-orange-400 px-1.5 py-2">View Details</button>
                              </a>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Mastercourse