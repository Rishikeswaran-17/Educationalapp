import React from 'react';
import PropTypes from 'prop-types';
import TabPanel from './Tabpanel';
import CourseContentPagination from '../MUIClassContent';

const Details = ({ value }) => {
     return (
          <div>
               <TabPanel value={value} index={0}>
                    <div className="p-8 mb-5">
                         <div className="flex text-2xl my-8">
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="40"
                                   height="40"
                                   fill="currentColor"
                                   class="bi bi-power"
                                   className="items-center mr-5 text-blue-700"
                                   viewBox="0 0 16 16"
                              >
                                   <path d="M7.5 1v7h1V1h-1z" />
                                   <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
                              </svg>
                              <div className="heading py-2">Getting Started</div>
                         </div>

                         <div className="text-orange-400 text-3xl my-4 font-thin">
                              Let's Begin to Learn!
                         </div>
                         <div className="text-lg mb-4">Hi Shahul,</div>
                         <div className="text-sm mb-4 text-neutral-600">
                              Before embarking on your learning journey with edureka, let us
                              walk you through few important features of our LMS, which will
                              guide you towards the optimum path of course completion.
                         </div>
                         <div className="text-blue-900 flex">
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="8"
                                   height="8"
                                   fill="currentColor"
                                   class="bi bi-diamond-fill"
                                   className="my-2"
                                   viewBox="0 0 16 16"
                              >
                                   <path
                                        fill-rule="evenodd"
                                        d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435z"
                                   />
                              </svg>
                              <p className="ml-2">Curriculum Tracker</p>
                         </div>
                         <p className="my-4 text-sm text-neutral-600">
                              This can be seen on My Classroom page against the course card,
                              and is highlighted in the Course Content tab that you see in
                              your LMS. All your important events - Assignments, Case Studies,
                              Quiz and Project submission deadlines will be notified here.
                         </p>
                         <div className="text-blue-900 flex">
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="8"
                                   height="8"
                                   fill="currentColor"
                                   class="bi bi-diamond-fill"
                                   className="my-2"
                                   viewBox="0 0 16 16"
                              >
                                   <path
                                        fill-rule="evenodd"
                                        d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435z"
                                   />
                              </svg>
                              <p className="ml-2">Grade</p>
                         </div>
                         <p className="my-4 text-sm text-neutral-600">
                              Your grade is calculated basis timely submissions of
                              Assignments, Case Studies, Quizzes and Project. Make sure you do
                              not miss out on any!
                         </p>
                         <div className="text-blue-900 flex">
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="8"
                                   height="8"
                                   fill="currentColor"
                                   class="bi bi-diamond-fill"
                                   className="my-2"
                                   viewBox="0 0 16 16"
                              >
                                   <path
                                        fill-rule="evenodd"
                                        d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435z"
                                   />
                              </svg>
                              <p className="ml-2">Class Schedule</p>
                         </div>
                         <p className="my-4 text-sm text-neutral-600">
                              Keep a track of all the classes, along with your feedbacks!
                         </p>
                    </div>
               </TabPanel>
               <TabPanel value={value} index={1} sx={{maxWidth: "900px"}}>
                    <div className="heading text-lg p-5 max-h-fit min-w-fit">
                         <CourseContentPagination />
                    </div>
               </TabPanel>
               <TabPanel value={value} index={2}>
                    <div className='p-2 m-5'>
                         <div className="mx-auto w-full">
                              <div className="text-2xl flex mt-8 ">
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="30"
                                        height="30"
                                        fill="currentColor"
                                        class="bi bi-play-circle"
                                        className="text-blue-900 mx-3"
                                        viewBox="0 0 16 16"
                                   >
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                                   </svg>
                                   <p>Pre-Recorded Video Session from Old Batches</p>
                              </div>
                              <div className="mt-10">
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
                                                  <h3 className="text-neutral-600 mb-2">Class 1</h3>
                                             </div>
                                        </div>
                                        <div className="text-blue-800 text-sm m-3">Viewed</div>
                                   </div>
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
                                                  <h3 className="text-neutral-600 mb-2">Class 2</h3>
                                             </div>
                                        </div>
                                        <div className="text-blue-800 text-sm m-3">Viewed</div>
                                   </div>
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
                                                  <h3 className="text-neutral-600 mb-2">Class 3</h3>
                                             </div>
                                        </div>
                                        <div className="text-blue-800 text-sm m-3">Viewed</div>
                                   </div>
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
                                                  <h3 className="text-neutral-600 mb-2">Class 4</h3>
                                             </div>
                                        </div>
                                        <div className="text-blue-800 text-sm m-3">Viewed</div>
                                   </div>
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
                                                  <h3 className="text-neutral-600 mb-2">Class 5</h3>
                                             </div>
                                        </div>
                                        <div className="text-blue-800 text-sm m-3">Viewed</div>
                                   </div>
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
                                                  <h3 className="text-neutral-600 mb-2">Class 6</h3>
                                             </div>
                                        </div>
                                        <div className="text-blue-800 text-sm m-3">Viewed</div>
                                   </div>
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
                                                  <h3 className="text-neutral-600 mb-2">Class 7</h3>
                                             </div>
                                        </div>
                                        <div className="text-blue-800 text-sm m-3">Viewed</div>
                                   </div>
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
                                                  <h3 className="text-neutral-600 mb-2">Class 8</h3>
                                             </div>
                                        </div>
                                        <div className="text-blue-800 text-sm m-3">Viewed</div>
                                   </div>
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
                                                  <h3 className="text-neutral-600 mb-2">Class 9</h3>
                                             </div>
                                        </div>
                                        <div className="text-blue-800 text-sm m-3">Viewed</div>
                                   </div>
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
                                                  <h3 className="text-neutral-600 mb-2">Class 10</h3>
                                             </div>
                                        </div>
                                        <div className="text-blue-800 text-sm m-3">Viewed</div>
                                   </div>
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
                                                  <h3 className="text-neutral-600 mb-2">Class 11</h3>
                                             </div>
                                        </div>
                                        <div className="text-blue-800 text-sm m-3">Viewed</div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </TabPanel>
               <TabPanel value={value} index={3}>
                    <div className='p-4 w-full'>
                         <div className="mx-5">
                              <div className="flex mt-3 mb-7">
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        class="bi bi-play-circle"
                                        className="text-blue-800 mx-3 w-10"
                                        viewBox="0 0 16 16"
                                   >
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                                   </svg>
                                   <p className="text-2xl py-2">Class Recordings</p>
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
                                                  <h3 className="text-neutral-600 mb-2">Class 1</h3>
                                             </div>
                                        </div>
                                   </div>
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
                                                  <h3 className="text-neutral-600 mb-2">Class 2</h3>
                                             </div>
                                        </div>
                                   </div>
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
                                                  <h3 className="text-neutral-600 mb-2">Class 3</h3>
                                             </div>
                                        </div>
                                   </div>
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
                                                  <h3 className="text-neutral-600 mb-2">Class 4</h3>
                                             </div>
                                        </div>
                                   </div>
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
                                                  <h3 className="text-neutral-600 mb-2">Class 5</h3>
                                             </div>
                                        </div>
                                   </div>
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
                                                  <h3 className="text-neutral-600 mb-2">Class 6</h3>
                                             </div>
                                        </div>
                                   </div>
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
                                                  <h3 className="text-neutral-600 mb-2">Class 7</h3>
                                             </div>
                                        </div>
                                   </div>
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
                                                  <h3 className="text-neutral-600 mb-2">Class 8</h3>
                                             </div>
                                        </div>
                                   </div>
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
                                                  <h3 className="text-neutral-600 mb-2">Class 9</h3>
                                             </div>
                                        </div>
                                   </div>
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
                                                  <h3 className="text-neutral-600 mb-2">Class 10</h3>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </TabPanel>
               <TabPanel value={value} index={4}>
                    <div className='p-5'>
                         <div className="mt-5">
                              <div className="flex justify-between mx-10">
                                   <div className="text-lg">Personal Library</div>
                                   <div className="flex justify-evenly mx-2">
                                        <div className="px-2 text-neutral-500">
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="25"
                                                  height="25"
                                                  fill="currentColor"
                                                  class="bi bi-folder-plus"
                                                  viewBox="0 0 16 16"
                                             >
                                                  <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2Zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672Z" />
                                                  <path d="M13.5 9a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V12h-1.5a.5.5 0 0 1 0-1H13V9.5a.5.5 0 0 1 .5-.5Z" />
                                             </svg>
                                        </div>
                                        <div className="px-2 text-neutral-500">
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="25"
                                                  height="25"
                                                  fill="currentColor"
                                                  class="bi bi-link-45deg"
                                                  viewBox="0 0 16 16"
                                             >
                                                  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                             </svg>
                                        </div>
                                        <div className="px-2 text-neutral-500">
                                             <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="25"
                                                  height="25"
                                                  fill="currentColor"
                                                  class="bi bi-upload"
                                                  viewBox="0 0 16 16"
                                             >
                                                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                                  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                                             </svg>
                                        </div>
                                   </div>
                              </div>
                              <div className="mt-10 text-center">
                                   <h2 className="text-xl text-orange-300">Hi Shahul,</h2>
                                   <p className="mx-20 text-base text-neutral-700">
                                        This space is reserved for your study material. You can access
                                        to Edureka’s LMS and the files that you have upload for your
                                        reference.
                                   </p>
                              </div>
                              <img
                                   src="https://learning.edureka.co/assets/img/Personal-Library.png"
                                   alt="pl"
                                   className="mx-auto my-8"
                              />
                         </div>
                    </div>
               </TabPanel>
          </div>
     );
};

Details.propTypes = {
     value: PropTypes.number.isRequired,
};

export default Details;
