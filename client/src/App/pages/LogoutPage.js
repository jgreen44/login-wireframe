import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Login } from '../components/Login';
import { BackgroundLogo } from '../components/BackgroundLogo';
import { BackgroundRight } from '../components/BackgroundRight';


class LogoutPage extends Component {
  render() {
    return (
        <div className="Login">
            <BackgroundRight></BackgroundRight>
            <BackgroundLogo></BackgroundLogo>
            <Login></Login>
        </div>
    );
  }
}
export default LogoutPage;