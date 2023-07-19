import React from 'react';
import './MyclassContent.css'
import SearchIcon from '@mui/icons-material/Search';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import ArticleIcon from '@mui/icons-material/Article';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { useLocation } from 'react-router-dom';
const MyclassContent = () => {
  const location = useLocation();
  const { pathname } = location;
  const encodedCoursename = pathname.split("/").pop();
  const coursename = decodeURIComponent(encodedCoursename);
  return (
    <>
    <div class="container">
  <div class="row">
    <div class="col-lg-2 col-md-2 col-sm-3 col-xs-3 no-padding left-nav-curriculum">
      <div class="curriculumsearchsec">
        <input class="coursecurrisearch" placeholder="Search Content" />
        <a href="/dsaw" class="searchicon">
        <SearchIcon />
        </a>
      </div>
      <ul class="nav nav-tabs nav-stacked curriculumleftnav" role="tablist">
        <li routerlinkactive="active" id="Getting Started" class="linkclass">
          <a class = 'taga' data-toggle="tab" role="tab" href={`${location.pathname.startsWith('/homepage') ? '/homepage' : '/user_homepage'}/my-classroom/gettingstarted/${coursename}`}> {/* {`admin_homepage/my-classroom/gettingstarted/${course.coursename}`} */}
          {/* {`${location.pathname.startsWith('/homepage') ? '/homepage' : '/admin_homepage'}/my-classroom/gettingstarted/${coursename}`} */}
          <PowerSettingsNewIcon /> Getting Started</a>
          
        </li>
        <li routerlinkactive="active" id="Course Content" class="linkclass">
          <a class = 'taga' data-toggle="tab" role="tab" href= {`${location.pathname.startsWith('/homepage') ? '/homepage' : '/user_homepage'}/my-classroom/coursecontent/page/1/${coursename}`}> {/* {`admin_homepage/my-classroom/coursecontent/page/:page/${course.coursename}`} */}
            {/* {`${location.pathname.startsWith('/homepage') ? '/homepage' : '/admin_homepage'}/my-classroom/coursecontent/page/:page/${coursename}`} */}
            <ArticleIcon /> Course Content</a>
        </li>
        <li routerlinkactive="active" id="Pre-recorded Classes" class="linkclass">
          <a class = 'taga' data-toggle="tab" role="tab" href={`${location.pathname.startsWith('/homepage') ? '/homepage' : '/admin_homepage'}/my-classroom/LiveSession/${coursename}`}>
           {/* {`${location.pathname.startsWith('/homepage') ? '/homepage' : '/admin_homepage'}/my-classroom/LiveSession/page/:page/${coursename}`} */}
           <RadioButtonCheckedIcon /> Live Session</a>
        </li>
        <li routerlinkactive="active" id="Pre-recorded Classes" class="linkclass">
          <a class = 'taga' data-toggle="tab" role="tab" href="/my-classroom/microsoft-certified-azure-solution-architect-certification-training/prerecordedclasses?courseId=1751&amp;fromMasterCourse=0">
            <PlayCircleIcon /> Pre-recorded Classes</a>
        </li>
        <li routerlinkactive="active" id="Pre-requisites" class="linkclass">
          <a class = 'taga' data-toggle="tab" role="tab" href="/my-classroom/microsoft-certified-azure-solution-architect-certification-training/coursecontent/Prerequisites?courseId=1751&amp;fromMasterCourse=0">
            <ArticleIcon /> Pre-requisites</a>
        </li>
        <li routerlinkactive="active" id="Class Recordings" class="linkclass">
          <a class = 'taga' data-toggle="tab" role="tab" href="/my-classroom/microsoft-certified-azure-solution-architect-certification-training/recordedclasses?courseId=1751&amp;fromMasterCourse=0">
            <VideocamOutlinedIcon /> Class Recordings</a>
        </li>
        <li routerlinkactive="active" class="linkclass">
          <a class = 'taga'data-toggle="tab" role="tab" href="/my-classroom/microsoft-certified-azure-solution-architect-certification-training/personallibrary?courseId=1751&amp;fromMasterCourse=0">
            <LibraryBooksOutlinedIcon /> Personal Library</a>
        </li>
      </ul>
    </div>
  </div>
</div>
</>
  )
}

export default MyclassContent

