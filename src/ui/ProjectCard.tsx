import type { Project } from "../data/projects";
import "../styles/ProjectCard.css";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="project-card">

      <a
        href={project.url || "#"}
        className="project-card__preview"
      >
        <img
          src={project.imageUrl}
          alt={`${project.title} preview`}
          loading="lazy"
        />
      </a>

      <div className="project-card__content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-card__meta">
          <span>{project.company}</span>
          <span>·</span>
          <span>{project.role}</span>
          <span>·</span>
          <span>{project.date}</span>
        </div>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__link"
          >
            View project ↗
          </a>
        )}
      </div>

    </article>
  );
}
