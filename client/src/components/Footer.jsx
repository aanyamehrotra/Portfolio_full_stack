import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const [time, setTime] = useState({ h: '', m: '' });

  useEffect(() => {
    const update = () => {
      const now = new Date();
      // IST offset: UTC+5:30
      const ist = new Date(now.getTime() + (5.5 * 60 * 60 * 1000) - (now.getTimezoneOffset() * 60000));
      const h = String(ist.getHours()).padStart(2, '0');
      const m = String(ist.getMinutes()).padStart(2, '0');
      setTime({ h, m });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="home__footer" id="js-footer">
      <div className="home__footer__left">
        <p className="place">New Delhi, India</p>
        <div className="time">
          <span>{time.h}</span>
          <span className="flash">:</span>
          <span>{time.m}</span>
        </div>
      </div>

      <div className="footer__links">
        <div className="link__flex">
          <a
            href={portfolioData.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="c-button"
            id="footer-linkedin"
          >
            <span className="c-link">
              <span className="c-link__inner">
                <span>LinkedIn</span>
                <span className="c-link__animated">LinkedIn</span>
              </span>
            </span>
          </a>

          <a
            href={portfolioData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="c-button"
            id="footer-github"
          >
            <span className="c-link">
              <span className="c-link__inner">
                <span>GitHub</span>
                <span className="c-link__animated">GitHub</span>
              </span>
            </span>
          </a>

          <a
            href={portfolioData.links.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="c-button"
            id="footer-leetcode"
          >
            <span className="c-link">
              <span className="c-link__inner">
                <span>LeetCode</span>
                <span className="c-link__animated">LeetCode</span>
              </span>
            </span>
          </a>
        </div>
      </div>

      <p className="home__footer__right">© Aanya Mehrotra 2025</p>
    </footer>
  );
}
