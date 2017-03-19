import React from 'react';
import Styles from './Styles.css';

export const NavBar = ({ title }) => {
  return (
    <div className="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark">
      <a href="#home" className="mdl-layout__tab is-active">Home</a>
      <a href="#about" className="mdl-layout__tab">About</a>
      <a href="#contact" className="mdl-layout__tab">Contact</a>
      <a href="#blog" className="mdl-layout__tab">Blog</a>
      <a href="#resume" className="mdl-layout__tab">Resume</a>
      <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent" id="add">
        <i className="material-icons" role="presentation">add</i>
        <span className="visuallyhidden">Add</span>
      </button>
    </div>
  );
};
