
import { JobCard } from "./JobCard";
import { jobOpenings } from "@/data/jobsData";

export const JobOpeningsList = () => {
  return (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Posiciones Abiertas</h3>
      
      <div className="grid gap-6">
        {jobOpenings.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
};
