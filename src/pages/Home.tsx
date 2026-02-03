import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, Sparkles, Globe, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/hero-earth.jpg";

const Home = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 1.1]);

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Location-Based Stories",
      description: "Enter your hometown and discover how climate change will reshape your local environment over the next 20 years.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "AI-Powered Narratives",
      description: "Our AI transforms complex climate data into personal, emotionally resonant stories you can understand and share.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Real-Time Data",
      description: "Pulling from NASA, NOAA, and global weather databases to ensure accuracy and relevance in every projection.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Impact",
      description: "Join thousands who are turning data into action through personal understanding and emotional connection.",
    },
  ];

  const stats = [
    { value: "2.5°C", label: "Avg. Warming Predicted" },
    { value: "40%", label: "Species at Risk" },
    { value: "1B+", label: "People Affected" },
    { value: "20yr", label: "Critical Window" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt="Earth from space"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-70" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6 text-primary-foreground">
              <Sparkles className="w-4 h-4" />
              Data to Empathy Bridge
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Climate Data,{" "}
              <span className="text-gradient-sunset">Your Story</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Transform abstract climate statistics into personal, locally relevant narratives. 
              Because people connect with stories, not spreadsheets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/story-generator"
                className="bg-gradient-ocean text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:shadow-glow transition-all hover:scale-105"
              >
                Discover Your Climate Story
              </Link>
              <Link
                to="/explore"
                className="glass text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Explore the Data
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6 text-primary-foreground/60" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 px-6 bg-gradient-sky">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              The Problem with Climate Data
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're drowning in climate data—temperature charts, carbon PPM graphs, sea-level metrics—yet 
              public action lags behind. The "deficit model" of science communication suggests that more data 
              leads to action, but <strong className="text-foreground">psychology proves otherwise</strong>.
            </p>
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <p className="text-xl font-display text-foreground italic">
                "People connect with stories, not statistics. There is a lack of tools that translate 
                complex climate datasets into personal, relatable, and visually compelling narratives."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-foreground">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient-ocean mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/60 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform transforms raw climate data into personalized, emotionally resonant narratives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card hover:shadow-glow transition-shadow group"
              >
                <div className="w-12 h-12 bg-gradient-ocean rounded-xl flex items-center justify-center text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
        </div>
        
        <div className="container mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to See Your Climate Future?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Enter your location and discover a personalized narrative about how climate change will affect your world.
            </p>
            <Link
              to="/story-generator"
              className="inline-flex items-center gap-2 bg-gradient-sunset text-primary-foreground px-10 py-5 rounded-full text-xl font-semibold hover:shadow-glow transition-all hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              Generate Your Story
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
