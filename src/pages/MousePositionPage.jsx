import MousePositionProject from "../../Mouse_Position/vite-project/src/App.jsx";
import ProjectShell from "../components/ProjectShell";

function MousePositionPage() {
  return (
    <ProjectShell
      title="Mouse Position"
      description="Track the mouse cursor position in real time."
    >
      <MousePositionProject />
    </ProjectShell>
  );
}

export default MousePositionPage;
