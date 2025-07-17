
import { Quote } from "lucide-react";

interface ServiceTestimonialProps {
  testimonial?: { text: string; author: string; company: string };
}

export const ServiceTestimonial = ({ testimonial }: ServiceTestimonialProps) => {
  if (!testimonial) return null;

  return (
    <section className="py-16 bg-[#2e4bce]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Quote className="w-12 h-12 text-blue-200 mx-auto mb-6" />
        
        <blockquote className="text-xl md:text-2xl text-white font-medium mb-8 leading-relaxed">
          "{testimonial.text}"
        </blockquote>
        
        <div className="text-blue-200">
          <div className="font-semibold">{testimonial.author}</div>
          <div>{testimonial.company}</div>
        </div>
      </div>
    </section>
  );
};
