import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar } from './Components';
import { SearchPage, NotFound, MoviesPage } from './Pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={SearchPage} />
        <Route path='/movies' component={MoviesPage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
