import React, { createContext, useState, useContext, useEffect } from 'react';

// Tworzenie kontekstu
export const ContrastContext = createContext({
  isContrast: false,
  toggleContrast: () => {}
});

export const ContrastProvider = ({ children }) => {
  const [isContrast, setIsContrast] = useState(false);


  useEffect(() => {
    if (isContrast) {
      document.body.classList.add('contrast-mode');
    } else {
      document.body.classList.remove('contrast-mode');
    }
  }, [isContrast]);

  const toggleContrast = () => {
    setIsContrast(!isContrast);
  };

  return (
    <ContrastContext.Provider value={{ isContrast, toggleContrast }}>
      {children}
    </ContrastContext.Provider>
  );
};
