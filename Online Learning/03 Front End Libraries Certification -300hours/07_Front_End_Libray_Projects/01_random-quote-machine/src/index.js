import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppClassComponent from './AppClassComponent.js';
// import AppFunctionComponent from './AppFunctionComponent';



ReactDOM.render(
  <React.StrictMode>
    <AppClassComponent /> 
    {/* <AppFunctionComponent /> */}
  </React.StrictMode>,
  document.getElementById('root')

)

