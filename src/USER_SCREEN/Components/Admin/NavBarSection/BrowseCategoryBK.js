import React, { useState, useEffect } from "react";
// import MUIMegaNav from "./MUIMegaNav";

const BrowsCategoriesNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [initBrowseCategory, setInitBrowseCategory] = useState(false);
  const [mainmenu, setMainmenu] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const toggleMenuBrowse = () => {
  //   setInitBrowseCategory(!initBrowseCategory);
  // };

  const fetchMainMenu = async () => {
    try {
      const response = await fetch("/main-menu");
      const data = await response.json();
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
      {/* <div className="relative">
        <button
          id="browseCategory"
          onClick={toggleMenuBrowse}
          aria-haspopup="true"
          aria-expanded={initBrowseCategory ? "true" : "false"}
          type="button"
          className="text-sm my-1 relative z-10"
        >
          <p className="text-xs text-left">Browse</p>{" "}
          <h2 className="flex font-semibold justify-between">
            Category{" "}
            <svg
              id="submenu-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="10px"
              viewBox="0 0 512 512"
              className="cursor-pointer ml-3"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </h2>
        </button>
        <ul
          id="submenu1"
          className={`submenu1 ${initBrowseCategory ? "" : "hidden"
            } absolute top-full left-0 bg-white mt-1 rounded-sm shadow-lg z-20`}
        >
          <li>
            <MUIMegaNav />
          </li>
        </ul>
      </div> */}
      <ul className="flex">
        {visibleNames.map((course) => (
          <a href={`/${course.Category}`} key={course.Category}>
            <li className="my-1 py-2 text-gray-600 hover:bg-gray-200 px-3 rounded-2xl text-sm">
              {course.MainMenuName}
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
        {mainmenu.length > visibleNames.length && (
          <ul
            id="submenu"
            className={`submenu ${isOpen ? "" : "hidden"
              } absolute w-60 top-full right-0 bg-white mt-1 mx-2 rounded-sm shadow-lg z-20`}
          >
            {mainmenu.slice(visibleNames.length).map((course) => (
              <li
                className="py-2 text-sm text-start px-4 hover:rounded-sm hover:text-white hover:bg-gradient-to-r from-blue-800 to-blue-600"
                key={course.Category}
              >
                <a className="no-underline" href={`/${course.Category}`}>
                  {course.MainMenuName}
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
