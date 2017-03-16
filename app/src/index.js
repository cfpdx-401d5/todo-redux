import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './App';
import './index.css';

let store = createStore(todoApp);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
