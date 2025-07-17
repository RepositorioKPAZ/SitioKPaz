
import { BaseCollaborationPage } from "@/components/collaboration/BaseCollaborationPage";
import { getCollaborationModelData } from "@/utils/collaborationHelpers";

const ApplicationsManaged = () => {
  const data = getCollaborationModelData("applications-managed");
  
  if (!data) {
    return <div>Model data not found</div>;
  }

  return <BaseCollaborationPage data={data} />;
};

export default ApplicationsManaged;
