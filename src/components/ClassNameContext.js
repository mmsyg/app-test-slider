import React, { createContext, useState, useContext } from 'react';

const ClassNameContext = createContext();


export const ClassNameProvider = ({ children }) => {
    const [suffix, setSuffix] = useState('_contrast');
  
    const addSuffixToClassName = (className) => {
      return `${className}${suffix}`;
    };
  
    return (
      <ClassNameContext.Provider value={{ addSuffixToClassName }}>
        {children}
      </ClassNameContext.Provider>
    );
  };
  



export const useClassName = () => {
    const context = useContext(ClassNameContext);
    if (!context) {
      throw new Error('useClassName must be used within a ClassNameProvider');
    }
    return context;
  };
  