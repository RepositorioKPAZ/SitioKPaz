
import { BaseCollaborationPage } from "@/components/collaboration/BaseCollaborationPage";
import { getCollaborationModelData } from "@/utils/collaborationHelpers";

const TurnkeyProjects = () => {
  const data = getCollaborationModelData("turnkey-projects");
  
  if (!data) {
    return <div>Model data not found</div>;
  }

  return <BaseCollaborationPage data={data} />;
};

export default TurnkeyProjects;
