import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { store, persistor } from './redux/store.js';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


const app = (
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

