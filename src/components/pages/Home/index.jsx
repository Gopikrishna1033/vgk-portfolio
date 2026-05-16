import "./index.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-title">Hi, I'm VenkataGopikrishna</h1>

      <p className="hero-description">
        Frontend Developer with 1.5+ years of experience building scalable,
        responsive, and user-friendly web applications, with hands-on experience
        in Pega Constellation UI along with modern full-stack development and
        mobile development.
      </p>

      <ul className="social-links">
        <li>
          <a
            href="https://github.com/Gopikrishna1033"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon /> GitHub
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/venkata-gopikrishna-cheedella-769144225/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon /> LinkedIn
          </a>
        </li>
      </ul>

      <div className="hero-buttons">
        <button
          className="primary"
          onClick={() =>
            document.getElementById("projects").scrollIntoView("smooth")
          }
        >
          View Projects
        </button>
        <button
          className="secondary"
          onClick={() =>
            document.getElementById("contact").scrollIntoView("smooth")
          }
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Hero;
