import React, { Component,} from 'react';
import Button from 'material-ui/RaisedButton';
import style from '../styles/homepage.css';
import { BrowserRouter, Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1>Top Shelf Tracker</h1>
        <p>An open source tool for tracking hockey statistics</p>
        <Link to={'/login'}>
          <Button primary label="Login" />
        </Link>
          <Button secondary label="Create Account" />
      </div>
    </div>
  );
};

export default HomePage;