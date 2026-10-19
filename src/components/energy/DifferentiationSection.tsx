import { motion } from "framer-motion";
import { DollarSign, Building, BrainCircuit, Power, Shield, Bell } from "lucide-react";

const points = [
  { icon: DollarSign, title: "Low-Cost Retrofit", desc: "Works with existing wiring and infrastructure — no costly rewiring needed." },
  { icon: Building, title: "Campus-Aware", desc: "Integrates timetable APIs, occupancy sensors, and Google Calendar for context." },
  { icon: BrainCircuit, title: "AI-Driven", desc: "EWMA forecasting, anomaly detection, and self-tuning thresholds per room." },
  { icon: Power, title: "Actual Control", desc: "Not just dashboards — real actuation via smart plugs, Modbus, and BMS." },
  { icon: Shield, title: "Safety First", desc: "Kill switches, manual overrides, SMS/Telegram alerts, electrical compliance." },
  { icon: Bell, title: "Human in the Loop", desc: "SMS alerts, Telegram bot, and escalation paths for critical decisions." },
];

const DifferentiationSection = () => (
  <section className="py-24 relative">
    <div className="absolute inset-0 gradient-radial opacity-40" />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-sm font-display text-primary tracking-wider uppercase">Why Us</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
          Beyond <span className="text-primary">Dashboards</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {points.map((p, i) => (
          <motion.div
            key={p.title}
            className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <p.icon className="w-8 h-8 text-primary mb-3" />
            <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentiationSection;
