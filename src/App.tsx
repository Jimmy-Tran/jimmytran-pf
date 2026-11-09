
import './App.css'
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Footer from './sections/Footer';

function App() {

  return (
    <>
      <div className="container">
        <section className="profile">
          <Hero />
        </section>
        <Experience />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default App
