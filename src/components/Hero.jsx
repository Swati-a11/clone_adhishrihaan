import { useState, useEffect, useRef } from "react";
import "./Hero.css";

import slide1 from "../assets/hero/5.png";
import slide2 from "../assets/hero/6.png";
import slide3 from "../assets/hero/4.png";

const SLIDES = [
  {
    id: 1,
    image: slide1,
    alt: "Animal Welfare - Adhishrihaan Foundation",
  },
  {
    id: 2,
    image: slide2,
    alt: "Environment protection and afforestation",
  },
  {
    id: 3,
    image: slide3,
    alt: "Empowering children and grassroots education",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState("next"); // "next" = right-to-left, "prev" = left-to-right
  const [animating, setAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const goTo = (nextIndex, dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setCurrentSlide(nextIndex);
    setTimeout(() => setAnimating(false), 700);
  };

  const handleNext = () => {
    goTo((currentSlide + 1) % SLIDES.length, "next");
  };

  const handlePrev = () => {
    goTo((currentSlide - 1 + SLIDES.length) % SLIDES.length, "prev");
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(handleNext, 3800);
    }
    return () => clearInterval(timerRef.current);
  }, [isPaused, currentSlide]);

  return (
    <section
      className="hero-section position-relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hero-slider-wrapper position-relative w-100 overflow-hidden">
        {SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`hero-slide position-absolute top-0 start-0 w-100 h-100 ${
                isActive ? `active slide-in-${direction}` : ""
              }`}
              style={{
                backgroundImage: `url("${slide.image}")`,
              }}
              role="img"
              aria-label={slide.alt}
            >
              <div className="container hero-buttons-container position-relative h-100 d-flex align-items-end">
                <div className="row w-100 align-items-center justify-content-between g-3">
                  <div className="col-12 col-md-auto d-flex justify-content-center justify-content-md-start gap-3">
                    <a href="/about-us/" className="hero-btn">
                      KNOW MORE
                    </a>
                    <a href="/volunteer/" className="hero-btn">
                      VOLUNTEER
                    </a>
                  </div>

                  <div className="col-12 col-md-auto d-flex justify-content-center justify-content-md-end">
                    <a href="/donate/" className="hero-btn hero-btn-donate">
                      DONATE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <button
          type="button"
          className="hero-nav-arrow hero-nav-prev"
          onClick={handlePrev}
          aria-label="Previous Slide"
        >
          ‹
        </button>

        <button
          type="button"
          className="hero-nav-arrow hero-nav-next"
          onClick={handleNext}
          aria-label="Next Slide"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default Hero;
