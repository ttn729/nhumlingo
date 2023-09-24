'use client'
import React, { useState, useEffect } from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { IconButton, Box, Button } from '@mui/material/';
import { processWords } from './wordProcessor';
import PitchSlider from './PitchSlider';
import RateSlider from './RateSlider';
import VoiceSlider from './VoiceSlider';


function WordAudio() {
  const [word, setWord] = useState('');
  const audioSrc = URL.createObjectURL(new Blob([new Uint8Array([])], { type: 'audio/wav' }));
  const [wordArray, setWordArray] = useState([]);

  const [pitchValue, setPitchValue] = useState(1.0); // Initial pitch value
  const [rateValue, setRateValue] = useState(1.0); // Default rate value
  const [voiceValue, setVoiceValue] = useState(0); // Default voice value



  useEffect(() => {
    processWords()
      .then((words) => {
        console.log(words);
        setWordArray(words);
        setWord(words[0]);
        console.log(words[0])
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleNextWord = () => {
    const currentIndex = wordArray.indexOf(word);

    if (currentIndex !== -1) {
      // Calculate the index of the next word, looping back to the beginning if at the end
      const nextIndex = (currentIndex + 1) % wordArray.length;
      setWord(wordArray[nextIndex]);
      console.log(wordArray[nextIndex]);
    }
  };

  const handleButtonClick = () => {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(word);

    console.log(speechSynthesis.getVoices().length)

    // You can customize the voice, rate, pitch, and more here
    // utterance.voice = ...;
    // utterance.rate = ...;
    // utterance.pitch = ...;
    console.log("Pitch value", pitchValue);

    utterance.voice = speechSynthesis.getVoices()[voiceValue]; // Set the voice
    utterance.pitch = pitchValue; // Set the pitch
    utterance.rate = rateValue;

    console.log(voiceValue, typeof voiceValue);
    console.log(pitchValue, typeof pitchValue);
    console.log(rateValue, typeof rateValue);




    // Play the audio
    speechSynthesis.speak(utterance);
  };

  return (
    <Box>
      <Button onClick={handleNextWord}>
        Next Word
      </Button>
      <IconButton
        color="primary"
        onClick={handleButtonClick}
      >
        <VolumeUpIcon />
      </IconButton>

      <PitchSlider pitchValue={pitchValue} setPitchValue={setPitchValue} />
      <RateSlider rateValue={rateValue} setRateValue={setRateValue} />
      <VoiceSlider voiceValue={voiceValue} setVoiceValue={setVoiceValue} />
    </Box>

  );
}

export default WordAudio;
