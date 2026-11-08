
import './App.css'
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';

function App() {

  return (
    <>
      <div className="container">
        <section className="profile">
          <Hero />
        </section>
        <Experience />
        <Projects />
      </div>
    </>
  )
}

export default App
