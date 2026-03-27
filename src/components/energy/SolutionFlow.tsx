import { motion } from "framer-motion";
import { Cpu, Wifi, Brain, Power, RotateCcw, ArrowRight } from "lucide-react";

const steps = [
  { icon: Cpu, label: "Sensors", sub: "CT + Voltage", color: "text-energy-cyan" },
  { icon: Wifi, label: "Edge Agent", sub: "ESP32 / RPi", color: "text-primary" },
  { icon: Brain, label: "Policy Engine", sub: "AI + Rules", color: "text-energy-amber" },
  { icon: Power, label: "Actuation", sub: "Smart Plugs", color: "text-primary" },
  { icon: RotateCcw, label: "Feedback Loop", sub: "Self-tuning", color: "text-energy-cyan" },
];

const SolutionFlow = () => (
  <section className="py-24 relative">
    <div className="absolute inset-0 gradient-radial opacity-50" />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-sm font-display text-primary tracking-wider uppercase">The Solution</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
          Closed-Loop <span className="text-primary">Autonomous</span> Control
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          A five-stage pipeline that senses, decides, acts, and learns — continuously reducing energy waste.
        </p>
      </motion.div>

      {/* Flow diagram */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.label}
            className="flex items-center gap-2 md:gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
          >
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-card border border-border flex flex-col items-center justify-center gap-1 hover:border-primary/40 transition-colors">
                <step.icon className={`w-8 h-8 ${step.color}`} />
                <span className="text-xs font-semibold">{step.label}</span>
              </div>
              <span className="text-[10px] text-muted-foreground mt-1 font-display">{step.sub}</span>
            </div>
            {i < steps.length - 1 && (
              <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionFlow;
