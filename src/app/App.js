import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

class App extends Component {

   state = {
    loading: true,
    response: null,
   }

   componentDidMount = () => {
    Axios.get('http://localhost:8080/')
    .then(response => this.setState({ response: response.data.response }))
    .catch(error => this.setState({ response: error }))
    .finally(() => this.setState({ loading: false }));
   }

  render() {
    if (this.state.loading) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
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

    return <h1>{this.state.response}</h1>;
  }
}

export default App;
