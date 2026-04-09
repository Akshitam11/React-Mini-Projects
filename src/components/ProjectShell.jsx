function ProjectShell({ title, description, children }) {
  return (
    <section className="project-view">
      <div className="project-header">
        <p className="project-label">Mini Project</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="project-stage">{children}</div>
    </section>
  );
}

export default ProjectShell;
