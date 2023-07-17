import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [isDropOpen, setIsDropOpen] = useState(false);

  const toggleAvatarDrops = () => {
    setIsDropOpen(!isDropOpen);
  };

  useEffect(() => {
    const scrollFunction = () => {
      const mybutton = document.getElementById("btn-back-to-top");
      if (mybutton) {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }
    };

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="bg-slate-100">
      <button
        type="button"
        className="fixed bottom-10 right-10 bg-blue-800 text-white font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:text-blue-800 focus:text-blue-800 active:text-blue-800 hover:bg-white hover:shadow-lg focus:bg-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-white active:shadow-lg transition duration-150 ease-in-out"
        id="btn-back-to-top"
        onClick={backToTop}
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          className="w-12 h-12 p-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
          ></path>
        </svg>
      </button>
      {/* Navbar 1 Starts */}
      <nav className="bg-gradient-to-r from-blue-800 to-blue-600 flex">
        <div className="container max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a className="" href="/CCC">
              <img
                className="h-8"
                style={{ minHeight: "10px" }}
                src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1687185219/img/Edureka_V_W_logo.webp"
                alt="logo"
              />
            </a>
            <div className="md:hidden">
              <div className="flex w-3/6 h-3/4 py-1">
              <input
                className="w-11/12 py-1 px-2 outline-none rounded-l-md"
                placeholder="search..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width="25"
                height="25"
                className="text-white w-12 h-full bg-orange-400 my-auto py-2 items-center rounded-r-md hover:bg-gray-300 hover:text-orange-400"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            </div>
            
          </div>
          <div>
            <div className="text-white">
              <a href="/admin_homepage" className="p-2 items-center font-sans">
                My Courses
              </a>
            </div>

            <div className="relative">
              <button
                className=""
                id="avatar_drops"
                onClick={toggleAvatarDrops}
                aria-haspopup="true"
                aria-expanded={isDropOpen ? "true" : "false"}
                type="button"
              >
                <p className="py-2 items-center text-white flex">
                  Shahul
                  <img
                    className="h-10 rounded-full pl-2"
                    src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                    alt="Workflow"
                  />
                </p>
              </button>
              <ul
                id="submenu"
                className={`submenu ${isDropOpen ? "" : "hidden"
                  } absolute w-60 top-full right-0 bg-white mt-1 mx-2 rounded-sm shadow-lg z-20`}
              >
                <li className="py-2 text-sm text-start px-4 hover:rounded-sm hover:text-white hover:bg-gradient-to-r from-blue-800 to-blue-600">
                  <a className="no-underline" href="/admin_homepage">
                    My Profile
                  </a>
                </li>
                <li className="py-2 text-sm text-start px-4 hover:rounded-sm hover:text-white hover:bg-gradient-to-r from-blue-800 to-blue-600">
                  <a className="no-underline" href="#b">
                    My Orders
                  </a>
                </li>
                <li className="py-2 text-sm text-start px-4 hover:rounded-sm hover:text-white hover:bg-gradient-to-r from-blue-800 to-blue-600">
                  <a className="no-underline" href="#b">
                    My Wallet
                  </a>
                </li>
                <li className="py-2 text-sm text-start px-4 hover:rounded-sm hover:text-white hover:bg-gradient-to-r from-blue-800 to-blue-600">
                  <a className="no-underline" href="#b">
                    My Wishlist
                  </a>
                </li>
                <li className="py-2 text-sm text-start px-4 hover:rounded-sm hover:text-white hover:bg-gradient-to-r from-blue-800 to-blue-600">
                  <a className="no-underline" href="#b">
                    Activity Stream
                  </a>
                </li>
                <li className="py-2 text-sm text-start px-4 hover:rounded-sm hover:text-white hover:bg-gradient-to-r from-blue-800 to-blue-600">
                  <a className="no-underline" href="#b">
                    Change Password
                  </a>
                </li>
                <li className="py-2 text-sm text-start px-4 hover:rounded-sm hover:text-white hover:bg-gradient-to-r from-blue-800 to-blue-600">
                  <a className="no-underline" href="#b">
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
