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
      <section className="mx-10 my-30">
        <Hero />
      </section>
      <section className="px-10 py-30 bg-white">
        <About />
      </section>
      <section className="mx-10 my-30">
        <Skills />
      </section>
      <section className="px-10 py-30 bg-white">
        <Projects />
      </section>
      <section className="mx-10 my-30">
        <Experience />
      </section>
    
      <Content />
      <Footer />
    </>
  );
}

export default App;
