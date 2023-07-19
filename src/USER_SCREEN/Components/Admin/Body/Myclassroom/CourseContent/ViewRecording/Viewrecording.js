import React, { useEffect, useRef, useState } from 'react';
import './Viewrecording.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import PhoneIcon from '@mui/icons-material/Phone';
import RateReviewIcon from '@mui/icons-material/RateReview';
import Tooltip from '@mui/material/Tooltip';
import { useLocation } from 'react-router-dom';

const Viewrecording = () => {
  const location = useLocation();
  const { pathname } = location;
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [coursecontent, setCoursecontent] = useState([]);
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false); // New state to track video load status

  useEffect(() => {
    fetchcoursecontent();
  }, []);

  const fetchcoursecontent = async () => {
    try {
      const response = await fetch("/get-courseContent");
      const data = await response.json();
      console.log("datacoursecontent =", data);
      setCoursecontent(data.recordset);
      console.log("datacoursecontent =", data);
    } catch (error) {
      console.log(error);
    }
  };

  let sliceStart, sliceEnd;

  if (pathname.includes("/admin_homepage")) {
    sliceStart = pathname.lastIndexOf("/page/") + 6;
    sliceEnd = pathname.lastIndexOf("/page/") + 7;
  } else if (pathname.includes("/homepage")) {
    sliceStart = pathname.lastIndexOf("/page/") + 6;
    sliceEnd = pathname.lastIndexOf("/page/") + 7;
  }

  const matchingcoursecontent = coursecontent.find(
    (course) => String(pathname.slice(sliceStart, sliceEnd)) === String(course.ChapterID)
  );

  console.log(`pathname.slice(${sliceStart}, ${sliceEnd}):`, pathname.slice(sliceStart, sliceEnd));
  console.log("matchingcoursecontent:", matchingcoursecontent);

  console.log("pathname.slice(36,37):", pathname.slice(36, 37));
  console.log("matchingcoursecontent:", matchingcoursecontent);

  const filePath = matchingcoursecontent?.FilePath;
  const videoPath = process.env.PUBLIC_URL + filePath?.substring(filePath.lastIndexOf("\\Contents"));

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
    console.log("ContentID:", matchingcoursecontent?.ContentID);
  };

  const handleVideoEnd = () => {
    console.log('Video fully viewed');
    console.log('ContentID:', matchingcoursecontent?.ContentID);
    sessionStorage.setItem(`videoViewed_${matchingcoursecontent?.ContentID}`, 'true');
    console.log('Viewed status stored in session storage:', sessionStorage.getItem(`videoViewed_${matchingcoursecontent?.ContentID}`));
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement && videoLoaded) {
      videoElement.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [videoRef, videoLoaded]);
  
  
  
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge color="error">
            <InsertCommentIcon />
          </Badge>
        </IconButton>
        <p>Discussion Forum</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" color="inherit">
          <Badge color="error">
            <PhoneIcon />
          </Badge>
        </IconButton>
        <p>Help</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <RateReviewIcon />
        </IconButton>
        <p>Notes</p>
      </MenuItem>
    </Menu>
  );
  
  return (
    <>
      {matchingcoursecontent && (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar sx={{ backgroundColor:'white',color:"#3a5680" }}>
              <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
                {matchingcoursecontent.Description}
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Tooltip title="Disussion Forum">
                  <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge color="error">
                      <InsertCommentIcon />
                    </Badge>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Help">
                  <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                    <Badge color="error">
                      <PhoneIcon />
                    </Badge>
                  </IconButton>
                </Tooltip>
                <Tooltip title="Notes">
                  <IconButton size="large" edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={handleProfileMenuOpen} color="inherit">
                    <RateReviewIcon />
                  </IconButton>
                </Tooltip>
              </Box>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton size="large" aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
                  <MoreIcon />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
          {renderMenu}
        </Box>
      )}
      {matchingcoursecontent && (
        <video ref={videoRef}   onLoadedData={() => handleVideoLoaded(matchingcoursecontent.ContentID)} controls  className="videoclass">
          <source src={videoPath} />
          Your browser does not support the video tag.
        </video>
      )}
    </>
  );
}

export default Viewrecording;