import React, { Fragment } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";

import { NavBar } from './components/NavBar';

import { Detail } from './pages/Detail';
import { Home } from './pages/Home';
import { Favs } from './pages/Favs';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { User } from './pages/User';


import { Router } from '@reach/router';

import Context from './Context';

export const App = () => {

  return (
    <Fragment>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryID' />
        <Detail path='/detail/:detailID' />
      </Router>

      <Context.Consumer>
        {
          ({ isAuth }) => (
            isAuth ? <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router> : <Router>
                <NotRegisteredUser path="/favs" />
                <NotRegisteredUser path="/user" />
            </Router>
          )
        }
      </Context.Consumer>
      <NavBar />
    </Fragment>
  );
};