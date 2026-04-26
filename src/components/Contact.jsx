import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const marqueeText = Array(4)
  .fill("LET'S BUILD — LET'S COLLABORATE — SHIP SOMETHING REAL — SAY HELLO")
  .join(' — ');

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="home__contact" id="contact">
      <p className="home__contact__desc">
        Got a question, proposal or project or want to work together on something? Feel free to reach out.
      </p>

      <div className="line-wrapper">
        <span className="home__projects__line left"><span></span></span>
      </div>

      <div className="marquee">
        <div className="marquee__inner">
          <span className="inner-span">{marqueeText}</span>
          <span className="inner-span" aria-hidden="true">{marqueeText}</span>
        </div>
      </div>

      <div className="line-wrapper">
        <span className="home__projects__line right"><span></span></span>
      </div>

      <div className="home__contact__email">
        <button className="email" id="copy-email-btn" onClick={copyEmail}>
          {portfolioData.email}
        </button>
        <div className="to-copy">
          <span>{copied ? '✓ Copied!' : 'Click To Copy'}</span>
        </div>
      </div>
    </section>
  );
}
