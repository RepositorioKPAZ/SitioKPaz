
import { BaseCollaborationPage } from "@/components/collaboration/BaseCollaborationPage";
import { getCollaborationModelData } from "@/utils/collaborationHelpers";

const SoftwareFactoryOnDemand = () => {
  const data = getCollaborationModelData("software-factory-ondemand");
  
  if (!data) {
    return <div>Model data not found</div>;
  }

  return <BaseCollaborationPage data={data} />;
};

export default SoftwareFactoryOnDemand;
