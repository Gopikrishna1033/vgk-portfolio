import logo from "../assets/portfolioLogo.svg";
import "./Navbar.css";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [active, setActive] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const sections = navItems.map((item) => item.id);

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const el = document.getElementById(section);

        if (el) {
          const rect = el.getBoundingClientRect();
          const middle = window.innerHeight / 2;

          if (rect.top <= middle && rect.bottom >= middle) {
            current = section;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="container">
        <div
          onClick={() =>
            document.getElementById("home").scrollIntoView("smooth")
          }
        >
          <img src={logo} width={190} />
        </div>

        <div className="nav-links">
          {navItems.map((item) => {
            return (
              <div
                className={`nav-item ${active === item.id ? "active" : ""}`}
                key={item.id}
                onClick={() => {
                  document
                    .getElementById(item.id)
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
