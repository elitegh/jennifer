import { profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon } from "./Icons";

export function Contact() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="site-shell contact">
        <div className="section__head">
          <p className="section__eyebrow">Contact</p>
          <h2 className="section__title" id="contact-title">
            Let&apos;s connect
          </h2>
          <p className="section__lede">
            Open to conversations about software systems, platforms, and new
            opportunities.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__item">
            <p className="contact__label">Email</p>
            <p className="contact__value">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </p>
          </div>
          <div className="contact__item">
            <p className="contact__label">Phone</p>
            <p className="contact__value">
              <a href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}>
                {profile.phone}
              </a>
            </p>
          </div>
          <div className="contact__item">
            <p className="contact__label">Location</p>
            <p className="contact__value">{profile.location}</p>
          </div>
          <div className="contact__item">
            <p className="contact__label">Profiles</p>
            <p className="contact__value">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              {" · "}
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        <div className="contact__actions">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            Email Jennifer
          </a>
          <a
            className="btn btn--ghost"
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            className="btn btn--ghost"
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
