import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './Home.css';

const Home = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <hr />
    <Link to="/blog">Blog</Link>
    <Link to="/banana">Banana</Link>
  </div>
);

export default Home;
