import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Sparkles, Loader2, TreePine, Droplets, Sun, Wind, Bird, Coffee } from "lucide-react";

const interests = [
  { id: "hometown", label: "My Hometown", icon: <MapPin className="w-4 h-4" /> },
  { id: "forests", label: "Local Forests", icon: <TreePine className="w-4 h-4" /> },
  { id: "water", label: "Water Resources", icon: <Droplets className="w-4 h-4" /> },
  { id: "agriculture", label: "Agriculture", icon: <Sun className="w-4 h-4" /> },
  { id: "weather", label: "Weather Patterns", icon: <Wind className="w-4 h-4" /> },
  { id: "wildlife", label: "Local Wildlife", icon: <Bird className="w-4 h-4" /> },
  { id: "coffee", label: "Coffee Production", icon: <Coffee className="w-4 h-4" /> },
];

const StoryGenerator = () => {
  const [location, setLocation] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [story, setStory] = useState<string | null>(null);

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const generateStory = async () => {
    if (!location || selectedInterests.length === 0) return;
    
    setIsGenerating(true);
    
    // Simulate AI generation with a realistic delay
    await new Promise((resolve) => setTimeout(resolve, 3000));
    
    const interestLabels = selectedInterests
      .map((id) => interests.find((i) => i.id === id)?.label)
      .join(", ");
    
    // Demo generated story
    const generatedStory = `# Your Climate Story: ${location}

## The Year is 2045

As you walk through the streets of ${location}, the world around you has transformed in ways both subtle and profound. The ${interestLabels.toLowerCase()} you once knew have adapted to a new reality.

### Temperature Changes

Over the past 20 years, average temperatures in your region have risen by **2.3°C**. What once were occasional heat waves have become summer's new normal. The elderly and children have had to adjust their daily routines, with outdoor activities shifting to cooler morning and evening hours.

### Water & Rainfall

The rainfall patterns have shifted dramatically. While annual precipitation has decreased by **15%**, when it does rain, it pours—intense storms that the old drainage systems struggle to handle. Local water management has become a community priority.

### Local Ecosystem

${selectedInterests.includes("wildlife") ? "Many bird species have shifted their migration patterns. The songbirds that used to arrive in April now come in late February, sometimes finding their food sources not yet available." : ""}

${selectedInterests.includes("forests") ? "The forests surrounding your area have changed composition. Heat-loving species are moving northward at about 11 miles per decade, while some native species struggle to adapt." : ""}

${selectedInterests.includes("agriculture") ? "Local farmers have had to completely reimagine their crop choices. Traditional crops have given way to more drought-resistant varieties, and growing seasons have extended by nearly a month." : ""}

${selectedInterests.includes("coffee") ? "Coffee-growing regions worldwide have shifted. The beans that once thrived at certain altitudes now require higher ground, and your morning cup costs considerably more—a reminder of global interconnection." : ""}

### What You Can Do

This story isn't set in stone. Every action matters:
- **Reduce** your carbon footprint through daily choices
- **Advocate** for sustainable policies in your community
- **Connect** with local environmental groups
- **Share** this story to spread awareness

*The future is being written now. You are both the author and the protagonist.*

---
*Generated using climate projections from NASA, NOAA, and IPCC data for the ${location} region.*`;

    setStory(generatedStory);
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="px-6 py-16 bg-gradient-sky">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered Narratives
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Your Personal Climate Story
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enter your location and interests to generate a personalized narrative about how climate change will affect your world over the next 20 years.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Generator Form */}
      <section className="px-6 -mt-8">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-3xl shadow-card p-8"
          >
            {/* Location Input */}
            <div className="mb-8">
              <label className="block font-display font-semibold text-foreground mb-3">
                Your Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter your city, town, or region..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>

            {/* Interest Selection */}
            <div className="mb-8">
              <label className="block font-display font-semibold text-foreground mb-3">
                What interests you most?
              </label>
              <p className="text-sm text-muted-foreground mb-4">
                Select one or more topics to personalize your climate story.
              </p>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <button
                    key={interest.id}
                    onClick={() => toggleInterest(interest.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                      selectedInterests.includes(interest.id)
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background text-foreground border-border hover:border-primary/50"
                    }`}
                  >
                    {interest.icon}
                    {interest.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={generateStory}
              disabled={!location || selectedInterests.length === 0 || isGenerating}
              className="w-full bg-gradient-ocean text-primary-foreground py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-glow transition-all"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating Your Story...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate My Climate Story
                </>
              )}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Generated Story */}
      <AnimatePresence>
        {story && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="px-6 mt-12"
          >
            <div className="container mx-auto max-w-3xl">
              <div className="bg-card rounded-3xl shadow-card p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  {story.split("\n").map((line, index) => {
                    if (line.startsWith("# ")) {
                      return (
                        <h1 key={index} className="font-display text-3xl font-bold text-foreground mb-4">
                          {line.replace("# ", "")}
                        </h1>
                      );
                    }
                    if (line.startsWith("## ")) {
                      return (
                        <h2 key={index} className="font-display text-2xl font-semibold text-foreground mt-8 mb-4">
                          {line.replace("## ", "")}
                        </h2>
                      );
                    }
                    if (line.startsWith("### ")) {
                      return (
                        <h3 key={index} className="font-display text-xl font-semibold text-primary mt-6 mb-3">
                          {line.replace("### ", "")}
                        </h3>
                      );
                    }
                    if (line.startsWith("- ")) {
                      return (
                        <li key={index} className="text-muted-foreground ml-4">
                          {line.replace("- ", "").split("**").map((part, i) => 
                            i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part
                          )}
                        </li>
                      );
                    }
                    if (line.startsWith("*") && line.endsWith("*")) {
                      return (
                        <p key={index} className="italic text-muted-foreground text-sm mt-6">
                          {line.replace(/\*/g, "")}
                        </p>
                      );
                    }
                    if (line.trim() === "---") {
                      return <hr key={index} className="my-8 border-border" />;
                    }
                    if (line.trim()) {
                      return (
                        <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                          {line.split("**").map((part, i) => 
                            i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part
                          )}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
                
                <div className="mt-8 pt-8 border-t border-border flex flex-wrap gap-4">
                  <button className="bg-gradient-earth text-primary-foreground px-6 py-3 rounded-full font-semibold hover:shadow-glow transition-all">
                    Share Your Story
                  </button>
                  <button
                    onClick={() => {
                      setStory(null);
                      setLocation("");
                      setSelectedInterests([]);
                    }}
                    className="bg-muted text-foreground px-6 py-3 rounded-full font-semibold hover:bg-muted/80 transition-colors"
                  >
                    Generate New Story
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StoryGenerator;
