import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Users, Lightbulb, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import beforeAfterImage from "@/assets/before-after-climate.jpg";

const impactPoints = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Combat Climate Fatigue",
    description: "By making the issue personal and tangible, we help overcome the emotional exhaustion many feel about climate change.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Empower Educators",
    description: "Provide journalists and teachers with new tools to explain complex science in relatable, engaging ways.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Bridge the Gap",
    description: "Connect scientific data to public empathy, transforming abstract statistics into actionable understanding.",
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Inspire Action",
    description: "When people see their personal stake in climate outcomes, they're more likely to take meaningful action.",
  },
];

const testimonials = [
  {
    quote: "Finally, climate data that feels real. Seeing how my hometown will change made me actually care about reducing my footprint.",
    author: "Priya M.",
    role: "Teacher, Mumbai",
  },
  {
    quote: "We used EmpathyBridge in our environmental science class. Students were more engaged than with any traditional lecture.",
    author: "Dr. James Chen",
    role: "Professor, UC Berkeley",
  },
  {
    quote: "As a journalist, this tool helps me tell climate stories that resonate with local communities.",
    author: "Sarah Johnson",
    role: "Environmental Reporter",
  },
];

const Impact = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
              <Heart className="w-4 h-4" />
              Why It Matters
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              From Data to Empathy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See the real-world impact of translating climate science into personal stories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Before/After Slider */}
      <section className="px-6 py-16">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Visualizing Climate Impact
            </h2>
            <p className="text-muted-foreground">
              Drag the slider to see potential environmental changes over time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-card group"
          >
            <div className="relative aspect-video">
              <img
                src={beforeAfterImage}
                alt="Climate change before and after"
                className="w-full h-full object-cover"
              />
              
              {/* Slider overlay */}
              <div
                className="absolute inset-0 bg-foreground/80"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-card/90 px-4 py-2 rounded-full font-display font-semibold text-foreground">
                    2045 Projection
                  </span>
                </div>
              </div>

              {/* Slider handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-primary-foreground cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center shadow-lg">
                  <div className="flex gap-0.5">
                    <ChevronLeft className="w-4 h-4 text-foreground" />
                    <ChevronRight className="w-4 h-4 text-foreground" />
                  </div>
                </div>
              </div>

              {/* Invisible slider input */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
              />
            </div>

            <div className="absolute bottom-4 left-4 bg-card/90 px-3 py-1 rounded-full text-sm font-medium">
              Today
            </div>
            <div className="absolute bottom-4 right-4 bg-accent/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              Future
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Points */}
      <section className="px-6 py-16 bg-muted/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Impact
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              How EmpathyBridge is changing the way people understand and respond to climate change.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card text-center"
              >
                <div className="w-14 h-14 bg-gradient-ocean rounded-2xl flex items-center justify-center text-primary-foreground mx-auto mb-4">
                  {point.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              What People Are Saying
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative bg-card rounded-3xl shadow-card p-8 md:p-12"
          >
            <div className="text-center">
              <p className="text-xl md:text-2xl text-foreground font-display italic mb-6">
                "{testimonials[activeTestimonial].quote}"
              </p>
              <div>
                <div className="font-semibold text-foreground">
                  {testimonials[activeTestimonial].author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[activeTestimonial].role}
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === activeTestimonial ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-16 bg-gradient-hero">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50K+", label: "Stories Generated" },
              { value: "120+", label: "Countries Reached" },
              { value: "89%", label: "User Engagement" },
              { value: "4.8★", label: "User Rating" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
