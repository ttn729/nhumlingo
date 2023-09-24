import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const RateSlider = ({rateValue, setRateValue}) => {
  const handleChange = (event, newValue) => {
    setRateValue(newValue);
  };

  return (
    <div>
      <Typography gutterBottom>Rate Value: {rateValue.toFixed(1)}</Typography>
      <Box width="80%">
        <Slider
          value={rateValue}
          onChange={handleChange}
          min={0.1}
          max={10}
          step={0.1}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => value.toFixed(1)}
        />
      </Box>
    </div>
  );
};

export default RateSlider;
