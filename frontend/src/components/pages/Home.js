import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Here to go to <Link to="/about">About page</Link>
        </p>
      </div>
    );
  }
}