import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [passwordHash, setPasswordHash] = useState("");

  const register = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", passwordHash);

    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, passwordHash }),
      });
      if (response.ok) {
        const isAdmin = email === "shahul@hotmail.com"; // Check if the user is an admin based on the email

        if (isAdmin) {
          console.log("Redirecting to admin_homepage...");
          navigate("/browseCategory/cloudComputing"); // Redirect admin to admin_homepage
        } else {
          if (location.pathname === "/browseCategory/cloudComputing") {
            console.log("You are not authorized to access this page.");
          } else {
            const { from } = location.state || {
              from: { pathname: "/homepage" },
            };
            console.log("Redirecting to:", from);
            navigate(from); // Redirect regular user to the previous page or /homepage
          }
        }
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="bg-gray-200 h-screen">
      <div className="sm:w-3/5 lg:w-2/6 rounded-lg shadow-md bg-white mx-auto relative top-20 p-4">
        <div className="top px-3 mt-3 flex justify-between">
          <h2 className=" text-orange-500 text-xl font-medium">
            Let's Get Started
          </h2>
          <img
            class="w-7"
            alt=""
            src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1686587146/img/elearningpop.svg"
          ></img>
        </div>
        <div className="middle p-3">
          <div className="mt-2 mb-3">
            <label className="font-sans py-2">Email</label>
            <input
              placeholder="e.g. sara@gmail.com*"
              className="outline-none my-2 py-2 px-2 w-full rounded-md bg-gray-100"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="data[User][email]"
              id="si_popup_email"
              onfocus="this.placeholder = 'e.g. sara@gmail.com*'"
              onblur="this.placeholder = 'e.g. sara@gmail.com*'"
              autocomplete="off"
              data-gtm-form-interact-field-id="0"
            />
          </div>
          <div>
            <label className="font-sans py-2">Password</label>
            <input
              type="password"
              value={passwordHash}
              onChange={(e) => setPasswordHash(e.target.value)}
              name="data[User][password]"
              className="outline-none my-2 py-2 px-2 w-full rounded-md bg-gray-100"
              placeholder="Enter your Password"
              id="si_popup_passwd"
              onfocus="this.placeholder = 'Enter your Password'"
              onblur="this.placeholder = 'Enter your Password'"
              data-gtm-form-interact-field-id="1"
            />
          </div>
          <div className="mb-4">
            <span class="text-sm text-blue-600 cursor-pointer">
              Forgot Password?
            </span>
          </div>

          <span className="text-xs text-gray-500">
            Please Note:
            <span>By continuing and signing in, you agree to Edureka's </span>
            <span>
              <a
                href="/terms-and-conditions"
                target="_blank"
                className="text-blue-400"
              >
                Terms &amp; Conditions
              </a>
            </span>{" "}
            and{" "}
            <span>
              <a
                href="/privacy-policy"
                target="_blank"
                className="text-blue-400"
              >
                Privacy Policy
              </a>
            </span>
          </span>
          <div>
            <button
              className="bg-orange-400 text-white w-full mt-2 py-2 rounded-md font-body text-xl"
              type="submit"
              onClick={register}
            >
              Sign up
            </button>
          </div>
          <div className="mt-3 flex justify-between">
            <p className="py-2">Already have an account? </p>
            <Link to="/">
              <button
                className="rounded-lg py-3 px-5 font-sans text-sm font-bold text-orange-600 hover:text-orange-600 transition-all hover:bg-orange-100 active:bg-orange-600 disabled:pointer-events-none disabled:shadow-none flex justify-evenly"
                data-ripple-dark="true"
              >
                <p>Log In</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
