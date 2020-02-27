import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div id="main-header">
        <nav className="navbar navbar-expand-lg" id="home-nav">
          <a className="navbar-brand" href="#">
            <img
              id="nav-Logo"
              src={process.env.PUBLIC_URL + "/images/Logo.png"}
            ></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="dropdown"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-haspopup="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" id="home-btn" href="/">
                  About <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" id="contact-btn" href="/contact">
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Portfolio
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                  aria-haspopup="true"
                >
                  <a className="dropdown-item" href="/apps">
                    Apps & Projects
                  </a>

                  <a className="dropdown-item" href="/resume">
                    Resume
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
