
import { JobCard } from "./JobCard";
import { jobOpenings } from "@/data/jobsData";

export const JobOpeningsList = () => {
  return (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Posiciones Abiertas</h3>
      <div className="w-full flex justify-center">
        <iframe
          src="https://ats.kpaz.cl/jobs"
          title="KPaz Job Openings"
          width="100%"
          height="2400"
          style={{ border: 'none', minHeight: '2400px', maxWidth: '1200px' }}
          allowFullScreen
        />
      </div>
    </div>
  );
};
