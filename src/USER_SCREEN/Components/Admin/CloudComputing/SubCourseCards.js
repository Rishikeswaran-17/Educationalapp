import React, { useState } from "react";
import "./CloudComputing.css";
import "./SubCourseCards.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Button from '@mui/material/Button';

const SubCourseCards = ({
  subcourseid,
  image,
  subcoursename,
  enrolledcustomers,
  sessionmodecategory,
  classmodecategory,
  batchstartdate,
  syllabus,
  coursecompletionrate
}) => {
  const [value, setValue] = useState(2);
  // Split the syllabus string into an array of lines using comma as a delimiter
  const syllabusLines = syllabus.split(',');

  // Calculate remaining days
  const currentDate = new Date();
  const startDate = new Date(batchstartdate);
  const remainingDays = Math.ceil((startDate - currentDate) / (1000 * 60 * 60 * 24));

  return (
    <div class="course-col mobile-border">
      <a
        class="clp-course-tile-link giTrackElementClpV2"
        data-id="1981"
        data-title="AWS Solutions Architect Certification Training Course"
        data-item-variant="live"
        aria-label="Certification : AWS Solutions Architect Certification Training Course"
        data-eventaction="Certification : AWS Solutions Architect Certification Training Course"
        href="/aws-certification-training"
        data-coursetitle="AWS Solutions Architect Certification Training Course"
        data-gi-action="Cloud Computing-AWS Solutions Architect Certification Training Course-Certification Click"
        data-gi-label="Card Position 1;"
        data-gi-category=""
        data-gi-label-expanded="true"
      >
        <div class="clp-course-tile">
          <Card sx={{ maxWidth: "300px" }}>
            <CardMedia
              sx={{ height: "160px" }}
              image={image}
              title="green iguana"
            />
            <CardContent >
              <Typography gutterBottom variant="h6" component="div" className="htag">
                {subcoursename}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <ul class="highlights text-xs">
                  <li>
                    <ion-icon name="person-circle-outline"></ion-icon>
                    <span className="ml-1">{enrolledcustomers} Enrolled Learners</span>
                  </li>
                  <li>
                    <ion-icon name="calendar"></ion-icon>
                    <span className="ml-1">{sessionmodecategory}</span>
                  </li>
                  <li class="hidden-xs">
                    <ion-icon name="videocam"></ion-icon>
                    <span className="ml-1">{classmodecategory}</span>{" "}
                  </li>
                </ul>
              </Typography>
              <div class="reviewstitle hidden-xs mt-2">
                Reviews
              </div>
              <div class="reviews-stars">
                <Rating
                  className="stars mt-1"
                  name="read-only"
                  value={value}
                  readOnly
                />
                <span class="rating ml-2 py-1">4.4</span>
                <span class="total-reviews text-xs ml-1 py-1">(59450)</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </a>
      <div className="hoverCard">
        {/* <a
          href="/aws-certification-training"
        > */}
        <span class="course-completion-rate ">
          {coursecompletionrate}% - Course completion rate{" "}
          <img
            class="lazyImages"
            style={{ minHeight: "10px" }}
            fullbase="true"
            alt="tick"
            src="https://d1jnx9ba8s6j9r.cloudfront.net/imgver.1687337229/img/green-tick.svg"
          />
        </span>
        <label>Next batch</label>
        <span class="next-batch">
          <span class="value">In {remainingDays} days</span>
          <span class="text"> {batchstartdate}</span>
        </span>
        <label>What will I learn?</label>
        <ul className="text-sm font-sans">
          <li>{syllabusLines[0]}</li>
          <li>{syllabusLines[1]}</li>
          <li>{syllabusLines[2]}</li>
        </ul>
        <Button variant="outlined" className="w-full mx-auto hover:text-white">
          <a href={`/${subcourseid}`} class="view-details">
            VIEW DETAILS
          </a>
        </Button>
        {/* </a> */}
      </div>
    </div>
  );
};
export default SubCourseCards;