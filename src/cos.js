import React, { useState } from 'react';


const AnimatedSquare = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);
  };

  return (
    <div>
      <button onClick={startAnimation}>Start Animację</button>
      <div className={`square ${isAnimating ? 'animate' : ''}`}></div>
    </div>
  );
};

export default AnimatedSquare;
