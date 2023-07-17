import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Details from './Details';

import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import MenuIcon from '@mui/icons-material/Menu';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


function TabPanel(props) {
     const { children, value, index, ...other } = props;

     return (
          <div
               role="tabpanel"
               hidden={value !== index}
               id={`vertical-tabpanel-${index}`}
               aria-labelledby={`vertical-tab-${index}`}
               {...other}
          >
               {value === index && (
                    <Box sx={{ p: 2 }}>
                         <Typography>{children}</Typography>
                    </Box>
               )}
          </div>
     );
}

TabPanel.propTypes = {
     children: PropTypes.node,
     index: PropTypes.number.isRequired,
     value: PropTypes.number.isRequired,
};

function a11yProps(index) {
     return {
          id: `vertical-tab-${index}`,
          'aria-controls': `vertical-tabpanel-${index}`,
     };
}

const Courses = () => {
     const [value, setValue] = useState(0);

     const handleChange = (event, newValue) => {
          setValue(newValue);
     };

     return (
          <Box sx={{ flexGrow: 1, display: 'flex', columnGap: 3, height: 'fit', width: '95%', marginX: 'auto' }}>
               <div>
                    <div className='mx-auto'>
                         <div className="flex items-center w-11/12 mx-auto">
                              <input
                                   placeholder="search"
                                   className="bg-neutral-100 outline-none rounded-full px-3 m-2 py-1"
                              />
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="16"
                                   height="16"
                                   fill="currentColor"
                                   className="bi bi-search text-slate-400 right-10 z-10 relative"
                                   viewBox="0 0 16 16"
                              >
                                   <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                              </svg>
                         </div>
                    </div>
                    <Tabs
                         orientation="vertical"
                         variant="scrollable"
                         value={value}
                         onChange={handleChange}
                         aria-label="Vertical tabs example"
                         sx={{ marginBottom: 10 }}
                         className=""
                    >
                         <Tab icon={<PowerSettingsNewIcon />} iconPosition="start" label="Getting Started" {...a11yProps(0)} className='active:bg-white hover:bg-white hover:text-blue-700 focus:bg-white text-blue-800' />
                         <Tab icon={<MenuIcon />} iconPosition="start" label="Course Content" {...a11yProps(1)} className='active:bg-white focus:bg-white hover:bg-white hover:text-blue-700 text-blue-800' />
                         <Tab icon={<PlayCircleOutlineIcon />} iconPosition="start" label="Pre-Recorded Classes" {...a11yProps(2)} className='active:bg-white hover:bg-white hover:text-blue-700 focus:bg-white text-blue-800' />
                         <Tab icon={<VideocamOutlinedIcon />} iconPosition="start" label="Class Recordings" {...a11yProps(3)} className='active:bg-white focus:bg-white hover:bg-white hover:text-blue-700 text-blue-800' />
                         <Tab icon={<LibraryBooksIcon />} iconPosition="start" label="Personal Library" {...a11yProps(4)} className='active:bg-white focus:bg-white hover:bg-white hover:text-blue-700 text-blue-800' />
                    </Tabs>
               </div>

               {/* ------- */}
               <div className='bg-white max-h-fit mb-10'>
                    <Details value={value} />
               </div>
               {/* ------- */}
               <div className='bg-white w-1/3 h-fit'>
                    Hello
               </div>
          </Box>
     );
};

export default Courses;
