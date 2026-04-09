import CustomHookProject from "../../Custom_hook/src/App.jsx";
import ProjectShell from "../components/ProjectShell";

function CustomHookPage() {
  return (
    <ProjectShell
      title="Custom Hook"
      description="Fetch posts and comments with the reusable hook project."
    >
      <CustomHookProject />
    </ProjectShell>
  );
}

export default CustomHookPage;
