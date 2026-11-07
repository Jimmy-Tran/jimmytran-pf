
import './App.css'
import Hero from './sections/Hero';
import Experience from './sections/Experience';

function App() {

  return (
    <>
      <div className="container">
        <section className="profile">
          <Hero />
        </section>
        <Experience />
      </div>
    </>
  )
}

export default App
