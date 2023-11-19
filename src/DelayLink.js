import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DelayedLink = ({ to, delay, children }) => {
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setClicked(true);

    setTimeout(() => {
      // Po upływie zadanego opóźnienia, przejdź do ścieżki 'to'
      navigate(to);
    }, delay);
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  );
};
export default DelayedLink;