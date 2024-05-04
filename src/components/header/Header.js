import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="mw-header">
        <nav className="navbar navbar-expand-lg fixed-top bg-light">
          <div className="container-fluid">
            <h1 className="mw-header-title">
              <Link to="/">Modern Walk</Link>
            </h1>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
