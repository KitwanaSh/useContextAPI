import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

class NavBar extends Component {
  render() {
    return (
      <AuthContext.Consumer>{(contextAuth) => (
        <ThemeContext.Consumer>
        {(contextTheme) => {
          const { isAuthenticated, toggleAuth } = contextAuth;
          const { isLightTheme, light, dark } = contextTheme;
          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>Context App</h1>
              <div onClick={toggleAuth} style={{ cursor: "pointer"}}>
                {isAuthenticated ? "Log In": "Log Out"}
              </div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
      )}
      </AuthContext.Consumer>  
    );
  }
}

export default NavBar;
