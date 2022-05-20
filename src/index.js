import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import {UserProvider} from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);

