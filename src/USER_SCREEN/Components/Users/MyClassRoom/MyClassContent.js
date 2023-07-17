import React from "react";

// Initialization for ES Users
import { Tab, initTE } from "tw-elements";
import CourseContentPagination from "./MUIClassContent";
initTE({ Tab });

const MyClassContent = () => {
  return (
    <div>
      <section className="container mb-10 flex lg:w-11/12 md:w-11/12 sm:w-full mx-auto">
        {/* Grid - 1 */}
        <div className="lg:w-auto md:w-auto sm:w-auto">
          <div className="flex items-center mx-2">
            <input
              placeholder="search"
              className="bg-neutral-100 outline-none rounded-full px-3 m-2 py-1"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search text-slate-400 right-10 z-10 relative"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
          <ul className="flex flex-col list-none flex-wrap" role="tablist" data-te-nav-ref>
            <li role="presentation" className="flex-grow text-center">
              <a
                href="#getting-started"
                className="my-2 block px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-white hover:shadow-md focus:isolate focus:border-transparent data-[te-nav-active]:bg-white data-[te-nav-active]:text-blue-900 dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                data-te-toggle="pill"
                data-te-target="#gs"
                role="tab"
                aria-controls="gs"
                aria-selected="true"
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-power mr-2 active:text-blue-700"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.5 1v7h1V1h-1z" />
                    <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z" />
                  </svg>
                  <div className="py-1">Getting Started</div>
                </div>
              </a>
            </li>
            <li role="presentation" className="flex-grow text-center">
              <a
                href='#course-content'
                className="block px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-white hover:shadow-md focus:isolate focus:border-transparent data-[te-nav-active]:bg-white data-[te-nav-active]:text-blue-900 dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                data-te-toggle="pill"
                data-te-target="#cc"
                role="tab"
                aria-controls="cc"
                aria-selected="false"
              >
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-book-half mr-2 active:text-blue-700"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2H2v12h12V2zM2 1.5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H2z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M12 3.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1.5V9.707l-2.146 2.147a.5.5 0 0 1-.708 0L6 9.707V12.5H4a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h8zm-.5 1H4v6h7V4.5z"
                    />
                  </svg>
                  <div className="py-1">Course Content</div>
                </div>
              </a>
            </li>
            <li role="presentation" class="flex-grow text-center">
              <a
                href="#pre-recorded-classes"
                class="my-2 block px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-white hover:shadow-md focus:isolate focus:border-transparent data-[te-nav-active]:bg-white data-[te-nav-active]:text-blue-900 dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                data-te-toggle="pill"
                data-te-target="#pre"
                role="tab"
                aria-controls="pre"
                aria-selected="false"
              >
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-play-circle"
                    className="items-center mr-2 active:text-blue-700"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                  </svg>
                  <div className="py-1">Pre-recorded Courses</div>
                </div>
              </a>
            </li>
            <li role="presentation" class="flex-grow text-center">
              <a
                href="#pre-requisites"
                class="my-2 block px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-white hover:shadow-md focus:isolate focus:border-transparent data-[te-nav-active]:bg-white data-[te-nav-active]:text-blue-900 dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                data-te-toggle="pill"
                data-te-target="#pre-req"
                role="tab"
                aria-controls="pre-req"
                aria-selected="false"
              >
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-list"
                    className="items-center mr-2 active:text-blue-700"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                  <div className="py-1">Pre-Requisites</div>
                </div>
              </a>
            </li>
            <li role="presentation" class="flex-grow text-center">
              <a
                href="#class-recordings"
                class="my-2 block px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-white hover:shadow-md focus:isolate focus:border-transparent data-[te-nav-active]:bg-white data-[te-nav-active]:text-blue-900 dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                data-te-toggle="pill"
                data-te-target="#cr"
                role="tab"
                aria-controls="cr"
                aria-selected="false"
              >
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-camera-reels"
                    className="items-center mr-2 active:text-blue-700"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
                    <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" />
                    <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg>
                  <div className="py-1">Class Recordings</div>
                </div>
              </a>
            </li>
            <li role="presentation" class="flex-grow text-center">
              <a
                href="#personal-library"
                class="block px-7 pb-3.5 pt-4 text-sm font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-white hover:shadow-md focus:isolate focus:border-transparent data-[te-nav-active]:bg-white data-[te-nav-active]:text-blue-900 dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                data-te-toggle="pill"
                data-te-target="#pl"
                role="tab"
                aria-controls="pl"
                aria-selected="false"
              >
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-journal-bookmark"
                    className="items-center mr-2 active:text-blue-700"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 8V1h1v6.117L8.743 6.07a.5.5 0 0 1 .514 0L11 7.117V1h1v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z"
                    />
                    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                  </svg>
                  <div className="py-1">Personal Library</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className="card shadow-md bg-white h-fit lg:w-2/4 md:w-3/4 sm:w-4/5">
          <div
            class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block mx-14"
            id="gs"
            role="tabpanel"
            aria-labelledby="tabs-home-tab01"
            data-te-tab-active
          >
            <div className="m-5 mb-5">
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
                <div className="heading">Getting Started</div>
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
          </div>
          {/* Course Content Tab Section */}
          <div
            class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="cc"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab02"
          >
            <div>
              <div className="heading text-lg mt-3">
                <CourseContentPagination />
              </div>
            </div>
          </div>
          {/* Course Content Tab Ending */}
          <div
            class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="pre"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab04"
          >
            
          </div>
          <div
            class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="pre-req"
            role="tabpanel"
            aria-labelledby="tabs-contact-tab04"
          >
            <div className="mx-5">
              <div className="heading text-lg mt-3">Pagination</div>
              <div className="text-2xl flex mt-3 text-blue-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-1-circle-fill"
                  className="mr-3"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312V4.002Z" />
                </svg>
                <p>Introduction to Linux</p>
              </div>
              <div className="my-4">
                In this module, you will get introduced to the Linux
                fundamentals such as the architecture of Linux, basic Linux
                commands, and many more. Video Title: Same as unit name
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
                      <h3 className="text-neutral-600 mb-2">Presentation</h3>
                      <p className="text-xs text-neutral-500 text-end"></p>
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
                      <h3 className="text-neutral-600 mb-2">Linux Commands</h3>
                      <p className="text-xs text-neutral-500 text-start">
                        This document contains a list of the basic Linux
                        commands and thier usage.
                      </p>
                    </div>
                  </div>
                  <div className="text-blue-800 text-sm m-3">Viewed</div>
                </div>
              </div>
            </div>
          </div>
          {/* Class Recordings */}
          <div
            class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="cr"
            role="tabpanel"
            aria-labelledby="tabs-contact-tab05"
          >
            <div className="mx-5">
              <div className="flex mt-3 mb-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-play-circle"
                  className="text-blue-800 mx-3 w-14"
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
          {/* Personal Library Tab */}
          <div
            class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="pl"
            role="tabpanel"
            aria-labelledby="tabs-contact-tab06"
          >
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
        </div>
        {/* Grid - 3 */}
        <div className="card bg-white p-3 rounded-md shadow-lg h-fit">Hello</div>
      </section>
    </div>
  );
};

export default MyClassContent;
