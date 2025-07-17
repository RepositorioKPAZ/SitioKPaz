
import { OfficeSection } from "./OfficeSection";
import { officesData } from "@/data/footerData";

export const OfficesGrid = () => {
  return (
    <>
      {officesData.map((office) => (
        <OfficeSection
          key={office.country}
          country={office.country}
          flag={<office.flagComponent />}
          address={office.address}
          email={office.email}
        />
      ))}
    </>
  );
};
