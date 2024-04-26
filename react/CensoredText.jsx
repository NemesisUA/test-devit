import { useState } from 'react';

function CensoredText({ badWords, children }) {
  const [showOriginal, setShowOriginal] = useState(false);

  const censorText = (str) => {
    let censoredText = str;
    badWords.forEach((word) => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      censoredText = censoredText.replace(regex, '*'.repeat(word.length));
    });
    return censoredText;
  };

  return (
    <p
      onClick={() => setShowOriginal(!showOriginal)}
      style={{ cursor: 'pointer', color: `${showOriginal ? 'gray' : 'black'}` }}>
      {showOriginal ? children : censorText(children)}
    </p >
  );
}

export default CensoredText;