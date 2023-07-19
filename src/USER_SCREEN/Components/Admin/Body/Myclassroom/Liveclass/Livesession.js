import React from 'react';
import './Livesession.css';
import Button from '@mui/material/Button';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { useLocation } from 'react-router-dom';

const Livesession = () => {
  const location = useLocation();
  const { pathname } = location;
  const encodedCoursename = pathname.split("/").pop();
  const coursename = decodeURIComponent(encodedCoursename);
  return (
    <div className="card cardelement10">
      <div className="mt-10 text-center">
        <h2 className='headingtag'>Hi Shahul,</h2>
        </div>
           <p className='ptag'>
This space is reserved for your Live class. 
You can access to Snowflake’s Live class.
            </p>
              {/* {`${location.pathname.startsWith('/homepage') ? '/homepage' : '/admin_homepage'}/my-classroom/LiveSession/join/${coursename}`} */}
            <Button
  href={`${location.pathname.startsWith('/homepage') ? '/homepage' : '/admin_homepage'}/my-classroom/LiveSession/join/${coursename}`}
  sx={{ bgcolor: 'inherit', marginLeft: 35, '&:hover': { bgcolor: '#1976D2', color: 'white' } }}
  variant="outlined"
  endIcon={<RadioButtonCheckedIcon />}
>
  Join the session
</Button>

    </div>
  )
}

export default Livesession
