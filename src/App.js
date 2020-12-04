import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Movie from './Movie';


function App() {
  return (
    <div>
      <BrowserRouter>
      <div className="App-container">
        <Switch>
        <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/movieId">
            <Movie/>
          </Route>
        </Switch>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
