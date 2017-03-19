import React from 'react';
import { NavBar } from './../NavBar/NavBar';

export const Header = () => {
  return (
    <header className="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
        <div className="mdl-layout--large-screen-only mdl-layout__header-row"></div>
        <div className="mdl-layout--large-screen-only mdl-layout__header-row">
          <h3>Sreeram Padmanabhan</h3>
        </div>
        <div className="mdl-layout--large-screen-only mdl-layout__header-row"></div>
        <NavBar />
      </header>
  );
};
