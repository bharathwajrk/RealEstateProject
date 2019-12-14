import React, { Component } from 'react';
import Navbar from './components/utils/navbar'
import HomePage from './components/home/homePageAB';
import { BrowserRouter, Route } from 'react-router-dom';
import beAHost from './components/utils/beAHost';
import help from './components/utils/help';
import login from './components/utils/login';
import signup from './components/utils/signup';
import { Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/help' component={help} />
            <Route path='/login' component={login} />
            <Route path='/beAHost' component={beAHost} />
            <Route path='/signup' component={signup} />
            <Route path='/' component={HomePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
