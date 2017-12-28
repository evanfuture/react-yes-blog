import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './Banana.css';

const Banana = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React Banana</h1>
    </header>
    <hr />
    <Link to="/">Home</Link>
  </div>
);

export default Banana;
