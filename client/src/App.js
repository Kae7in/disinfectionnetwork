import React from 'react';
import logo from './logo.png';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { apiResponse: "" }
  }

  hanldeVolunteerClick() {
    window.location.href = 'https://airtable.com/shrROnWzix67w2paM'
  }

  hanldeRequestClick() {
    window.location.href = 'https://airtable.com/shrXPPnAO2PcUHzIP'
  }

  hanldeDistilleryClick() {
    window.location.href = 'https://airtable.com/shrWYpupgbzdrZu16'
  }

  // componentWillMount() {
  //   fetch('http://localhost:5000/hello')
  //   .then((response) => {
  //     return response.json()
  //   })
  //   .then((data) => {
  //     this.setState({ apiResponse: data.message })
  //   })
  // }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="headline">
          <h1>A marketplace for <b>sanitization</b></h1>
          <h3>Looking for hand sanitizer or disinfectant? Find local distilleries producing sanitization products.</h3>
        </div>

        <div className="need-help">
          <div>We need your help!</div>
          <div>
            We’re currently staffing up volunteers to help contact distilleries and other organizations.<br />
          </div>
        </div>

        <button className="request-button" onClick={this.hanldeRequestClick}>
          REQUEST DISINFECTANT
        </button>

        <button className="volunteer-button" onClick={this.hanldeVolunteerClick}>
          VOLUNTEER
        </button>
        
        <a className="distillery-button" href="https://google.com">
          <b>I’m a distillery and would like to sign up</b>
        </a>

        <div className="message">
        Due to overwhelming demand, many hospitals and assisted living facilities find themselves in desperate need of hand sanitizers and disinfectants.
        <br/>
        <br/>
        The Disinfection Network helps to connect hospitals, assisted living facilities and other essential organizations with local distilleries producing sanitization products. 
        <br/>
        <br/>
        We are a team of dedicated volunteers trying to make a difference in our local communities. If you've been looking for a way to help – this is your chance. 
        </div>
      </header>
    </div>
    );
  }
}

export default App;
