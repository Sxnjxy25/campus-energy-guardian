import { motion } from "framer-motion";
import { Zap, ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 gradient-radial" />
      
      {/* Animated glow orb */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, hsl(160 100% 45% / 0.3), transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary font-display">SMART CAMPUS ENERGY</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            <span className="text-foreground">Smart Energy</span>
            <br />
            <span className="text-primary glow-text">Optimization</span>
            <br />
            <span className="text-foreground">for Campus Buildings</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            From passive monitoring to autonomous energy control. Reduce waste, automate decisions, and save up to 15% on electricity — all with retrofit-ready IoT.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-semibold text-base px-8 py-6 gap-2">
              View Live Dashboard <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary font-semibold text-base px-8 py-6 gap-2">
              <PlayCircle className="w-5 h-5" /> See How It Works
            </Button>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { value: "15%", label: "Energy Savings", color: "text-primary" },
            { value: "<10%", label: "MAPE Accuracy", color: "text-energy-cyan" },
            { value: "<3%", label: "False Positives", color: "text-energy-amber" },
            { value: "4 wks", label: "Time to Results", color: "text-primary" },
          ].map((stat) => (
            <div key={stat.label} className="p-4 rounded-xl bg-card border border-border">
              <p className={`text-2xl md:text-3xl font-bold font-display ${stat.color}`}>{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
