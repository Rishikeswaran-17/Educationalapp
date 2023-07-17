/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { CircularProgress, Typography, Box } from '@mui/material';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant="determinate"
        size={100}
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" className="text-black dark:text-white">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
export default function CircularWithValueLabel() {
  return <CircularProgressWithLabel value={80} />;
}
