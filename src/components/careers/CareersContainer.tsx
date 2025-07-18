import { Navigation } from "@/components/Navigation";
import { CareersHeader } from "@/components/careers/CareersHeader";
import { BenefitsGrid } from "@/components/careers/BenefitsGrid";
// Se elimina la importación de JobOpeningsList ya que no se usará
// import { JobOpeningsList } from "@/components/careers/JobOpeningsList";
import { CareersCTA } from "@/components/careers/CareersCTA";
import { Footer } from "@/components/Footer";

const Careers = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Navigation scrollToSection={scrollToSection} />

            <main className="pt-20">
                <section className="py-24 bg-gradient-to-br from-white via-blue-50/20 to-slate-50 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(46,75,206,0.03),transparent_50%)]"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                        <CareersHeader />
                        <BenefitsGrid />

                        {/* ----- SECCIÓN MODIFICADA ----- */}
                        <div id="job-openings" className="py-12">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-12">
                                Oportunidades Laborales
                            </h2>
                            <iframe
                                src="https://ats.kpaz.cl"
                                title="Job Openings"
                                className="w-full h-[800px] border-0 rounded-lg shadow-lg"
                                allow="fullscreen"
                            ></iframe>
                        </div>
                        {/* ----- FIN DE LA SECCIÓN MODIFICADA ----- */}

                        <CareersCTA />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Careers;