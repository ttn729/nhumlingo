import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const VoiceSlider = ({voiceValue, setVoiceValue}) => {

  const handleChange = (event, newValue) => {
    setVoiceValue(newValue);
  };

  return (
    <div>
      <Typography gutterBottom>Voice Value: {voiceValue}</Typography>
      <Box width="80%">
        <Slider
          value={voiceValue}
          onChange={handleChange}
          min={0}
          max={303}
          step={1}
          valueLabelDisplay="auto"
        />
      </Box>
    </div>
  );
};

export default VoiceSlider;
