import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const AdminNavbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const encodedCoursename = pathname.split("/").pop();
  const coursename = decodeURIComponent(encodedCoursename);

  return (
    <nav className="w-full flex justify-between bg-blue-950 opacity-85 px-5 py-1">
      <div>
        <ol className="list-reset flex">
          <li>
            <Link
              to="/user_homepage"
              className={`text-sm ${pathname === "/user_homepage"
                ? "text-blue-400"
                : "text-neutral-300"
              } transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600`}
            >
              Home
            </Link>
          </li>
          <li>
            <span className="mx-2 text-neutral-400 dark:text-neutral-400">
              &gt;
            </span>
          </li>
          <li>
            <Link
              to="https://www.edureka.co/all-courses"
              className={`text-sm ${pathname === "/all-courses"
                ? "text-blue-400"
                : "text-neutral-300"
              } transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600`}
            >
              All Courses
            </Link>
          </li>
          <li>
            <span className="mx-2 text-neutral-400 dark:text-neutral-400">
              &gt;
            </span>
          </li>
          <li>
            <span className={`text-sm ${pathname === "/my-classroom"
              ? "text-blue-400"
              : "text-neutral-300"
            } transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600 cursor-pointer`}>
              My Classroom
            </span>
          </li>
          {pathname !== "/user_homepage" &&
            pathname !== "/all-courses" &&
            pathname !== "/my-classroom" && (
              <>
                <li>
                  <span className="mx-2 text-neutral-400 dark:text-neutral-400">
                    &gt;
                  </span>
                </li>
                <li>
                  <span className={`text-sm ${pathname === "/discussion_forum"
                    ? "text-blue-400"
                    : "text-neutral-300"
                  } transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600`}>
                    {coursename}
                  </span>
                </li>
              </>
            )}
        </ol>
      </div>
      <div className="flex">
        <a
          className="flex justify-between mx-2 px-2"
          rel="noopener noreferrer"
          target="_blank"
          href="/discussion_forum"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chat-right-text text-white my-auto mr-2"
            viewBox="0 0 16 16"
          >
            {/* Add the SVG path for the chat icon */}
          </svg>
          <button className="text-white">Discussion Forum</button>
        </a>
        <a
          className="flex justify-between mx-2 px-2"
          rel="noopener noreferrer"
          target="_blank"
          href="/support"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-envelope text-white my-auto mr-2"
            viewBox="0 0 16 16"
          >
            {/* Add the SVG path for the envelope icon */}
          </svg>
          <button className="text-white">Support</button>
        </a>
      </div>
    </nav>
  );
};

export default AdminNavbar;
