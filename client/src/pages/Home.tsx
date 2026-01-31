import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Compass, Lightbulb, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  const features = [
    {
      icon: Compass,
      title: "Guided Paths",
      description: "Step-by-step career roadmaps tailored to your education level.",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: BookOpen,
      title: "Detailed Insights",
      description: "Explore in-depth information about various fields and specializations.",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      icon: TrendingUp,
      title: "Future Ready",
      description: "Discover careers with high growth potential and market demand.",
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 lg:py-32 overflow-hidden rounded-3xl border border-border/50 shadow-sm mb-16 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(to bottom right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url("/backgrounds/medical-bg.jpg")' }}>
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center rounded-full border border-white/20 px-3 py-1 text-sm font-medium bg-white/10 backdrop-blur-sm mb-6 animate-enter text-white">
            <Lightbulb className="mr-2 h-4 w-4 text-amber-400" />
            <span>Find your true calling</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white mb-6 animate-enter [animation-delay:100ms]">
            Navigate Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Future Career
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 animate-enter [animation-delay:200ms]">
            Not sure what to do after 10th or 12th? Explore structured career paths, 
            discover new opportunities, and make informed decisions about your future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-enter [animation-delay:300ms]">
            <Link href="/career-path">
              <Button size="lg" className="h-14 px-8 text-base rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                Explore Paths <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            {/* <Button variant="outline" size="lg" className="h-14 px-8 text-base rounded-full">
              Learn How It Works
            </Button> */}
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-display mb-4">Why Use CareerGuide?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We simplify the complex world of career choices into easy-to-understand pathways.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full p-6 border-border/50 hover:border-border transition-colors group hover:shadow-md">
                <div className={`${feature.bg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-7 w-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Ready to start your journey?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Choose your current education level and unlock a world of possibilities tailored just for you.
          </p>
          <Link href="/career-path">
            <Button size="lg" variant="secondary" className="h-14 px-8 text-base font-semibold rounded-full shadow-xl">
              Start Exploring Now
            </Button>
          </Link>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </section>
    </Layout>
  );
}
