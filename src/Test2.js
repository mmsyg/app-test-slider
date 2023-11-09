import React, { useState, useEffect } from 'react';
import SetRight from './SetRight';
import SetLeft from './SetLeft';
import QuestionBar from './QuestionBar';
import QuestionNumber from './QuestionNumber';
import QuizzAnswers from './QuizzAnswers';
import QuizzDescription from './QuizzDescription';

const Component1 = () => <div><QuizzAnswers id={'1'}/></div>;
const Component2 = () => <div>Component 2</div>;
const Component3 = () => <div>Component 3</div>;

const Test = () => {
  const [activeComponent, setActiveComponent] = useState(null);
  const [isClickEnabled, setClickEnabled] = useState(true);

  const handleLiClick = (component) => {
    if (isClickEnabled) {
      setClickEnabled(false);

      setTimeout(() => {
        setActiveComponent(component);

        // Po zakończeniu opóźnienia dla zmiany komponentu i dodatkowego opóźnienia
        // umożliw ponowne kliknięcie
        setTimeout(() => {
          setClickEnabled(true);
        }, 3000);
      }, 3000);
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li onClick={() => handleLiClick('component1')} style={{ pointerEvents: isClickEnabled ? 'auto' : 'none' }}>Toggle Component 1</li>
          <li onClick={() => handleLiClick('component2')} style={{ pointerEvents: isClickEnabled ? 'auto' : 'none' }}>Toggle Component 2</li>
          <li onClick={() => handleLiClick('component3')} style={{ pointerEvents: isClickEnabled ? 'auto' : 'none' }}>Toggle Component 3</li>
        </ul>
      </nav>

      {activeComponent === 'component1' && <Component1 />}
      {activeComponent === 'component2' && <Component2 />}
      {activeComponent === 'component3' && <Component3 />}
    </div>
  );
};

export default Test;
