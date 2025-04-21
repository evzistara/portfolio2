import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Navbar />
      <section className="mx-10 my-30 ">
        <Hero />
      </section>
      <section className="px-10 py-30 bg-white" id="about">
        <About />
      </section>
      <section className="px-10 py-30" id="skills">
        <Skills />
      </section>
      <section className="px-10 py-30 bg-white" id="projects">
        <Projects />
      </section>
      <section className="px-10 py-30" id="experience">
        <Experience />
      </section>
    
      <Content />
  
      <Footer/>
    </>
  );
}

export default App;
