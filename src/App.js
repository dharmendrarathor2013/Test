import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
//import * as serviveWoker from "./serviceWorker";
class App extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
      isToggleOn: true,
		value: 'On'
	            };
  
	  this.handleClick = this.handleClick.bind(this);
	}
handleClick() {
  this.setState(prevState => ({
  isToggleOn: !prevState.isToggleOn
  
  }));
  this.setState({value: 'Off'})
}
handleChange (e) {
  //console.log('handle change called')
  // this.setState({value: 'Good Evening..'})
  }
  render() {
	
	  return (
		  <>
		  <input value={this.state.value} onChange={this.handleChange}/>

		  <button variant="contained" color="secondary" style={{marginLeft:'10px',padding:'3px', color:'red', border:'2px solid #8a66d1'}} onClick={this.handleClick}>
		  {this.state.isToggleOn ? 'ON' : 'OFF'}
		  </button>
		</>
	  );
	}
}
export default App
// document.getElementById('root')
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
//serviveWoker.unregistered();
