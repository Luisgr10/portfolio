import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Navbar />
      <main className="pt-12">
        <About />
        <Projects />
        <Articles />
        <Contact />
      </main>
    </>
  );
}

export default App;
