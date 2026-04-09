import { Link } from "react-router-dom";
import { projects } from "./projects";

function Home() {
  return (
    <div className="Main">
      <p className="hero-tag">React Router Mini Projects</p>
      <h1>Open every mini project from one app</h1>
      <p className="hero-copy">
        The root project is now the single entry point. Choose any mini project
        below to open it with routing.
      </p>

      <div className="project-grid">
        {projects.map((project) => (
          <Link key={project.id} to={project.path} className="project-card">
            <span className="project-card-title">{project.name}</span>
            <span className="project-card-copy">{project.description}</span>
            <span className="project-card-action">Open project</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
