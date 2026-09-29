import { profile } from "@/data/profile";

const pathMarks = ["Microsoft", "Meta", "Google", "Amazon"];

export function Hero() {
  return (
    <section className="hero site-shell" id="top" aria-label="Introduction">
      <div className="hero__layout">
        <div className="hero__content">
          <p className="hero__meta reveal">
            <span>{profile.location}</span>
            <span className="hero__meta-dot" aria-hidden="true" />
            <span>Portfolio</span>
          </p>
          <h1 className="hero__name reveal reveal-delay-1">{profile.name}</h1>
          <p className="hero__tagline reveal reveal-delay-2">{profile.tagline}</p>
          <div className="hero__actions reveal reveal-delay-3">
            <a className="btn btn--primary" href="#experience">
              View experience
            </a>
            <a className="btn btn--ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <aside className="hero__panel reveal reveal-delay-2" aria-hidden="true">
          <p className="hero__panel-label">Selected path</p>
          <ul className="hero__path">
            {pathMarks.map((company, index) => (
              <li key={company}>
                <span className="hero__path-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="hero__path-name">{company}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
