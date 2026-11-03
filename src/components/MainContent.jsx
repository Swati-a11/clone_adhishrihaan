import "./MainContent.css";

const PILLARS = [
  {
    id: "capacity-building",
    title: (
      <>
        CAPACITY
        <br />
        BUILDING
      </>
    ),
    description:
      "We offer tailored training programs, essential funding assistance, and critical technological support to enhance the operational efficiency and program effectiveness of our partner NGOs. This includes workshops on project management, financial literacy, fundraising strategies, and digital tools. We believe in strengthening their internal capabilities so they can serve their communities even better.",
    careInAction:
      "Care in Action: Providing the tools and knowledge that empower grassroots leaders to sustain their vital work, ensuring their dedication translates into lasting impact.",
  },
  {
    id: "visibility",
    title: "VISIBILITY",
    description:
      "We are dedicated to amplifying the impactful stories of these silent warriors. We help them effectively communicate their achievements, document their journeys, and gain the recognition they truly deserve through strategic communication and media outreach. This includes developing compelling narratives, creating impact reports, and connecting them with broader audiences.",
    careInAction:
      "Care in Action: Shining a spotlight on the tireless efforts of those who work selflessly on the ground, ensuring their dedication inspires more support and change.",
  },
  {
    id: "networking",
    title: "NETWORKING",
    description:
      "We connect grassroots NGOs with each other, fostering collaborative learning and shared solutions. We also link them with larger philanthropic organizations, corporate CSR initiatives, academic institutions, and government bodies. This builds a robust ecosystem of collective action and greater synergy for wider reach and sustainable impact.",
    careInAction:
      "Care in Action: Building bridges of partnership and shared purpose, creating a stronger, more united front for social transformation.",
  },
];

const MainContent = () => {
  return (
    <main className="main-content-section">
      {/* 1. Green Ribbon Banner */}
      <section className="mission-ribbon">
        <div className="container text-center">
          <p className="mission-ribbon-text m-0">
            Empowering Those Who Empower Others: Investing in Grassroots, Investing in India's Future.
          </p>
        </div>
      </section>

      {/* 2. Dark Green Intro & Mission Statement */}
      <section className="mission-intro">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 text-center">
              <p className="mission-intro-paragraph">
                At Adhishrihaan Foundation, we believe true transformation begins at the roots. We are the steadfast support system for the unsung heroes of community development: grassroots NGOs, nurturing their vital work with unwavering care and commitment.
              </p>

              {/* Action Links with Divider */}
              <div className="mission-action-links d-flex flex-column flex-md-row justify-content-center align-items-center">
                <a href="/our-impact/" className="mission-action-link impact-link">
                  DISCOVER OUR IMPACT
                </a>
                <span className="mission-action-divider d-none d-md-inline">|</span>
                <a href="/donate/" className="mission-action-link support-link">
                  SUPPORT OUR MISSION
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Do / Our Pillars of Support */}
      <section className="pillars-section">
        <div className="container">
          {/* Section Headings */}
          <div className="text-center pillars-heading-wrap">
            <h2 className="pillars-main-title">WHAT WE DO</h2>
            <h3 className="pillars-subtitle">OUR PILLARS OF SUPPORT</h3>
          </div>

          {/* Pillars List */}
          <div className="pillars-list">
            {PILLARS.map((pillar) => (
              <div key={pillar.id} className="row pillar-row align-items-start">
                {/* Left Title Column */}
                <div className="col-12 col-md-4 col-lg-3 pillar-title-col">
                  <h4 className="pillar-name">{pillar.title}</h4>
                </div>

                {/* Right Description Column */}
                <div className="col-12 col-md-8 col-lg-9 pillar-desc-col">
                  <p className="pillar-description">{pillar.description}</p>
                  <p className="pillar-care-in-action">{pillar.careInAction}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;

