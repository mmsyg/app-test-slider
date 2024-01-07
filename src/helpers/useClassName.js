import React, {useContext} from 'react';


export const useClassName = () => {
    const context = useContext(ClassNameContext);
    if (!context) {
      throw new Error('useClassName must be used within a ClassNameProvider');
    }
    return context;
  };
  