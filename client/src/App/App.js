import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import List from './pages/List';
import Home from './pages/Home';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route exact path='/' component={LoginPage}/>
          <Route path='/logout' component={LogoutPage}/>
          <Route path='/home' component={Home}/>
          <Route path='/list' component={List}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
