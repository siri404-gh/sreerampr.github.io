import React from 'react';
import { Header } from './../presentational/Header/Header';
import { Footer } from './../presentational/Footer/Footer';
import Login from './../presentational/Login/Login';
import Styles from './Styles.css';

export const App = () => (
  <div>
    <Header />
    <Login />
    <Footer />
  </div>
);
