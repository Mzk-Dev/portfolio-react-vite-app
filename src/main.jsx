import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/portfolio-react-vite-app/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
