
import { Navigation } from "@/components/Navigation";
import { InsightsHeader } from "@/components/insights/InsightsHeader";
import { FeaturedArticleCard } from "@/components/insights/FeaturedArticleCard";
import { ArticleCard } from "@/components/insights/ArticleCard";
import { NewsletterCTA } from "@/components/insights/NewsletterCTA";
import { Footer } from "@/components/Footer";
import { insights } from "@/data/insightsData";

const Insights = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Get the last 10 insights
  const lastTenInsights = insights.slice(-10).reverse();
  // The first insight (most recent) will always be featured
  const featuredInsight = lastTenInsights[0];
  // The remaining insights (excluding the first one)
  const regularInsights = lastTenInsights.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation scrollToSection={scrollToSection} />
      
      <main className="pt-20">
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
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
      </main>

      <Footer />
    </div>
  );
};

export default Insights;
