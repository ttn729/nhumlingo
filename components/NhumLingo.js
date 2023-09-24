'use client'
import React from 'react';
import WordAudio from './WordAudio'; // Import your WordAudio component
import TextBox from './TextBox'; // Import your TextBox component

const NhumLingo = () => {
    const handleSend = (message) => {
        // Handle the message submission logic here
        console.log(`Sending message: ${message}`);
    };

    return (
        <div>
            <h1>NhumLingo Pronunciation</h1>
             <WordAudio />
            <TextBox onSend={handleSend} />
        </div>
    );
};

export default NhumLingo;
