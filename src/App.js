import React, { Fragment } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery';
import { Home } from './pages/Home';

import { Router } from '@reach/router';

export const App = () => {

  // Con windows.location.search podemos sacar la query de la barra de busqueda.
  // Y esto es lo que recive por parametro URLSearchParams
	const urlParams = new window.URLSearchParams(window.location.search);
	const detailId = urlParams.get('detail');

  return (
    <Fragment>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <Router>
            <Home path='/' />
            <Home path='/pet/:id' />
        </Router>
      )}
    </Fragment>
  );
};