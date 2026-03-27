import { motion } from "framer-motion";
import { AlertTriangle, Eye, Gauge, BrainCircuit } from "lucide-react";

const problems = [
  {
    icon: Gauge,
    title: "Blind Metering",
    description: "Traditional energy meters only show cumulative kWh readings with no real-time breakdown by room, device, or time window.",
  },
  {
    icon: Eye,
    title: "Zero Visibility",
    description: "Facilities managers can't see which devices are consuming power after hours or detect energy anomalies until the monthly bill arrives.",
  },
  {
    icon: AlertTriangle,
    title: "No Control Over Waste",
    description: "Lights, ACs, and lab equipment run 24/7 with no automated shutoff. Manual rounds are unreliable and labor-intensive.",
  },
  {
    icon: BrainCircuit,
    title: "No Intelligence",
    description: "Without AI-driven analysis, there's no way to predict demand, detect spikes, or optimize schedules based on occupancy patterns.",
  },
];

const ProblemSection = () => (
  <section className="py-24 relative">
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-sm font-display text-destructive tracking-wider uppercase">The Problem</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
          Why Campus Energy Bills Keep <span className="text-destructive">Rising</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Indian campuses lose 15–30% of electricity to inefficiencies that traditional metering can't detect or prevent.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            className="p-6 rounded-xl bg-card border border-border hover:border-destructive/30 transition-colors group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
              <p.icon className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
