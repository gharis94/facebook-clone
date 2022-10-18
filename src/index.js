import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import { Provider } from 'react-redux';
import {store} from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <DataProvider>
          <App />
      </DataProvider>
    </BrowserRouter>
  </Provider>
  </React.StrictMode>
);

