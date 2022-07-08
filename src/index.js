import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MoralisProvider } from 'react-moralis'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoralisProvider appId="jM4svLVTiFMy8AYRDt6ygGcKli2zTuSzdq4fhqW0" serverUrl="https://on2vacs0upz1.usemoralis.com:2053/server">
        <App />
    </MoralisProvider>
  </React.StrictMode>
);


