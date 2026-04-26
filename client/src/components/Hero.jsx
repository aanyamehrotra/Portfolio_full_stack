import { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ArrowDown = () => (
  <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.8333 13.9766L15.3033 9.50658L16.4816 10.6849L9.99998 17.1666L3.51831 10.6849L4.69664 9.50658L9.16664 13.9766V3.83325H10.8333V13.9766Z"
      fill="#777777"
    />
  </svg>
);

export default function Hero() {
  const frontRef = useRef(null);
  const endRef = useRef(null);
  const devRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    // Entry animation
    tl.fromTo(
      '.hero__title',
      { opacity: 0 }, { opacity: 1, duration: 0.5 }
    );

    // Horizontal scroll parallax on large letters
    if (frontRef.current) {
      gsap.to(frontRef.current, {
        x: () => window.innerWidth * 0.08,
        ease: 'none',
        scrollTrigger: {
          trigger: '.home__hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }
    if (endRef.current) {
      gsap.to(endRef.current, {
        x: () => -window.innerWidth * 0.08,
        ease: 'none',
        scrollTrigger: {
          trigger: '.home__hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    // Fade in bottom row
    gsap.fromTo(
      '.hero__paragraph, .hero__scroll',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, delay: 0.6 }
    );
  }, []);

  const letters = (word) =>
    word.split('').map((l, i) => (
      <span key={i} className="hero__hover">
        {l}
      </span>
    ));

  return (
    <section className="home__hero">
      <div className="hero__title">
        {/* Top row — FULL —— STACK */}
        <h1 style={{ overflow: 'hidden' }}>
          <div className="hero__title__top">
            <span className="hero__title__left" ref={frontRef}>
              {letters('FULL')}
            </span>
            <span className="hero__title__dash">——</span>
            <span className="hero__title__right" ref={endRef}>
              {letters('STACK')}
            </span>
          </div>
        </h1>

        {/* Bottom row — DEVELOPER + about */}
        <span className="hero__title__bottom">
          <div>
            <h1 className="bottom__left" ref={devRef}>
              {letters('DEVELOPER')}
            </h1>
            <div className="bottom__right">
              <p className="hero__paragraph">
                <span className="first-word">About</span>&nbsp;&nbsp;
                {portfolioData.summary}
              </p>
              <div className="hero__scroll">
                <p>Scroll down</p>
                <span className="c-link" style={{ display: 'inline-flex' }}>
                  <span className="c-link__inner">
                    <span><ArrowDown /></span>
                    <span className="c-link__animated"><ArrowDown /></span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </span>
      </div>
    </section>
  );
}
