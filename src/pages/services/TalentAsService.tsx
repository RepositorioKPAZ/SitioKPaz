
import { BaseCollaborationPage } from "@/components/collaboration/BaseCollaborationPage";
import { getCollaborationModelData } from "@/utils/collaborationHelpers";

const TalentAsService = () => {
  const data = getCollaborationModelData("talent-as-service");
  
  if (!data) {
    return <div>Model data not found</div>;
  }

  return <BaseCollaborationPage data={data} />;
};

export default TalentAsService;
