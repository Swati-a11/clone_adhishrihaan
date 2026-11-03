import "./Footer.css";
import footerLogo from "../assets/footer_logo.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-fluid footer-inner-container">
        <div className="row g-4 footer-top-row">
          <div className="col-lg-5 col-md-12 footer-col-left">
            <a href="https://adhishrihaan.org/" className="footer-logo-link">
              <img
                src={footerLogo}
                alt="Adhishrihaan"
                className="footer-logo-img"
              />
            </a>

            <div className="footer-contact-grid">
              <div className="footer-contact-item">
                <h4 className="footer-contact-label">Email</h4>
                <a
                  href="mailto:info@adhishrihaan.com"
                  className="footer-contact-val"
                >
                  info@adhishrihaan.com
                </a>
              </div>

              <div className="footer-contact-item">
                <h4 className="footer-contact-label">Phone</h4>
                <a href="tel:+9706600007" className="footer-contact-val">
                  +970 66 00 00 7
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-col-mid">
            <h4 className="footer-section-title">Follow Us</h4>
            <div className="footer-social-icons">
              <a
                href="https://facebook.com/p/Adhishrihaan-Foundation-61580298832749/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Facebook"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/adhishrihaan"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Instagram"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              <a
                href="https://x.com/adhishrihaan"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Twitter"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/adhishrihaan"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href="https://m.youtube.com/@Adhishrihaan"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="YouTube"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 footer-col-right">
            <h4 className="footer-slogan">Changing Lives, Building Futures.</h4>
            <a href="https://adhishrihaan.org/donate/" className="footer-donate-btn">
              DONATE NOW
            </a>
          </div>
        </div>

        <div className="footer-divider-line" />

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © 2025 Adhishrihaan | All rights reserved | Designed by{" "}
            <a
              href="https://akkistudios.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="akki-link"
            >
              Akki Studios
            </a>
          </p>

          <nav className="footer-nav-menu" aria-label="Footer Navigation">
            <a href="https://adhishrihaan.org/" className="footer-nav-link">
              <svg
                className="footer-home-icon"
                width="14"
                height="14"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" />
              </svg>
              <span>Home</span>
            </a>
            <span className="footer-nav-separator">|</span>
            <a href="https://adhishrihaan.org/about-us/" className="footer-nav-link">
              About Us
            </a>
            <span className="footer-nav-separator">|</span>
            <a href="https://adhishrihaan.org/initiatives/" className="footer-nav-link">
              Initiatives
            </a>
            <span className="footer-nav-separator">|</span>
            <a href="https://adhishrihaan.org/our-impact/" className="footer-nav-link">
              Our Impact
            </a>
            <span className="footer-nav-separator">|</span>
            <a href="https://adhishrihaan.org/contact-us/" className="footer-nav-link">
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

