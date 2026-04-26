import { portfolioData } from '../data/portfolioData';

const skillGroups = [
  { label: 'Frontend', key: 'frontend' },
  { label: 'Backend', key: 'backend' },
  { label: 'Databases', key: 'databases' },
  { label: 'AI & ML', key: 'ai' },
  { label: 'Tools & DevOps', key: 'tools' },
];

export default function Skills() {
  return (
    <section className="home__skills" id="skills">
      <div className="home__skills__left" data-fade-in>
        <p className="section-label">Tech Stack</p>
        <h2>
          SKILLS &amp; <br />
          TOOLS
        </h2>
        <p style={{ marginTop: '2rem', fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.8, maxWidth: '280px' }}>
          Building full-stack systems from real-time WebRTC platforms to production-level agentic AI pipelines.
        </p>
        <a
          href={portfolioData.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="c-button"
          id="github-profile-btn"
          style={{ marginTop: '2rem', display: 'inline-flex' }}
        >
          <span className="c-link">
            <span className="c-link__inner">
              <span>See my Github →</span>
              <span className="c-link__animated">See my Github →</span>
            </span>
          </span>
        </a>
      </div>

      <div className="home__skills__right">
        {skillGroups.map(({ label, key }) => (
          <div className="skill__group" key={key} data-fade-in>
            <p className="skill__group__label">{label}</p>
            <div className="skill__tags">
              {portfolioData.skills[key].map((skill) => (
                <span key={skill} className="skill__tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
