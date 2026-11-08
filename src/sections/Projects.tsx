import { projects } from "../data/projects";
import ProjectCard from "../ui/ProjectCard";
import "../styles/Projects.css";
import SectionTitle from "../ui/SectionTitle";

export default function Projects() {
  return (
    <section className="projects" id="projects">
        <SectionTitle title="PROJECTS" />
      <div className="projects__list">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>

    </section>
  );
}
