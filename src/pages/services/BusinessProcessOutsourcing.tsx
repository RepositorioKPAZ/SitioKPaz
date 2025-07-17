
import { BaseCollaborationPage } from "@/components/collaboration/BaseCollaborationPage";
import { getCollaborationModelData } from "@/utils/collaborationHelpers";

const BusinessProcessOutsourcing = () => {
  const data = getCollaborationModelData("business-process-outsourcing");
  
  if (!data) {
    return <div>Model data not found</div>;
  }

  return <BaseCollaborationPage data={data} />;
};

export default BusinessProcessOutsourcing;
