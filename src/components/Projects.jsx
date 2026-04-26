import { useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ShareIcon = () => (
  <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline', marginLeft: '3px', verticalAlign: 'middle' }}>
    <path d="M9.33 5.5L4.33 10.5l-.83-.84 5-5H3.83V3.5h6.5v6.5H9.33V5.5z" fill="#777" />
  </svg>
);

function ProjectItem({ project, index }) {
  const titleRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;

    const direction = project.side === 'right' ? 1 : -1;
    gsap.to(titleRef.current, {
      x: () => direction * window.innerWidth * 0.06,
      ease: 'none',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
      },
    });

    // Line animation
    const line = document.querySelectorAll('.home__projects__line')[index];
    if (line) {
      ScrollTrigger.create({
        trigger: line,
        start: 'top 90%',
        onEnter: () => line.classList.add('animate'),
      });
    }

    // Title slide-up
    ScrollTrigger.create({
      trigger: titleRef.current,
      start: 'top 85%',
      onEnter: () => {
        const inner = titleRef.current?.querySelector('.title__main');
        if (inner) inner.classList.add('visible');
      },
    });

    // Fade-in elements
    document.querySelectorAll('[data-fade-in]').forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        onEnter: () => el.classList.add('visible'),
      });
    });
  }, []);

  return (
    <>
      <span className={`home__projects__line ${project.side === 'right' ? 'left' : 'right'}`}>
        <span></span>
      </span>
      <div className={`home__projects__project ${project.side}`}>
        <div className="home__projects__project__label">
          <div className={`label__inner ${index === 0 ? 'label-1' : ''}`}>
            {index === 0 && <p>FEATURED <br /> PROJECTS ({portfolioData.projects.length})</p>}
            <p>{project.tag}</p>
          </div>
        </div>

        <a
          href={project.demo || project.github || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="home__projects__project__link"
          id={`project-link-${project.id}`}
        >
          <h2
            className="home__projects__project__title"
            ref={titleRef}
          >
            <span className="inline-ovh">
              <div className="title__main">
                {project.shortTitle} — {project.tag.split('/')[0].trim().toUpperCase()}
              </div>
            </span>
          </h2>
        </a>

        <div className="project__link">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="c-button"
              id={`github-link-${project.id}`}
            >
              <span className="c-link">
                <span className="c-link__inner">
                  <span>Github <ShareIcon /></span>
                  <span className="c-link__animated">Github <ShareIcon /></span>
                </span>
              </span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="c-button"
              id={`demo-link-${project.id}`}
            >
              <span className="c-link">
                <span className="c-link__inner">
                  <span>Live Demo <ShareIcon /></span>
                  <span className="c-link__animated">Live Demo <ShareIcon /></span>
                </span>
              </span>
            </a>
          )}
          <div className="project__techs" data-fade-in>
            {project.tech.map((t) => (
              <span key={t} className="tech-chip">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default function Projects() {
  return (
    <section className="home__projects" id="projects">
      {portfolioData.projects.map((project, i) => (
        <ProjectItem key={project.id} project={project} index={i} />
      ))}
      <span className="home__projects__line left"><span></span></span>
    </section>
  );
}
