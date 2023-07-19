import React from 'react';
import './GettingStarted.css';
import { Card, CardContent, Grid, Container } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const GettingStarted = () => {
  return (
    <Container classname = 'gettingstarted' maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '10vh', marginTop : '-24%', marginRight: '910px',
    '@media only screen and (min-width: 768px) and (max-width: 1199px)': {
      // Media query styles for viewport width between 768px and 1199px
      marginTop: '-49%',
      width:'1500px',
      marginRight: '71px',
    }
  }}>
      <Card>
        <CardContent>
          <div className="curriculumtabheadsec hidden-xs hidden-sm">
            <PowerSettingsNewIcon />
            <span className="tabheading">Getting Started</span>
          </div>
          <section className="gettingstrtedmain">
            <h3 className="letsbegin">Let's Begin to Learn!</h3>
            <span className="hiuser">Hi shahul,</span>
            <p className="introtxt">
              Before embarking on your learning journey with Snowflake, let us walk you through few important features of our LMS, which will guide you towards the optimum path of course completion.
            </p>
            <article className="child">
              <h4 className="titlesec">
                <i className="icon-Pointers"></i>
                <span className="titletxt">Curriculum Tracker</span>
              </h4>
              <p className="desc">
                This can be seen on My Classroom page against the course card, and is highlighted in the Course Content tab that you see in your LMS. All your important events - Assignments, Case Studies, Quiz and Project submission deadlines will be notified here.
              </p>
            </article>
            <article className="child">
              <h4 className="titlesec">
                <i className="icon-Pointers"></i>
                <span className="titletxt">Grade</span>
              </h4>
              <p className="desc">
                Your grade is calculated basis timely submissions of Assignments, Case Studies, Quizzes, and Project. Make sure you do not miss out on any!
              </p>
            </article>
            <article className="child">
              <h4 className="titlesec">
                <i className="icon-Pointers"></i>
                <span className="titletxt">Class Schedule</span>
              </h4>
              <p className="desc">
                Keep track of all the classes, along with your feedbacks!
              </p>
            </article>
          </section>
        </CardContent>
      </Card>
    </Container>
  );
};

export default GettingStarted;
