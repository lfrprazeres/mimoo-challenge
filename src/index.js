import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import { Provider } from 'react-redux';
import { store, persistor } from './store/createStore';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
