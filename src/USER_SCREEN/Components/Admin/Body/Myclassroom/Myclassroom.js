import React from "react";
import "./Myclassroom.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Myclassroom = () => {
  const location = useLocation();
  const { pathname } = location;
  const encodedCoursename = pathname.split("/").pop();
  const coursename = decodeURIComponent(encodedCoursename);
  
  return (
    <div>
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 no-padding navbar2">
        <div class="col-lg-8 col-md-7 col-sm-12 col-xs-12 coursetitlelogo">

        {pathname !== "/admin_homepage" && pathname !== "/homepage" ?  
        <h1 class="coursename">
             {coursename}
          </h1> : null}
         
        </div>
        <div id="DIV_1">
          <div id="DIV_2">
            <div id="DIV_3">
              <progressbar id="PROGRESSBAR_4">
                <div id="DIV_5">
                  <bar id="BAR_6">
                    <div id="DIV_7"></div>
                  </bar>
                </div>
              </progressbar>{" "}
              <span id="SPAN_8">4% Completed</span>
            </div>
            <app id="APP-GRADE_9">
              <div id="DIV_10">
                <div id="DIV_11">
                  <button type="button" id="BUTTON_12">
                    <span id="SPAN_13">
                      {" "}
                      <small id="SMALL_14">A</small>
                    </span>{" "}
                    <span id="SPAN_15">
                      {" "}
                      <span id="SPAN_16">Your Current Grade</span>{" "}
                      <span id="SPAN_17">Great, You are upto mark!</span>
                    </span>
                  </button>
                </div>
              </div>
            </app>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myclassroom;
