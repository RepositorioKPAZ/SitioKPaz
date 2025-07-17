
interface ServiceWhyKeyProps {
  whyKeyTitle: string;
  whyKeyDescription: string;
}

export const ServiceWhyKey = ({ whyKeyTitle, whyKeyDescription }: ServiceWhyKeyProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          {whyKeyTitle}
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          {whyKeyDescription}
        </p>
      </div>
    </section>
  );
};
