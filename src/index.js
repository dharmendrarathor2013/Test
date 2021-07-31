import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App1 from './App1';


const name = 'Dharmendra';
const tdate = new Date().toLocaleDateString();
const ttime = new Date().toLocaleTimeString();
// const currentDate = tdate.getFullYear()+'-'+(tdate.getMonth()+1) +'-'+tdate.getDate();
// const currentTime = tdate.getHours()+': '+tdate.getMinutes()+':'+tdate.getSeconds();
ReactDOM.render(
  <React.Fragment>
  <App></App>
  <App1></App1>
  
 
    <h1>{name}</h1>
    <p>{tdate}</p>
    <p>{ttime}</p>
  </React.Fragment>,
  
  document.getElementById('root')

);