import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg navbar-dark nav-pill container-fluid">
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

        <button
          className={`navbar-toggler ${isOpen ? "is-active" : ""}`}
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <span className="close-menu-icon">✕</span>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="mainNavbar">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={closeMenu}>
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/about-us/" onClick={closeMenu}>
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="/the-shrihaan-sahyog-grant/"
                onClick={closeMenu}
              >
                The Shrihaan Sahyog Grant
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/initiatives/" onClick={closeMenu}>
                Initiatives
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/our-impact/" onClick={closeMenu}>
                Our Impact
              </a>
            </li>

            <li className="nav-item dropdown hover-dropdown">
              <a className="nav-link" href="/events/" onClick={closeMenu}>
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
                    onClick={closeMenu}
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
                    onClick={closeMenu}
                  >
                    Past Events
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/news-media/" onClick={closeMenu}>
                News &amp; Media
              </a>
            </li>

            <li className="nav-item dropdown hover-dropdown">
              <a className="nav-link" href="/get-involved/" onClick={closeMenu}>
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
                  <a className="dropdown-item" href="/donate/" onClick={closeMenu}>
                    Donate
                  </a>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item" href="/volunteer/" onClick={closeMenu}>
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
