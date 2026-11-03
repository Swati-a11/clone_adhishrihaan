import { useEffect, useRef } from "react";
import "./Focus_Areas.css";

import womanChildImg from "../assets/focus_areas/woman_child_welfare.jpg";
import educationImg from "../assets/focus_areas/education.jpg";
import healthcareImg from "../assets/focus_areas/healthcare.jpg";
import animalWelfareImg from "../assets/focus_areas/animal_welfare.jpg";
import elderlyCareImg from "../assets/focus_areas/elderly_care.jpg";
import skillDevImg from "../assets/focus_areas/skill_development.jpg";
import environmentImg from "../assets/focus_areas/environment.jpg";

const FocusAreas = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const revealElements = root.querySelectorAll(".focus-reveal-item");
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
    <section ref={sectionRef} className="focus-areas-section" id="focusarea">
      <div className="container">
        <div className="focus-areas-header focus-reveal-item">
          <h2 className="focus-main-title">OUR FOCUS AREAS</h2>
          <h3 className="focus-subtitle">TOUCHING LIVES WITH COMPASSION</h3>
        </div>

        <div className="focus-grid focus-reveal-item">
          <div className="focus-col-tall">
            <a
              href="/initiatives/"
              className="focus-card card-tall"
              style={{ backgroundImage: `url("${womanChildImg}")` }}
            >
              <div className="focus-card-overlay">
                <h4 className="focus-card-title">Woman and Child Welfare</h4>
              </div>
            </a>
          </div>

          <div className="focus-col-dual">
            <a
              href="/initiatives/"
              className="focus-card card-short"
              style={{ backgroundImage: `url("${educationImg}")` }}
            >
              <div className="focus-card-overlay">
                <h4 className="focus-card-title">Eduation</h4>
              </div>
            </a>
            <a
              href="/initiatives/"
              className="focus-card card-short"
              style={{ backgroundImage: `url("${animalWelfareImg}")` }}
            >
              <div className="focus-card-overlay">
                <h4 className="focus-card-title">Animal Welfare</h4>
              </div>
            </a>
          </div>

          <div className="focus-col-dual">
            <a
              href="/initiatives/"
              className="focus-card card-short"
              style={{ backgroundImage: `url("${healthcareImg}")` }}
            >
              <div className="focus-card-overlay">
                <h4 className="focus-card-title">Healthcare</h4>
              </div>
            </a>
            <a
              href="/initiatives/"
              className="focus-card card-short"
              style={{ backgroundImage: `url("${elderlyCareImg}")` }}
            >
              <div className="focus-card-overlay">
                <h4 className="focus-card-title">Elderly Care</h4>
              </div>
            </a>
          </div>

          <div className="focus-col-dual">
            <a
              href="/initiatives/"
              className="focus-card card-short"
              style={{ backgroundImage: `url("${skillDevImg}")` }}
            >
              <div className="focus-card-overlay">
                <h4 className="focus-card-title">Skill Development</h4>
              </div>
            </a>
            <a
              href="/initiatives/"
              className="focus-card card-short"
              style={{ backgroundImage: `url("${environmentImg}")` }}
            >
              <div className="focus-card-overlay">
                <h4 className="focus-card-title">Environment</h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;

