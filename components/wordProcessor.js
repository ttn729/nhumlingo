// wordProcessor.js
export const processWords = async () => {
    try {
      const response = await fetch('/words.txt');
      const text = await response.text();
  
      // Split the text into an array of words (assuming words are separated by spaces or newlines)
      const words = text.split(/\s+/);
  
      return words;
    } catch (error) {
      console.error('Error fetching or processing words:', error);
      return [];
    }
  };
  