import { education } from "@/data/profile";

export function Education() {
  return (
    <section className="section section--tight" id="education" aria-labelledby="education-title">
      <div className="site-shell">
        <div className="section__head">
          <p className="section__eyebrow">Education</p>
          <h2 className="section__title" id="education-title">
            Academic foundation
          </h2>
        </div>

        <article className="edu">
          <h3 className="edu__school">
            <a href={education.url} target="_blank" rel="noopener noreferrer">
              {education.school}
            </a>
          </h3>
          <p className="edu__degree">{education.degree}</p>
          <p className="edu__meta">
            {education.period} · {education.location}
          </p>
        </article>
      </div>
    </section>
  );
}
