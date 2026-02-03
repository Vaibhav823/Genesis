import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Thermometer, Droplets, Wind, Activity } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import dataVizBg from "@/assets/data-visualization-bg.jpg";

const temperatureData = [
  { year: "1900", temp: 13.7 },
  { year: "1920", temp: 13.8 },
  { year: "1940", temp: 14.0 },
  { year: "1960", temp: 14.0 },
  { year: "1980", temp: 14.2 },
  { year: "2000", temp: 14.5 },
  { year: "2020", temp: 15.0 },
  { year: "2040", temp: 15.8, projected: true },
  { year: "2060", temp: 16.5, projected: true },
];

const co2Data = [
  { year: "1960", ppm: 315 },
  { year: "1980", ppm: 340 },
  { year: "2000", ppm: 370 },
  { year: "2010", ppm: 390 },
  { year: "2020", ppm: 415 },
  { year: "2030", ppm: 450, projected: true },
  { year: "2040", ppm: 490, projected: true },
];

const seaLevelData = [
  { year: "1900", level: 0 },
  { year: "1950", level: 50 },
  { year: "2000", level: 100 },
  { year: "2020", level: 150 },
  { year: "2040", level: 250, projected: true },
  { year: "2060", level: 400, projected: true },
  { year: "2100", level: 700, projected: true },
];

const metrics = [
  {
    icon: <Thermometer className="w-6 h-6" />,
    label: "Global Avg. Temp",
    value: "+1.2°C",
    change: "since pre-industrial",
    color: "text-accent",
  },
  {
    icon: <Activity className="w-6 h-6" />,
    label: "CO₂ Concentration",
    value: "421 ppm",
    change: "+50% since 1750",
    color: "text-secondary",
  },
  {
    icon: <Droplets className="w-6 h-6" />,
    label: "Sea Level Rise",
    value: "~20cm",
    change: "since 1900",
    color: "text-primary",
  },
  {
    icon: <Wind className="w-6 h-6" />,
    label: "Extreme Events",
    value: "5x",
    change: "more frequent",
    color: "text-coral",
  },
];

const ExploreData = () => {
  const [activeChart, setActiveChart] = useState("temperature");

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero with background */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={dataVizBg}
            alt="Data visualization"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Real-Time Climate Data
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Explore the Numbers
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interactive visualizations of key climate indicators. Data sourced from NASA, NOAA, and IPCC.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics Cards */}
      <section className="px-6 -mt-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-card"
              >
                <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center ${metric.color} mb-4`}>
                  {metric.icon}
                </div>
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
                <div className="text-xs text-muted-foreground/70 mt-1">{metric.change}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Charts */}
      <section className="px-6 py-16">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Climate Trends Over Time
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                { id: "temperature", label: "Temperature" },
                { id: "co2", label: "CO₂ Levels" },
                { id: "sealevel", label: "Sea Level" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveChart(tab.id)}
                  className={`px-5 py-2 rounded-full font-medium transition-all ${
                    activeChart === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-card rounded-3xl shadow-card p-6 md:p-8"
          >
            <div className="h-[400px]">
              {activeChart === "temperature" && (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={temperatureData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                    <YAxis domain={[13, 17]} stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "12px",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="temp"
                      stroke="hsl(12 80% 60%)"
                      strokeWidth={3}
                      dot={{ fill: "hsl(12 80% 60%)", strokeWidth: 2 }}
                      name="Temperature (°C)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}

              {activeChart === "co2" && (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={co2Data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                    <YAxis domain={[300, 500]} stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "12px",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="ppm"
                      stroke="hsl(35 60% 50%)"
                      fill="hsl(35 60% 50% / 0.3)"
                      strokeWidth={3}
                      name="CO₂ (ppm)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}

              {activeChart === "sealevel" && (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={seaLevelData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "12px",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="level"
                      stroke="hsl(185 70% 28%)"
                      fill="hsl(185 70% 28% / 0.3)"
                      strokeWidth={3}
                      name="Sea Level Rise (mm)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </div>

            <div className="mt-6 p-4 bg-muted/50 rounded-xl">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> Dashed lines and lighter areas represent projected values based on current emission trajectories. Actual outcomes depend on global climate action.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="px-6 py-12 bg-muted/30">
        <div className="container mx-auto text-center">
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">
            Data Sources
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {["NASA Earth", "NOAA Climate", "IPCC Reports", "OpenWeatherMap"].map((source) => (
              <span key={source} className="text-muted-foreground font-medium">
                {source}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploreData;
