
import { RazonDeSerHeader } from "./RazonDeSerHeader";
import { RazonDeSerContent } from "./RazonDeSerContent";
import { RazonDeSerPillars } from "./RazonDeSerPillars";

export const RazonDeSerSection = () => {
  return (
    <section className="mb-20">
      <RazonDeSerHeader />
      <div className="w-full">
        <RazonDeSerContent />
        <RazonDeSerPillars />
      </div>
    </section>
  );
};
