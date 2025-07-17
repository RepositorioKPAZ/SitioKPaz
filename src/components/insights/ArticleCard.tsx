
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export const ArticleCard = ({ title, excerpt, category, date, readTime, image }: ArticleCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-200 hover:border-[#2e4bce]/30">
      <div className="relative overflow-hidden">
        <OptimizedImage 
          src={image} 
          alt={title}
          className="w-full h-48 group-hover:scale-105 transition-transform duration-500"
          objectFit="cover"
          width={400}
          height={192}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
        />
        <Badge className="absolute top-4 left-4 bg-white/90 text-[#2e4bce] border-[#2e4bce]/20">
          {category}
        </Badge>
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#2e4bce] transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {date}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="w-3 h-3" />
            {readTime}
          </span>
        </div>
        <Button variant="outline" size="sm" className="w-full border-[#2e4bce] text-[#2e4bce] hover:bg-[#2e4bce] hover:text-white">
          Leer Más <ArrowRight className="ml-2 h-3 w-3" />
        </Button>
      </CardContent>
    </Card>
  );
};
