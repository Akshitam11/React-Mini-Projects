import WindowResizeProject from "../../Window_resize/src/App.jsx";
import ProjectShell from "../components/ProjectShell";

function WindowResizePage() {
  return (
    <ProjectShell
      title="Window Resize"
      description="Watch the current browser width and height update live."
    >
      <WindowResizeProject />
    </ProjectShell>
  );
}

export default WindowResizePage;
