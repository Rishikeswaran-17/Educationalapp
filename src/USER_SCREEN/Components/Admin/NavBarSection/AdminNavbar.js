import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const AdminNavbar = () => {
  const [mainmenu, setMainmenu] = useState([]);
  const [subcourse, setSubcourse] = useState([]);
  const [mastercourse, setMastercourse] = useState([]);

  useEffect(() => {
    fetchMainMenu();
    fetchSubcourse();
    fetchMastercourse();
  }, []);

  const fetchMainMenu = async () => {
    try {
      const response = await fetch("/main-menu");
      const data = await response.json();
      setMainmenu(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSubcourse = async () => {
    try {
      const response = await fetch("/subcourse");
      const data = await response.json();
      setSubcourse(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMastercourse = async () => {
    try {
      const response = await fetch("/mastercourse");
      const data = await response.json();
      setMastercourse(data);
    } catch (error) {
      console.log(error);
    }
  };

  const location = useLocation();
  const { pathname } = location;
  const currentPath = location.pathname;
  const encodedCoursename = pathname.split("/").pop();
  const coursename = decodeURIComponent(encodedCoursename);

  const breadcrumbLinks = [
    { path: "/CCC", text: "Home" },
    { path: "/admin_homepage", text: "All Courses" },
    { path: `/${mainmenu.category}`, text: `${mainmenu.mainmenuname}` },
  ];

  return (
    <nav className="w-full flex justify-between bg-blue-950 opacity-85 px-5 py-1">
      <div>
        <ol className="list-reset flex">
          {breadcrumbLinks.map((link, index) => (
            <React.Fragment key={index}>
              <li>
                <Link
                  to={link.path}
                  className={`text-sm ${link.path === currentPath
                      ? "text-blue-400"
                      : "text-neutral-300"
                    } transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600`}
                >
                  {link.text}
                </Link>
              </li>
              {index !== breadcrumbLinks.length - 1 && (
                <li>
                  <span className="mx-2 text-neutral-400 dark:text-neutral-400">
                    &gt;
                  </span>
                </li>
              )}
            </React.Fragment>
          ))}
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
