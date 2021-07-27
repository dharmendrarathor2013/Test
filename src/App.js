import { Component, setState } from "react"
// import React { useState }
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
class Dashboard extends Component {
  
      //  constructor() {
      //  super()
       state = {
            count: 0,
            clicked: false
            }
            // this.v = 0;
    //  }
   increment =() =>{
// this.v= this.v+1
      
      
        };
   decrement =() =>{
        this.setState(
        {
        count:this.state.count+1
        }
        );
        };
 
   reset =() =>{
       this.setState(
       {
       count:0
       }
       );
       };
  
   render() {
       var myStyle = {
           fontSize: 30,
           color: '#60586e'
           }
   return(<div style={{
              position: 'absolute', left: '50%', top:'20%',
              transform: 'translate(-50%, -50%)'
              }}>
              <h3 style={myStyle}>Number Counting :{this.v}</h3>
              <h3 style={myStyle}>Number Counting :{this.state.count}</h3>
              <button style={{marginRight:'10px'}} className="btn btn-info"  onClick={(e)=>this.increment(e)}>Increment</button>
              <button style={{marginRight:'10px'}} className="btn btn-info" onClick={(e)=>this.decrement(e)}>Decrement</button>
              <button className="btn btn-info" onClick={(e)=>this.reset(e)}>Reset </button>
          </div>)
          }
 }
 export default Dashboard;