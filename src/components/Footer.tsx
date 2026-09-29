import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>
          <span className="footer__name">{profile.name}</span>
          {" — "}
          {profile.title}
        </p>
        <p>© {year}</p>
      </div>
    </footer>
  );
}
