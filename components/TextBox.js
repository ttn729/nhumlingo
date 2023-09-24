'use client'
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TextBox = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = () => {
    if (message.trim() !== '') {
      onSend(message);
      setMessage('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendClick();
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <TextField
        label="Type your message"
        variant="outlined"
        fullWidth
        value={message}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      
      <Button
        variant="contained"
        color="primary"
        onClick={handleSendClick}
        style={{ marginLeft: '8px' }}
      >
        Send
      </Button>
    </div>
  );
};

export default TextBox;
