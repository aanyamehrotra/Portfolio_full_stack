import { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="home__nav">
      <div className="home__nav__left">
        <div className="nav__name">
          <span>
            Aanya <br />
            Mehrotra
          </span>
        </div>
        <div className="nav__folio" style={{ display: 'none' }}>
          <span>
            Full Stack Developer <br />
            Folio / 2024 — 2025
          </span>
        </div>
      </div>

      <div className="home__nav__right">
        <div className="nav__folio">
          <span>
            Full Stack Developer <br />
            Folio / 2024 — 2025
          </span>
        </div>
        <div className="nav__availability">Available for opportunities</div>
        <button className="nav__button c-button" onClick={scrollToContact} id="nav-contact-btn">
          <span className="c-link">
            <span className="c-link__inner">
              <span>contact</span>
              <span className="c-link__animated">contact</span>
            </span>
          </span>
        </button>
      </div>
    </nav>
  );
}
