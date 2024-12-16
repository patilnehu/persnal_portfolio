import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technology from "./components/Technology";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-900">
      <div className=" fixed top-0 -z-10 h-full w-full">
        <div class="absolute inset-0 -z-10 max-h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_128%)]"></div>
      </div>
      <div className=" container mx-auto px-5">
        <Navbar />
        <Hero />
        <About />
        <Technology />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
