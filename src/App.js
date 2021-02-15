import React, { Fragment } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { Detail } from './pages/Detail';
import { Home } from './pages/Home';

import { Router } from '@reach/router';

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
    </Fragment>
  );
};