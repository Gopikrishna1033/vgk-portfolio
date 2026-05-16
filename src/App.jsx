import Navbar from "./components/Navbar";
import Home from "./components/pages/Home/index";
import About from "./components/pages/About/index";
import Projects from "./components/pages/Projects/index";
import Skills from "./components/pages/Skills/index";
import Contact from "./components/pages/Contact/index";
function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
