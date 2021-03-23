import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand font" to="/">
          Emily Thomas
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link className="nav-link font" to="/portfolio">
              Portfolio
            </Link>
            <Link className="nav-link font" to="/contact">
              Contact
            </Link>
            <Link className="nav-link active font" to="/">
              About Me <span className="sr-only">(current)</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
