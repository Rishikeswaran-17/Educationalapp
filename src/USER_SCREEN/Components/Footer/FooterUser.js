import { Divider } from "@mui/material";
import React from "react";

const FooterUser = () => {
  return (
    <div className="bg-white w-full bottom-0">
      <div className="w-11/12 mx-auto p-10">
        <div className="">
          <img
            class="lazyImages"
            width="155"
            height="48"
            fullbase="true"
            alt="logo"
            src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1688063347/img/Edureka_V_logo.webp"
          />
        </div>
        <div class="grid grid-cols-3 gap-4 mt-10 text-black">
          <div class="row-span-2">
            <div className="uppercase text-sm">
              Trending Certification Courses
            </div>
            <div className="mt-4 text-slate-500">
              <p className="text-sm mb-2">
                DevOps Certification Training Course
              </p>
              <p className="text-sm mb-2">
                AWS Solutions Architect Certification Training Course
              </p>
              <p className="text-sm mb-2">
                Big Data Hadoop Certification Training Course
              </p>
              <p className="text-sm mb-2">
                Tableau Certification Training Course
              </p>
              <p className="text-sm mb-2">
                Data Science with Python Certification Training Course
              </p>
              <p className="text-sm mb-2">
                Selenium Certification Training Course
              </p>
              <p className="text-sm mb-2">PMP Certification Training Course</p>
              <p className="text-sm mb-2">
                RPA using UiPath Certification Training Course
              </p>
              <p className="text-sm mb-2">
                Apache Certification Training Course
              </p>
              <p className="text-sm mb-2">
                Microsoft Power BI Certification Training Course
              </p>
            </div>
          </div>
          <div class="row-span-2">
            <div className="uppercase text-sm">Trending Master Courses</div>
            <div className="mt-4 text-slate-500">
              <p className="text-sm mb-2">
                Data Science Training Masters Program
              </p>
              <p className="text-sm mb-2">DevOps Engineer Masters Program</p>
              <p className="text-sm mb-2">Cloud Architect Masters Program</p>
              <p className="text-sm mb-2">Big Data Architect Masters Program</p>
              <p className="text-sm mb-2">
                AI and Machine Learning Masters Course
              </p>
              <p className="text-sm mb-2">
                Full Stack Web Developer Masters Program Course
              </p>
              <p className="text-sm mb-2">
                Business Intelligence Masters Program
              </p>
              <p className="text-sm mb-2">Data Analytics Masters Program</p>
              <p className="text-sm mb-2">
                Automation Testing Engineer Masters Program
              </p>
              <p className="text-sm mb-2">
                Post Graduate Diploma in Artificial Intelligence Course
              </p>
              <p className="text-sm mb-2">Post Graduate Program in DevOps</p>
            </div>
          </div>
          <div>
            <p class="uppercase text-sm">Edureka for business</p>
            <div className="mt-4 text-slate-500">
              <p className="text-sm mb-2">Corporate Training</p>
              <p className="text-sm mb-2">Partners</p>
            </div>
          </div>
          <div>
            <p class="uppercase text-sm">Download App</p>
            <div className="mt-3">
              <img
                class="lazyImages img-responsive"
                width="200"
                height="60"
                fullbase="true"
                alt=""
                src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1688063347/img/optimized/applestore_img.png"
              />
            </div>
            <div className="mt-3">
              <img
                class="lazyImages img-responsive"
                width="200"
                height="60"
                fullbase="true"
                alt=""
                src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1688063347/img/optimized/playstore_img.png"
              />
            </div>
          </div>
        </div>
      </div>
      <Divider
        sx={{ borderColor: "slategrey", width: "90%", marginX: "auto" }}
      />
      <div className="p-10 w-11/12 mx-auto">
        <div class="grid grid-cols-4 gap-2 text-black">
          <div>
            <p class="uppercase text-sm">Company</p>
            <div className="mt-4 text-slate-500">
              <p className="text-sm mb-2">About</p>
              <p className="text-sm mb-2">News & Media</p>
              <p className="text-sm mb-2">Reviews</p>
              <p className="text-sm mb-2">Contact Us</p>
              <p className="text-sm mb-2">Locations</p>
              <p className="text-sm mb-2">Terms & Conditions</p>
              <p className="text-sm mb-2">Privacy Policy</p>
            </div>
          </div>
          <div>
            <p class="uppercase text-sm">Work with us</p>
            <div className="mt-4 text-slate-500">
              <p className="text-sm mb-2">Careers</p>
              <p className="text-sm mb-2">Become an Instructor</p>
              <p className="text-sm mb-2">Become an Affiliate</p>
              <p className="text-sm mb-2">Become a Partner</p>
              <p className="text-sm mb-2">Hire from Edureka</p>
            </div>
          </div>
          <div>
            <p class="uppercase text-sm">Resources</p>
            <div className="mt-4 text-slate-500">
              <p className="text-sm mb-2">Blog</p>
              <p className="text-sm mb-2">Community</p>
              <p className="text-sm mb-2">Videos</p>
              <p className="text-sm mb-2">Webinars</p>
            </div>
          </div>
          <div>
            <p class="uppercase text-sm">SiteMaps</p>
            <div className="mt-4 text-slate-500">
              <p className="text-sm mb-2">Sitemap</p>
              <p className="text-sm mb-2">Blog Sitemap</p>
              <p className="text-sm mb-2">City Sitemap</p>
              <p className="text-sm mb-2">Community Sitemap</p>
            </div>
          </div>
        </div>
      </div>
      <Divider
        sx={{ borderColor: "slategrey", width: "90%", marginX: "auto" }}
      />
      <div className="p-10 w-10/12 mx-auto flex justify-between">
        <div className="text-slate-500 cursor-pointer">
          &#169;{" "}
          <a href="https://www.ceruleanedu.com/">
            2023 Cerulean Education Solutions Pvt. Ltd. All rights Reserved{" "}
          </a>
        </div>
        <div className="flex justify-evenly">
          <a href="#fb" className="ml-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="#ffffff"
                d="M767.965 0.213l-132.79-0.213c-149.185 0-245.595 98.913-245.595 252.008v116.192h-133.514c-11.537 0-20.88 9.353-20.88 20.891v168.35c0 11.537 9.353 20.88 20.88 20.88h133.514v424.8c0 11.537 9.343 20.88 20.88 20.88h174.198c11.537 0 20.88-9.353 20.88-20.88v-424.8h156.109c11.537 0 20.88-9.343 20.88-20.88l0.064-168.35c0-5.54-2.205-10.845-6.115-14.765s-9.236-6.125-14.776-6.125h-156.163v-98.498c0-47.342 11.282-71.375 72.952-71.375l89.453-0.032c11.527 0 20.869-9.353 20.869-20.88v-156.322c0-11.516-9.332-20.859-20.848-20.88z"
              ></path>
            </svg>
          </a>
          <a href="#tw" className="ml-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="#ffffff"
                d="M1024 194.496c-38.080 16.704-78.656 27.776-120.96 33.152 43.52-25.984 76.736-66.816 92.352-116.032-40.576 24.192-85.376 41.28-133.12 50.816-38.528-41.024-93.44-66.432-153.344-66.432-116.224 0-209.792 94.336-209.792 209.984 0 16.64 1.408 32.64 4.864 47.872-174.528-8.512-328.96-92.16-432.704-219.584-18.112 31.424-28.736 67.392-28.736 106.112 0 72.704 37.44 137.152 93.248 174.464-33.728-0.64-66.816-10.432-94.848-25.856 0 0.64 0 1.472 0 2.304 0 102.016 72.768 186.752 168.192 206.272-17.088 4.672-35.712 6.912-55.040 6.912-13.44 0-27.008-0.768-39.744-3.584 27.2 83.136 104.384 144.256 196.16 146.24-71.424 55.872-162.112 89.536-260.288 89.536-17.216 0-33.728-0.768-50.24-2.88 92.992 59.968 203.2 94.208 322.048 94.208 386.304 0 597.504-320 597.504-597.376 0-9.28-0.32-18.24-0.768-27.136 41.664-29.568 76.672-66.496 105.216-108.992z"
              ></path>
            </svg>
          </a>
          <a href="#li" className="ml-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 17.378 17.378"
            >
              <path
                fill="#ffffff"
                data-name="Path 24540"
                d="M15.806,0H1.572A1.572,1.572,0,0,0,0,1.572V15.806a1.572,1.572,0,0,0,1.572,1.572H15.806a1.572,1.572,0,0,0,1.572-1.572V1.572A1.572,1.572,0,0,0,15.806,0ZM5.377,15.005a.457.457,0,0,1-.457.457H2.973a.457.457,0,0,1-.457-.457V6.842a.457.457,0,0,1,.457-.457H4.92a.457.457,0,0,1,.457.457ZM3.946,5.615A1.85,1.85,0,1,1,5.8,3.765,1.85,1.85,0,0,1,3.946,5.615Zm11.608,9.427a.421.421,0,0,1-.421.421h-2.09a.421.421,0,0,1-.421-.421V11.213c0-.571.168-2.5-1.493-2.5-1.288,0-1.549,1.322-1.6,1.916v4.416a.421.421,0,0,1-.421.421H7.087a.421.421,0,0,1-.421-.421V6.805a.421.421,0,0,1,.421-.421H9.108a.421.421,0,0,1,.421.421v.712a2.869,2.869,0,0,1,2.7-1.27c3.346,0,3.327,3.126,3.327,4.844v3.951Z"
              ></path>
            </svg>
          </a>
          <a href="#yt" className="ml-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="#ffffff"
                d="M991.8 270.9c-11.6-43-45.2-76.5-88.2-88.2-78.2-21.4-391.3-21.4-391.3-21.4s-313.1 0-391.3 20.6c-42.9 12.2-76.3 46-88.2 89-20.6 78.3-20.6 240.6-20.6 240.6s0 163.1 20.6 240.6c11.6 43 45.2 76.5 88.2 88.2 79.1 21.4 391.3 21.4 391.3 21.4s313 0 391.3-20.6c43-11.6 76.5-45.2 88.2-88.2 20.6-78.3 20.6-240.6 20.6-240.6s.8-163.1-20.6-241.4zM412.6 661.4V361.6L673 511.5 412.6 661.4z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <Divider
        sx={{ borderColor: "slategrey", width: "90%", marginX: "auto" }}
      />
    </div>
  );
};

export default FooterUser;
