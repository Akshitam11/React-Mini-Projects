import FormUseRefProject from "../../Form_useref/src/App.jsx";
import ProjectShell from "../components/ProjectShell";

function FormUseRefPage() {
  return (
    <ProjectShell
      title="Form UseRef"
      description="Submit and manage table rows with refs and local state."
    >
      <FormUseRefProject />
    </ProjectShell>
  );
}

export default FormUseRefPage;
