import OnlineOfflineProject from "../../Online_Offline/src/App.jsx";
import ProjectShell from "../components/ProjectShell";

function OnlineOfflinePage() {
  return (
    <ProjectShell
      title="Online Offline"
      description="Show the current internet connectivity status."
    >
      <OnlineOfflineProject />
    </ProjectShell>
  );
}

export default OnlineOfflinePage;
