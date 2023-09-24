import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const PitchSlider = ({pitchValue, setPitchValue}) => {
  const handleChange = (event, newValue) => {
    setPitchValue(newValue);
  };

  return (
    <div>
      <Typography gutterBottom>Pitch Value: {pitchValue.toFixed(2)}</Typography>
      <Box width="80%">
        <Slider
          value={pitchValue}
          onChange={handleChange}
          min={0}
          max={2}
          step={0.01}
          valueLabelDisplay="auto"
          valueLabelFormat={(value) => value.toFixed(2)}
        />
      </Box>
    </div>
  );
};

export default PitchSlider;
