import React from 'react';
import logo from './logo.png';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { apiResponse: "" }
  }

  hanldeVolunteerClick() {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfLBGQ8wMEDAuLXHIgBzQlUjyhihUVDpcyYaaIRIUc8YMHTOw/viewform'
  }

  hanldeRequestClick() {
    console.log("request disinfectant")
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
        <div className="request-tagline">Requests open <b>Tues, 3-24-2020</b></div>

        <button className="volunteer-button" onClick={this.hanldeVolunteerClick}>
          VOLUNTEER
        </button>

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
