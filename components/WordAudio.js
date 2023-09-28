import React, { useState, useEffect } from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { IconButton, Box, Button } from '@mui/material/';
import { processWords } from './wordProcessor';

function WordAudio() {
  const [word, setWord] = useState('');
  const [wordArray, setWordArray] = useState([]);
  const [audioPlaying, setAudioPlaying] = useState(false);

  useEffect(() => {
    processWords()
      .then((words) => {
        console.log(words);
        setWordArray(words);
        setWord(words[0]);
        console.log(words[0]);
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
    if (!audioPlaying) {
      const speechSynthesis = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(word);

      console.log(speechSynthesis.getVoices().length);

      // You can customize the voice, rate, pitch, and more here
      // utterance.voice = ...;
      // utterance.rate = ...;
      // utterance.pitch = ...;

      utterance.voice = speechSynthesis.getVoices()[112]; // Set the voice
      utterance.rate = 0.75;

      // Play the audio
      speechSynthesis.speak(utterance);

      // Set audioPlaying to true while audio is playing
      setAudioPlaying(true);

      // When audio finishes, set audioPlaying back to false
      utterance.onend = () => {
        setAudioPlaying(false);
      };
    }
  };

  return (
    <Box>
      <Button onClick={handleNextWord} disabled={audioPlaying}>
        Next Word
      </Button>
      <IconButton color="primary" onClick={handleButtonClick} disabled={audioPlaying}>
        <VolumeUpIcon />
      </IconButton>
    </Box>
  );
}

export default WordAudio;
