

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ServiceTestimonialProps {
  testimonial?: { text: string; author: string; company: string };
}

export const ServiceTestimonial = ({ testimonial }: ServiceTestimonialProps) => {
  if (!testimonial) return null;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Testimonial Content */}
          <div>
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-[#2e4bce]/5 to-white">
              <CardContent className="p-12">
                <Star className="h-12 w-12 text-yellow-500 mb-6" />
                <blockquote className="text-xl font-medium text-gray-900 mb-6 italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="text-[#2e4bce] font-semibold">
                  {testimonial.author} - {testimonial.company}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Testimonial Abstract Figure */}
          <div className="flex justify-center">
            <div className="w-full max-w-md h-80 rounded-3xl shadow-2xl overflow-hidden">
              <svg
                viewBox="0 0 320 320"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="testimonialGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#dbeafe" />
                    <stop offset="50%" stopColor="#bfdbfe" />
                    <stop offset="100%" stopColor="#93c5fd" />
                  </linearGradient>
                  <linearGradient id="testimonialGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#93c5fd" />
                    <stop offset="100%" stopColor="#60a5fa" />
                  </linearGradient>
                  <linearGradient id="testimonialGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>
                  <radialGradient id="testimonialRadial" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#60a5fa" opacity="0.8" />
                    <stop offset="100%" stopColor="#3b82f6" opacity="0.3" />
                  </radialGradient>
                </defs>
                
                {/* Background */}
                <rect width="320" height="320" fill="url(#testimonialGradient1)" />
                
                {/* Central radial element */}
                <circle cx="160" cy="160" r="80" fill="url(#testimonialRadial)" />
                
                {/* Orbiting elements */}
                <circle cx="260" cy="100" r="25" fill="url(#testimonialGradient2)" opacity="0.7" />
                <circle cx="60" cy="220" r="30" fill="url(#testimonialGradient3)" opacity="0.6" />
                
                {/* Abstract polygons */}
                <polygon points="200,60 240,90 220,130 180,120" fill="url(#testimonialGradient2)" opacity="0.5" />
                <polygon points="80,100 120,80 140,120 100,140" fill="url(#testimonialGradient3)" opacity="0.6" />
                
                {/* Curved lines */}
                <path d="M50,160 Q160,80 270,160 Q160,240 50,160" stroke="#60a5fa" strokeWidth="2" fill="none" opacity="0.6" />
                <path d="M160,50 Q240,160 160,270 Q80,160 160,50" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.5" />
                
                {/* Floating elements */}
                <rect x="240" y="200" width="40" height="40" rx="20" fill="url(#testimonialGradient2)" opacity="0.7" transform="rotate(25 260 220)" />
                <rect x="40" y="60" width="35" height="35" rx="17" fill="url(#testimonialGradient3)" opacity="0.6" transform="rotate(-15 57 77)" />
                
                {/* Small accent dots */}
                <circle cx="120" cy="80" r="5" fill="#2563eb" opacity="0.8" />
                <circle cx="280" cy="160" r="7" fill="#60a5fa" opacity="0.7" />
                <circle cx="160" cy="280" r="6" fill="#3b82f6" opacity="0.6" />
                <circle cx="40" cy="160" r="4" fill="#93c5fd" opacity="0.9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

