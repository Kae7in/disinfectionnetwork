import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { apiResponse: "" }
  }

  handleVolunteerClick() {
    window.location.href = 'https://airtable.com/shrROnWzix67w2paM'
  }

  handleRequestClick() {
    window.location.href = 'https://airtable.com/shrXPPnAO2PcUHzIP'
  }

  handleDistilleryClick() {
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
          <h1>Running out of <b>disinfectant?</b></h1>
          <h3>We connect you with local US distilleries manufacturing sanitizer.</h3>
        </div>

        <div className="need-help">
          <div>We need your help!</div>
          <div>
            We’re currently staffing up volunteers to help contact distilleries and other organizations.<br />
          </div>
        </div>

        <div className="buttonGroup">
          <button className="request-button" onClick={this.handleRequestClick}>
            I need disinfectant
          </button>

          <button className="distillery-button" onClick={this.handleDistilleryClick}>
            I'm a distillery
          </button>

          <button className="volunteer-button" onClick={this.handleVolunteerClick}>
            I can volunteer
          </button>
        </div>

        <div className="message">
          Due to overwhelming demand, many hospitals and assisted living facilities find themselves in desperate need of hand sanitizers and disinfectants.
          <br/>
          <br/>
          Disinfect Connect helps to connect hospitals, assisted living facilities and other essential organizations with local distilleries producing sanitization products. 
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
