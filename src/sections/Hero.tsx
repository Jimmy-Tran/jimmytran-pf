import profileImage from "../assets/me.jpeg";
import '../styles/Hero.css'
import RadialBlur from "../ui/RadialBlur";

export default function Hero() {
    return(
        <>
                <div className="about-heading">
                    <div className="about-heading__profile">
                      <div className="profile-image__inner">
                        <span className="profile-image__photo">
                          <img src={profileImage} alt="Profile picture" className="profile-image" />
                        </span>
                      </div>
                      <div className="about-heading__text">
                        <h1 className="about-heading__name">Jimmy Tran</h1>
                        <p className="about-heading__role">Software Developer</p>
                      </div>
                    </div>
                    <div className="about-heading__description">
                      <p>I’m a software developer who enjoys being involved throughout the entire process of building products. I like understanding the problem, exploring ideas, and turning them into practical solutions.</p>
                      <p>
                        I enjoy working closely with others, asking questions and paying attention to the details. Whether it's developing new features or improving existing ones, I focus on building software that is useful, intuitive and easy to use.
                      </p>
                      <div className="about-heading__links">
                        <a href="https://www.linkedin.com/in/jimmytrxn/" className="about-heading__link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://github.com/Jimmy-Tran" className="about-heading__link" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="" className="about-heading__link" target="_blank" rel="noopener noreferrer">Resume</a>
                      </div>
                      </div>
                  </div>
                  <RadialBlur />
                </>
    )
}