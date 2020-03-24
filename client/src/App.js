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
          <h3>Connect directly with local distilleries producing disinfectants.</h3>
          <h4>We will be opening our database to verified recipients on 3/26</h4>
        </div>

        <div className="buttonGroup">
          <button className="request-button" onClick={this.handleRequestClick}>
            Request access
          </button>

          <button className="distillery-button" onClick={this.handleDistilleryClick}>
            I'm a distillery
          </button>

          <button className="volunteer-button" onClick={this.handleVolunteerClick}>
            I can volunteer
          </button>
        </div>

        <div className="message">
          Disinfect Connect is the database for locating and communicating with local distilleries who are producing alcohol based disinfectants.
          <br/>
          <br/>
          In response to COVID19, permitted distilleries in the US have ramped up production of hand sanitizer and disinfectants from their extra alcohol stocks. Disinfect Connect helps essential organizations, hospitals and our most at-risk population purchase the disinfectant they desperately need to stop the spread of coronavirus.
        </div>

        <div className="need-help">
          <div>We need volunteers!</div>
          <div>
            We are currently staffing up a robust team of spirited individuals to help engage directly with distilleries and help bring them online. The more distilleries that get on our platform, the more lives we could potentially save. If you have been looking for a way to help, this is your opportunity.<br />
          </div>
        </div>
      </header>
      <div className="footer"></div>
    </div>
    );
  }
}

export default App;
