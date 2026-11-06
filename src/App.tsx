import profileImage from "./assets/me.jpeg";
import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <div className="about-heading">
          <a>
            <span className="profile-image__inner">
              <span className="profile-image__photo">
                <img src={profileImage} alt="Profile picture" className="profile-image" />
              </span>
            </span>
          </a>
          <div className="about-heading__text">
            <h1 className="about-heading__name">Jimmy Tran</h1>
            <p className="about-heading__role">Software Developer</p>
          </div>
          <div className="about-heading__description">
            <p>
              I’m a Software Developer with a passion for building thoughtful software that solves everyday problems. I enjoy working across the stack, from designing intuitive interfaces to developing the logic that powers them.
            </p>
            <p>
              I like getting involved in every stage of development, from exploring ideas and understanding problems to turning them into working products. I’m curious by nature, enjoy solving complex challenges, and pay attention to the details that make software feel simple and intuitive.
            </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
