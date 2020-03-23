import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { apiResponse: "" }
  }

  componentWillMount() {
    fetch('http://localhost:5000/hello')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({ apiResponse: data.message })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            { this.state.apiResponse }
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
