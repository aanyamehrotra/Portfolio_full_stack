import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section className="home__experience" id="experience">
      <p className="section-label">Work Experience</p>
      <h2>INTERNSHIP <br /> EXPERIENCE</h2>
      {portfolioData.experience.map((exp, i) => (
        <div className="exp__card" key={i} data-fade-in>
          <div className="exp__meta">
            <p className="exp__role">{exp.role}</p>
            <p className="exp__company">{exp.company}</p>
            <p className="exp__duration">{exp.duration} · {exp.type}</p>
          </div>
          <ul className="exp__bullets">
            {exp.bullets.map((b, j) => (
              <li key={j}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
