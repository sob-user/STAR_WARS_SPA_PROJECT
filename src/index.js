import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import EntryPoint from './EntryPoint';
import reportWebVitals from './reportWebVitals';
import {rendererIsReady} from './utils/logger'

ReactDOM.render(
  <React.StrictMode>
    <EntryPoint />
  </React.StrictMode>,
  document.getElementById('root'),
  () => rendererIsReady()
);

reportWebVitals();
