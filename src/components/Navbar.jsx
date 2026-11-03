
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg navbar-dark nav-pill container-fluid">

        {/* Logo */}
        <a
          className="navbar-brand logo-link"
          href="https://adhishrihaan.org/"
        >
          <img
            className="logo-normal"
            src="https://adhishrihaan.org/wp-content/uploads/2025/08/Artboard-1-copy-2.png"
            alt="Adhishrihaan"
          />

          <img
            className="logo-hover"
            src="https://adhishrihaan.org/wp-content/uploads/2025/08/Artboard-1.png"
            alt="Adhishrihaan"
          />
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about-us/">
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="/the-shrihaan-sahyog-grant/"
              >
                The Shrihaan Sahyog Grant
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/initiatives/">
                Initiatives
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/our-impact/">
                Our Impact
              </a>
            </li>

            {/* Events Dropdown */}
            <li className="nav-item dropdown hover-dropdown">

              <a className="nav-link" href="/events/">
                Events
              </a>

              <button
                className="dropdown-toggle dropdown-arrow"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-label="Open Events menu"
              ></button>

              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="/upcoming-events/"
                  >
                    Upcoming Events
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a
                    className="dropdown-item"
                    href="/past-events/"
                  >
                    Past Events
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/news-media/">
                News &amp; Media
              </a>
            </li>

            {/* Get Involved Dropdown */}
            <li className="nav-item dropdown hover-dropdown">

              <a className="nav-link" href="/get-involved/">
                Get Involved
              </a>

              <button
                className="dropdown-toggle dropdown-arrow"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-label="Open Get Involved menu"
              ></button>

              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="/donate/">
                    Donate
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item" href="/volunteer/">
                    Volunteer
                  </a>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
