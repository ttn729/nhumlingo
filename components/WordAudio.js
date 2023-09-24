'use client'
import React, { useState } from 'react';

function WordAudio() {
  const [word, setWord] = useState('');
  const [audioSrc, setAudioSrc] = useState('');

  const handleButtonClick = () => {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(word);

    // You can customize the voice, rate, pitch, and more here
    // utterance.voice = ...;
    // utterance.rate = ...;
    // utterance.pitch = ...;

    utterance.voice = speechSynthesis.getVoices()[150]; // Set the voice
    utterance.pitch = 10.0; // Set the pitch

    // Play the audio
    speechSynthesis.speak(utterance);

    // Populate the audio player with the audio data
    setAudioSrc(URL.createObjectURL(new Blob([new Uint8Array([])], { type: 'audio/wav' })));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={handleButtonClick}>Play Audio</button>
    </div>
  );
}

export default WordAudio;
