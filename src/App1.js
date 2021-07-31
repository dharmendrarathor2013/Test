import React from "react";
class App1 extends React.Component {
    
    state = {
      company: 'Dharmendra'
    };
    
    componentDidUpdate() {
    
      setTimeout(() => {
        this.setState({ company: 'Rathor' });
      }, 600);
    }
    
    // componentDidUpdate() {
    //   document.getElementById('Update:').innerHTML =
    //     ' Dharmendra is also known as ' + this.state.company;
    // }
    
    render() {
      return (
        <div>
          <h1 style={{
            margin: 'auto',
            width: '50%',
            padding: 20,
            marginTop: '10%',
            border: 'solid 1px black',
            textAlign: 'center',
            fontSize: 18,
          }}>
            Greatest Science Portal For Geeks :
            {this.state.company}
            <div id="disclaimer"></div>
          </h1>
        </div>
      );
    }
  }
    
  export default App1;