import { useState, useEffect, useRef } from "react";
import "./Grant.css";

import slide1 from "../assets/grant/6th.png";
import slide2 from "../assets/grant/5th.png";
import slide3 from "../assets/grant/4th.png";
import slide4 from "../assets/grant/3rd.png";
import slide5 from "../assets/grant/2nd.png";
import slide6 from "../assets/grant/7th.png";
import slide7 from "../assets/grant/1one.png";

const GRANT_SLIDES = [
  { id: 1, image: slide1, alt: "Children in school supported by grant" },
  { id: 2, image: slide2, alt: "Veterinarian caring for cattle" },
  { id: 3, image: slide3, alt: "Elderly care assistance" },
  { id: 4, image: slide4, alt: "Healthcare doctor in rural community" },
  { id: 5, image: slide5, alt: "Environmental afforestation initiative" },
  { id: 6, image: slide6, alt: "Skill development sewing workshop" },
  { id: 7, image: slide7, alt: "Mother and child welfare" },
];

const Grant = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % GRANT_SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const revealElements = root.querySelectorAll(".grant-reveal-item");
    if (!revealElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="grant-section">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-12 col-lg-6 order-2 order-lg-1 grant-reveal-item">
            <h2 className="grant-title">The Shrihaan Sahyog Grant</h2>
            <div className="grant-text-wrap">
              <p className="grant-paragraph">
                As a testament to our unwavering commitment to direct and
                impactful support, Adhishrihaan Foundation proudly offers the{" "}
                <strong>“Shrihaan Sahyog” Grant.</strong>
              </p>
              <p className="grant-paragraph">
                This annual grant provides crucial, catalytic funding to 3-5
                carefully selected micro-NGOs that are undertaking powerful
                ground-level work but are often constrained by a lack of
                visibility or financial resources.
              </p>
            </div>
            <a
              href="https://adhishrihaan.org/the-shrihaan-sahyog-grant/"
              className="grant-btn"
            >
              Know More
            </a>
          </div>

          <div className="col-12 col-lg-6 order-1 order-lg-2 grant-reveal-item">
            <div className="grant-carousel-wrapper">
              {GRANT_SLIDES.map((slide, index) => {
                const isActive = index === currentSlide;
                return (
                  <div
                    key={slide.id}
                    className={`grant-slide ${isActive ? "active" : ""}`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="grant-slide-image"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grant;

