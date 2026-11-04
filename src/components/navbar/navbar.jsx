import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [involvedOpen, setInvolvedOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setEventsOpen(false);
    setInvolvedOpen(false);
  };

  const toggleEvents = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setEventsOpen((prev) => !prev);
  };

  const toggleInvolved = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setInvolvedOpen((prev) => !prev);
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
            <svg className="burger-icon" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0" width="22" height="2.5" rx="1.25" fill="white"/>
              <rect y="6" width="22" height="2.5" rx="1.25" fill="white"/>
              <rect y="12" width="22" height="2.5" rx="1.25" fill="white"/>
              <rect y="17.5" width="22" height="2.5" rx="1.25" fill="white"/>
            </svg>
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

            <li className={`nav-item dropdown hover-dropdown ${eventsOpen ? "mobile-dropdown-open" : ""}`}>
              <div
                className="mobile-dropdown-header"
                onClick={(e) => {
                  if (window.innerWidth < 992) {
                    toggleEvents(e);
                  }
                }}
              >
                <a
                  className="nav-link"
                  href="/events/"
                  onClick={(e) => {
                    if (window.innerWidth < 992) {
                      e.preventDefault();
                      setEventsOpen((prev) => !prev);
                    } else {
                      closeMenu();
                    }
                  }}
                >
                  Events
                </a>

                <button
                  className="dropdown-arrow-btn"
                  type="button"
                  onClick={toggleEvents}
                  aria-label="Toggle Events menu"
                >
                  <span className="dropdown-caret-icon">
                    {eventsOpen ? "▲" : "▼"}
                  </span>
                </button>
              </div>

              <ul className={`dropdown-menu ${eventsOpen ? "show-mobile" : ""}`}>
                <li className="dropdown-sub-item">
                  <a
                    className="dropdown-item"
                    href="/upcoming-events/"
                    onClick={closeMenu}
                  >
                    Upcoming Events
                  </a>
                </li>

                <li className="dropdown-sub-item">
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

            <li className={`nav-item dropdown hover-dropdown ${involvedOpen ? "mobile-dropdown-open open-green" : ""}`}>
              <div
                className="mobile-dropdown-header"
                onClick={(e) => {
                  if (window.innerWidth < 992) {
                    toggleInvolved(e);
                  }
                }}
              >
                <a
                  className="nav-link"
                  href="/get-involved/"
                  onClick={(e) => {
                    if (window.innerWidth < 992) {
                      e.preventDefault();
                      setInvolvedOpen((prev) => !prev);
                    } else {
                      closeMenu();
                    }
                  }}
                >
                  Get Involved
                </a>

                <button
                  className="dropdown-arrow-btn"
                  type="button"
                  onClick={toggleInvolved}
                  aria-label="Toggle Get Involved menu"
                >
                  <span className="dropdown-caret-icon">
                    {involvedOpen ? "▲" : "▼"}
                  </span>
                </button>
              </div>

              <ul className={`dropdown-menu dropdown-menu-end ${involvedOpen ? "show-mobile" : ""}`}>
                <li className="dropdown-sub-item">
                  <a className="dropdown-item" href="/donate/" onClick={closeMenu}>
                    Donate
                  </a>
                </li>

                <li className="dropdown-sub-item">
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
