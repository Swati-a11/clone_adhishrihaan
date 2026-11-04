import { useState, useEffect } from "react";
import "./hero.css";

import slide1 from "../../assets/hero/5.png";
import slide2 from "../../assets/hero/6.png";
import slide3 from "../../assets/hero/4.png";

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
  const [prevSlide, setPrevSlide] = useState(null);
  const [direction, setDirection] = useState("next"); // "next" = right-to-left, "prev" = left-to-right
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = (nextIndex, dir) => {
    if (isTransitioning || nextIndex === currentSlide) return;
    setPrevSlide(currentSlide);
    setDirection(dir);
    setIsTransitioning(true);
    setCurrentSlide(nextIndex);
    setTimeout(() => {
      setIsTransitioning(false);
      setPrevSlide(null);
    }, 700);
  };

  const handleNext = () => {
    goTo((currentSlide + 1) % SLIDES.length, "next");
  };

  const handlePrev = () => {
    goTo((currentSlide - 1 + SLIDES.length) % SLIDES.length, "prev");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentSlide, isTransitioning]);

  return (
    <section className="hero-section position-relative">
      <div className="hero-slider-wrapper position-relative w-100 overflow-hidden">
        {SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          const isPrev = index === prevSlide;

          let slideClass = "";
          if (isActive) {
            slideClass = `active enter-${direction}`;
          } else if (isPrev) {
            slideClass = `exit-${direction}`;
          }

          return (
            <div
              key={slide.id}
              className={`hero-slide position-absolute top-0 start-0 w-100 h-100 ${slideClass}`}
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

        <div className="hero-mobile-dots d-flex d-md-none">
          {SLIDES.map((slide, idx) => (
            <span
              key={slide.id}
              className={`hero-mobile-dot ${idx === currentSlide ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
