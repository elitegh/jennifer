import { experiences } from "@/data/profile";

export function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="site-shell">
        <div className="section__head">
          <p className="section__eyebrow">Career</p>
          <h2 className="section__title" id="experience-title">
            Work history
          </h2>
          <p className="section__lede">
            A path through cloud platforms, distributed systems, and large-scale
            product engineering.
          </p>
        </div>

        <ol className="timeline">
          {experiences.map((job) => (
            <li className="job" key={`${job.company}-${job.period}`}>
              <span className="job__marker" aria-hidden="true" />
              <div className="job__header">
                <h3 className="job__company">
                  {job.url ? (
                    <a href={job.url} target="_blank" rel="noopener noreferrer">
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                </h3>
                <time className="job__period">{job.period}</time>
              </div>
              <p className="job__role">{job.role}</p>
              <p className="job__industry">{job.industry}</p>
              <ul className="job__highlights">
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
