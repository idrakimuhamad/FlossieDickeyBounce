import React, { Component } from 'react';
import { Link } from 'react-router';
// import logo from './logo.svg';
// import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="about-page">
        <h1>About Page</h1>
				Here to go back <Link to="/">home</Link>
      </div>
    );
  }
}