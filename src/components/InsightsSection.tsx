
import { InsightsHeader } from "@/components/insights/InsightsHeader";
import { FeaturedArticleCard } from "@/components/insights/FeaturedArticleCard";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { NewsletterCTA } from "@/components/insights/NewsletterCTA";
import { getAllInsights } from "@/data/insightsData";

export const InsightsSection = () => {
  const insights = getAllInsights();
  const featuredInsight = insights.find(insight => insight.featured);
  const regularInsights = insights.filter(insight => !insight.featured);

  return (
    <section id="insights" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(46,75,206,0.03),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <InsightsHeader />

        {/* Featured Article */}
        {featuredInsight && (
          <FeaturedArticleCard
            title={featuredInsight.title}
            excerpt={featuredInsight.excerpt}
            date={featuredInsight.date}
            readTime={featuredInsight.readTime}
            image={featuredInsight.image}
          />
        )}

        {/* Other Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {regularInsights.map((insight, index) => (
            <ArticleCard
              key={index}
              title={insight.title}
              excerpt={insight.excerpt}
              category={insight.category}
              date={insight.date}
              readTime={insight.readTime}
              image={insight.image}
            />
          ))}
        </div>

        {/* CTA Section */}
        <NewsletterCTA />
      </div>
    </section>
  );
};
