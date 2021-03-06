import PropTypes from "prop-types";
import React, { Component } from "react";
import GoogleButton from 'react-google-button'
const BASE_URL = "http://opensky2.herokuapp.com/";
// const BASE_URL = process.env.NODE_ENV === "production" ? "https://opensky2.herokuapp.com/" : "http://localhost:8080/"


export default class Login extends Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired
  };

  render() {
    const { authenticated } = this.props;
    return (
      <ul className="menu loginOut">
        {authenticated ? (
          <li className="logOut" onClick={this._handleLogoutClick}>Logout</li>
        ) : (
            <li className="googleButten" onClick={this._handleSignInClick}><GoogleButton></GoogleButton></li>
          )}
      </ul>
    );
  }

  _handleSignInClick = () => {
    window.open(`${BASE_URL}auth/google`, "_self");
  };

  _handleLogoutClick = () => {
    // Set authenticated state to false in the HomePage component
    window.open(`${BASE_URL}auth/logout`, "_self");
    this.props.handleNotAuthenticated();
  };
}


