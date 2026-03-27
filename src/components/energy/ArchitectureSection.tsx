import { motion } from "framer-motion";
import { Cpu, Cloud, Database, Wifi, Server, Terminal } from "lucide-react";

const layers = [
  {
    title: "Edge Layer",
    icon: Cpu,
    color: "border-energy-cyan/30",
    items: ["ESP32 / Raspberry Pi", "CT & Voltage Sensors", "Local decision-making", "Offline fallback mode"],
  },
  {
    title: "Communication",
    icon: Wifi,
    color: "border-primary/30",
    items: [
      "MQTT Topics:",
      "campus/floor1/room101/power",
      "campus/floor1/room101/control",
      "Modbus for BMS integration",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "border-energy-amber/30",
    items: ["InfluxDB / TimescaleDB", "n8n workflows for alerts", "Policy Engine (rules + ML)", "REST & MQTT APIs"],
  },
  {
    title: "Intelligence",
    icon: Cloud,
    color: "border-primary/30",
    items: ["EWMA forecasting", "Anomaly detection", "Seasonal trend analysis", "Self-tuning thresholds"],
  },
];

const ArchitectureSection = () => (
  <section className="py-24 relative">
    <div className="absolute inset-0 grid-pattern opacity-20" />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-sm font-display text-primary tracking-wider uppercase">Architecture</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
          System <span className="text-primary">Architecture</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Four interconnected layers working together to deliver autonomous energy management.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {layers.map((layer, i) => (
          <motion.div
            key={layer.title}
            className={`p-6 rounded-xl bg-card border ${layer.color} hover:bg-energy-surface transition-colors`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <layer.icon className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-lg font-bold mb-3">{layer.title}</h3>
            <ul className="space-y-2">
              {layer.items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                  <Terminal className="w-3 h-3 mt-1 text-primary shrink-0" />
                  <span className={item.includes("/") ? "font-display text-xs" : ""}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ArchitectureSection;
