import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FontSizeProvider } from './components/FontSizeContext'; // Import the provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FontSizeProvider> {/* Wrap App with FontSizeProvider */}
      <App />
    </FontSizeProvider>
  </React.StrictMode>
);
