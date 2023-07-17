import React, { useState, useEffect } from "react";

const BrowsCategoriesNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mainmenu, setMainmenu] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const fetchMainMenu = async () => {
    try {
      const response = await fetch("/main-menu");
      const data = await response.json();
      // console.log("")
      setMainmenu(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMainMenu();
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  let visibleNames;

  if (windowWidth <= 768) {
    visibleNames = mainmenu.slice(0, 4);
  } else {
    const maxVisibleNames = Math.floor(windowWidth / 160); // Adjust 150 to your desired name width
    visibleNames = mainmenu.slice(0, maxVisibleNames);
  }

  return (
    <nav className="w-full px-10 flex justify-between bg-slate-100 py-1">
      <ul className="flex">
        {visibleNames.map((course) => (
          <a href={`/${course.category}`} key={course.category}>
            <li className="my-1 py-2 text-gray-600 hover:bg-gray-300 px-3 rounded-2xl text-sm">
              {course.mainmenuname}
            </li>
          </a>
        ))}
      </ul>
      <div className="relative">
        <button
          id="submenu-icon"
          onClick={toggleMenu}
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : "false"}
          type="button"
          className="hover:bg-gray-200 text-blue-600 my-1 py-2 px-3 rounded-2xl relative z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        {mainmenu.length > visibleNames.length && isOpen && (
          <ul
            id="submenu"
            className="submenu absolute w-60 top-full right-0 bg-white mt-1 mx-2 rounded-sm shadow-lg z-20"
          >
            {mainmenu.slice(visibleNames.length).map((course) => (
              <li
                className="py-2 text-sm text-start px-4 hover:rounded-sm hover:text-white hover:bg-gradient-to-r from-blue-800 to-blue-600"
                key={course.category}
              >
                <a className="no-underline" href={`/${course.category}`}>
                  {course.mainmenuname}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default BrowsCategoriesNavBar;
