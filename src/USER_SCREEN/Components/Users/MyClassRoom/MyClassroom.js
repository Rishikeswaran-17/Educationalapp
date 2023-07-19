import React, { useState } from "react";
import { useLocation } from "react-router-dom";


const MyClassroom = () => {
  const location = useLocation();
  const { pathname } = location;
  const encodedCoursename = pathname.split("/").pop();
  const coursename = decodeURIComponent(encodedCoursename);
  const percentage = 35;

  const [initBrowseCategory, setinitBrowseCategory] = useState(false);
  const toggleMenuBrowse = () => {
    setinitBrowseCategory(!initBrowseCategory);
  };


  return (
    <div>
      {/* Navbar */}
      <nav class="w-full flex justify-between bg-blue-950 opacity-95 px-5 py-1">
        {pathname !== "/admin_homepage" && (
          <div className="text-3xl text-white font-sans my-3">
            {coursename}
          </div>)}
        <div className="w-60 items-center flex px-2">
          <div class="h-1.5 w-4/5 bg-neutral-200 dark:bg-neutral-600 rounded-md">
            <div
              class="h-1.5 bg-green-500 rounded-md"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <div className="text-white flex justify-end text-xs">
            <span className="pl-2">{percentage}%</span>
            <span className="pl-1">Completed</span>{" "}
          </div>
        </div>
        {/* <div className="relative hover:bg-slate-50 md:mr-0 rounded-t-3xl px-0.5 -scroll-mr-96 mr-64">
        <button
  id="browseCategory"
  onMouseOver={toggleMenuBrowse}
  aria-haspopup="true"
  aria-expanded={initBrowseCategory ? "true" : "false"}
  type="button"
  className={`text-sm my-1 relative z-10 flex bg-blue-900 opacity-80 px-1 py-2 rounded-3xl ${
    initBrowseCategory ? "hover:bg-opacity-95" : ""
  }`}
>

            <div className="p-1">
              <p className="text-xs text-left text-yellow-500">
                Your Course Grade
              </p>{" "}
              <h2 className="flex font-medium justify-between text-white">
                Great, Your are upto mark!{" "}
              </h2>
            </div>
            <div className="text-yellow-500 text-3xl bg-blue-950 opacity-90 px-3 py-1 mx-1 rounded-full border border-yellow-500">
              A
            </div>
          </button>
          <ul
            id="submenu1"
            className={`submenu1 ${initBrowseCategory ? "" : "hidden"
              } absolute w-full top-full -left-2 bg-white mx-2 rounded-b-3xl shadow-xl z-20`}
          >
            <li className="py-2 text-start px-4 hover:rounded-b-3xl">
              <div className="flex mt-2 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-arrow-up-short"
                  className="text-green-500 w-1/2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
                  />
                </svg>
                <p className="text-sm">
                  Continue to submit the assignments and quizzes on time, and
                  earn your certificate with Grade A.
                </p>
              </div>
              <div className="rounded-md border border-slate-200 py-2 flex justify-evenly">
                <div className="text-center">
                  <p className="bg-blue-900 text-white rounded-full py-1">
                    A
                  </p>
                  <p className="text-xs pt-1 font-medium text-slate-600 ">
                    90-100
                  </p>
                </div>
                <div className="text-center">
                  <p className="bg-blue-900 text-white rounded-full py-1 px-3">
                    B
                  </p>
                  <p className="text-xs pt-1 font-medium text-slate-600 ">
                    70-89
                  </p>
                </div>
                <div className="text-center">
                  <p className="bg-blue-900 text-white rounded-full py-1 px-3">
                    C
                  </p>
                  <p className="text-xs pt-1 font-medium text-slate-600">
                    &lt;70
                  </p>
                </div>
              </div>
              <div className="text-blue-500 text-center pt-3"><a href="/contact_us">How it works?</a></div>
            </li>
          </ul>
        </div> */}
      </nav>
    </div>
  );
};

export default MyClassroom;
