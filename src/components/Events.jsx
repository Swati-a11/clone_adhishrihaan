import { useState, useEffect, useRef } from "react";
import "./Events.css";

import megaHealthImg from "../assets/events/mega_health_camp.jpg";
import stationeryImg from "../assets/events/stationery_distribution.webp";
import anemiaImg from "../assets/events/anemia_screening.webp";
import catShelterImg from "../assets/events/cat_shelter.webp";

const PAST_EVENTS = [
  {
    id: 1,
    title: "Mega Health Checkup Camp",
    date: "11-09-2025",
    location: "Faidan, chd",
    venue: "Don Bosco Navjeevan Society",
    status: "Past Events",
    cause: "Healthcare",
    excerpt:
      "India faces significant healthcare challenges, particularly in rural and underserved areas. According to recent reports, many communities lack access to essential healthcare services, leading to a high vulnerability...",
    image: megaHealthImg,
    link: "https://adhishrihaan.org/events/mega-health-checkup-camp/",
  },
  {
    id: 2,
    title: "Stationery Distribution at Maharish Dayanand Bal Ashram",
    date: "11-09-2025",
    location: "Chandigarh",
    venue: "Udham Singh Colony in Sector 74, Mohali",
    status: "Past Events",
    cause: "Education",
    excerpt:
      "According to a 2023 report, people living in slum areas like Udham Singh Colony in Sector 74, Mohali, Chandigarh, face significant challenges. Often, these slums lack adequate infrastructure,...",
    image: stationeryImg,
    link: "https://adhishrihaan.org/events/stationery-distribution-at-maharish-dayanand-bal-ashram/",
  },
  {
    id: 3,
    title: "Anemia Screening Camp",
    date: "05-09-2025",
    location: "Chandigarh",
    venue: "DON BOSCO KAULI",
    status: "Past Events",
    cause: "Woman and Child Welfare",
    excerpt:
      "Anemia remains a significant public health concern in India, particularly among women and children. According to the latest National Family Health Survey (NFHS-5), approximately 53% of children under...",
    image: anemiaImg,
    link: "https://adhishrihaan.org/events/anemia-screening-camp/",
  },
  {
    id: 4,
    title: "Guardians of all Voiceless – Cat Shelter Foundation Stone",
    date: "01-09-2025",
    location: "Patiala",
    venue: "Guardians of all Voiceless",
    status: "Past Events",
    cause: "Animal Welfare",
    excerpt:
      "In India, millions of street animals face challenges like lack of shelter, medical care, and compassion. Animal welfare remains a critical concern in urban and rural areas, with...",
    image: catShelterImg,
    link: "https://adhishrihaan.org/events/guardians-of-all-voiceless-cat-shelter-foundation-stone/",
  },
];

export default function Events() {
  const [activeTab, setActiveTab] = useState("past");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [direction, setDirection] = useState("next");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef(null);

  const goTo = (index, dir) => {
    if (isTransitioning || index === currentIndex) return;
    setPrevIndex(currentIndex);
    setDirection(dir);
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => {
      setIsTransitioning(false);
      setPrevIndex(null);
    }, 600);
  };

  const handlePrev = () => {
    const nextIdx = currentIndex === 0 ? PAST_EVENTS.length - 1 : currentIndex - 1;
    goTo(nextIdx, "prev");
  };

  const handleNext = () => {
    const nextIdx = currentIndex === PAST_EVENTS.length - 1 ? 0 : currentIndex + 1;
    goTo(nextIdx, "next");
  };

  useEffect(() => {
    if (activeTab !== "past") return;
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [activeTab, currentIndex, isTransitioning]);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const revealElements = root.querySelectorAll(".events-reveal-item");
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
      revealElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <section className="our-events-section" ref={sectionRef}>
      <div className="container">
        <div className="events-header events-reveal-item">
          <h2 className="events-title">Our Events</h2>
          <p className="events-subtitle">What’s Next &amp; What’s Been</p>

          <div className="events-tabs d-none d-md-inline-flex">
            <button
              type="button"
              className={`events-tab-btn ${activeTab === "past" ? "active" : ""}`}
              onClick={() => setActiveTab("past")}
            >
              Past Events
            </button>
            <button
              type="button"
              className={`events-tab-btn ${activeTab === "upcoming" ? "active" : ""}`}
              onClick={() => setActiveTab("upcoming")}
            >
              Upcoming Events
            </button>
          </div>

          <div className="events-mobile-tab-top d-flex d-md-none justify-content-center">
            <button
              type="button"
              className={`events-tab-btn ${activeTab === "past" ? "active" : ""}`}
              onClick={() => setActiveTab("past")}
            >
              Past Events
            </button>
          </div>
        </div>

        <div className="events-outer-card events-reveal-item">
          {activeTab === "past" ? (
            <div className="events-card-wrapper">
              <div className="events-card-container">
                <button
                  type="button"
                  className="events-nav-btn events-nav-prev"
                  onClick={handlePrev}
                  aria-label="Previous event"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>

                <div className="events-slider-track">
                  {PAST_EVENTS.map((event, idx) => {
                    const isActive = idx === currentIndex;
                    const isPrev = idx === prevIndex;

                    let cardClass = "";
                    if (isActive) {
                      cardClass = `active enter-${direction}`;
                    } else if (isPrev) {
                      cardClass = `exit-${direction}`;
                    }

                    return (
                      <div
                        key={event.id}
                        className={`ngo-event-horizontal-card ${cardClass}`}
                        aria-hidden={!isActive}
                      >
                        <div className="ngo-event-card-img-col">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="ngo-event-card-img"
                          />
                        </div>

                        <div className="ngo-event-card-body">
                          <h3 className="ngo-event-card-title">{event.title}</h3>

                          <div className="ngo-event-card-meta">
                            <span className="ngo-meta-pill">
                              <span className="ngo-meta-icon">📅</span>
                              {event.date}
                            </span>
                            <span className="ngo-meta-pill">
                              <span className="ngo-meta-icon">📍</span>
                              {event.location}
                            </span>
                            <span className="ngo-meta-pill">
                              <span className="ngo-meta-icon">🏢</span>
                              {event.venue}
                            </span>
                          </div>

                          <div className="ngo-event-card-chips">
                            <span className="ngo-chip ngo-chip-status">
                              {event.status}
                            </span>
                            <span className="ngo-chip ngo-chip-cause">
                              {event.cause}
                            </span>
                          </div>

                          <p className="ngo-event-card-text">{event.excerpt}</p>

                          <a
                            href={event.link}
                            className="ngo-event-card-cta"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button
                  type="button"
                  className="events-nav-btn events-nav-next"
                  onClick={handleNext}
                  aria-label="Next event"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>

              <div className="events-pagination-dots">
                {PAST_EVENTS.map((event, idx) => (
                  <button
                    key={event.id}
                    type="button"
                    className={`events-dot ${idx === currentIndex ? "active" : ""}`}
                    onClick={() => goTo(idx, idx > currentIndex ? "next" : "prev")}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="events-empty-state">
              <p className="events-empty-text">No events found.</p>
            </div>
          )}
        </div>

        <div className="events-mobile-tab-bottom d-flex d-md-none justify-content-center mt-3">
          <button
            type="button"
            className={`events-tab-btn ${activeTab === "upcoming" ? "active" : ""}`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming Events
          </button>
        </div>
      </div>
    </section>
  );
}
