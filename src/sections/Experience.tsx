import Tractive from '../assets/0x0.png'
import '../styles/Experience.css'
import SectionTitle from '../ui/SectionTitle'

export default function Experience() {
    return (
        <div className="experience">
            <SectionTitle title="EXPERIENCE" />
            <div className="experience__item">
                <img src={Tractive} alt="Company Logo" className="experience__logo" />
                <div className="experience__details">
                    <h3>Software Developer Intern <span className="experience__company"> Tractive</span></h3>
                    <p className="experience__date">Sep 2024 - Jan 2025</p>
                    <p className="experience__description">
                    Developed new features for Tractive’s eCommerce frontend, improving accessibility and performance at a €100M ARR company.
                    </p>
                    <ul className="experience__technologies">
                        <li>Angular</li>
                        <li>TypeScript</li>
                        <li>Kotlin</li>
                        <li>Spring Boot</li>
                        <li>Thymeleaf</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}