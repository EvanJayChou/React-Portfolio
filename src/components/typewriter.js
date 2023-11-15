import React, { useEffect, useState } from 'react';

const Typewriter = ({ textToType, speed, id }) => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < textToType.length) {
        setText(prevText => prevText + textToType.charAt(index));
        setIndex(prevIndex => prevIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, speed); 

    return () => clearInterval(intervalId); 
  }, [index, textToType, speed]);

  return (
    <div id={id}>
      {text}
    </div>
  );
};

export default Typewriter;


