
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, BookOpen, TrendingUp } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";

interface FeaturedArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

export const FeaturedArticleCard = ({ title, excerpt, date, readTime, image }: FeaturedArticleCardProps) => {
  return (
    <Card className="mb-12 overflow-hidden border-2 border-[#2e4bce]/20 shadow-xl hover:shadow-2xl transition-all duration-300 group">
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative overflow-hidden">
          <OptimizedImage 
            src={image} 
            alt={title}
            className="w-full h-64 md:h-full group-hover:scale-105 transition-transform duration-500"
            objectFit="cover"
            width={600}
            height={400}
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
            priority={true}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2e4bce]/20 to-transparent"></div>
        </div>
        <CardContent className="p-8 flex flex-col justify-center">
          <Badge className="w-fit mb-4 bg-[#2e4bce] text-white">
            <TrendingUp className="w-3 h-3 mr-1" />
            Destacado
          </Badge>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#2e4bce] transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {excerpt}
          </p>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {date}
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                {readTime}
              </span>
            </div>
          </div>
          <Button className="w-fit bg-[#2e4bce] hover:bg-[#1e3a9e] text-white">
            Leer Artículo <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};
