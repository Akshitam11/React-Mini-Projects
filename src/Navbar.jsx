import { NavLink } from "react-router-dom";
import { projects } from "./projects";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Mini Projects</h2>

      <div className="link">
        <NavLink to="/">Home</NavLink>
        {projects.map((project) => (
          <NavLink key={project.id} to={project.path}>
            {project.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
