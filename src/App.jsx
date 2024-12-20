import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Resume from "./components/Resume";
import Timeline from "./components/Timeline";

const App = () => {
  return (
    <>
      <div className="fixed -z-10 min-h-screen w-full  [background:radial-gradient(115%_145%_at_90%_10%,#000_10%,#63e_100%)]"></div>
      {/* <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#ffffff_20%,#a8c0ff_60%,#3f2b96_100%)]"></div> */}

      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        <Timeline />
        <Tech />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </>
  );
};

export default App;