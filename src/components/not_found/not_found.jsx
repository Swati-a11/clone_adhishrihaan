import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import "./not_found.css";

const NotFound = ({ onNavigateHome }) => {
  const handleHomeClick = (e) => {
    if (onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
    }
  };

  return (
    <div className="not-found-page">
      <Navbar />

      <main className="not-found-content-wrapper" role="main">
        <div className="not-found-card text-center">
          <div className="not-found-badge">
            <span className="not-found-badge-dot" />
            Page Not Found
          </div>

          <h1 className="not-found-code">404</h1>

          <h2 className="not-found-title">Oops! We couldn't find that page</h2>

          <p className="not-found-desc">
            The link you clicked may be broken, or the page may have been moved,
            renamed, or removed. Let's get you back on track to exploring our mission.
          </p>

          <div className="not-found-actions">
            <a
              href="/"
              onClick={handleHomeClick}
              className="not-found-btn-primary"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Return to Home
            </a>

            <a
              href="mailto:info@adhishrihaan.com"
              className="not-found-btn-secondary"
            >
              Contact Us
            </a>
          </div>

          <div className="not-found-quicklinks">
            <span className="not-found-quicklinks-label">Quick Links</span>
            <div className="not-found-quicklinks-list">
              <a href="/" onClick={handleHomeClick} className="not-found-quicklink">
                Home
              </a>
              <span className="not-found-quicklink-divider">•</span>
              <a
                href="https://adhishrihaan.org/the-shrihaan-sahyog-grant/"
                className="not-found-quicklink"
              >
                The Shrihaan Sahyog Grant
              </a>
              <span className="not-found-quicklink-divider">•</span>
              <a
                href="https://adhishrihaan.org/initiatives/"
                className="not-found-quicklink"
              >
                Initiatives
              </a>
              <span className="not-found-quicklink-divider">•</span>
              <a
                href="https://adhishrihaan.org/our-impact/"
                className="not-found-quicklink"
              >
                Our Impact
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
