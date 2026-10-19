import { motion } from "framer-motion";
import { Clock, Calendar, Users, TrendingUp, ShieldCheck, Power, BarChart3, Settings } from "lucide-react";

const triggers = [
  { icon: Clock, label: "After-hours Schedule" },
  { icon: Calendar, label: "Timetable API" },
  { icon: Users, label: "Occupancy Sensors" },
  { icon: TrendingUp, label: "Spike Detection" },
];

const policies = [
  { icon: ShieldCheck, label: "Whitelist Critical Loads" },
  { icon: Clock, label: "Quiet Hours Rules" },
  { icon: ShieldCheck, label: "Safety Guardrails" },
];

const actions = [
  { icon: Power, label: "Sonoff / Tuya Smart Plugs" },
  { icon: Settings, label: "Modbus / BMS Control" },
];

const feedback = [
  { icon: BarChart3, label: "Measure Post-action Drop" },
  { icon: Settings, label: "Auto-adjust Thresholds" },
];

const Column = ({ title, items, color }: { title: string; items: { icon: any; label: string }[]; color: string }) => (
  <div className="flex flex-col items-center gap-3">
    <h4 className={`text-xs font-display uppercase tracking-widest ${color}`}>{title}</h4>
    <div className="space-y-2 w-full">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border text-sm">
          <item.icon className={`w-4 h-4 shrink-0 ${color}`} />
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  </div>
);

const AutomationSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-sm font-display text-energy-amber tracking-wider uppercase">Core Feature</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
          Closed-Loop <span className="text-energy-amber">Automation</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Trigger → Decide → Act → Learn. A continuous cycle that gets smarter over time.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        <Column title="Triggers" items={triggers} color="text-energy-cyan" />
        <Column title="Policy Engine" items={policies} color="text-energy-amber" />
        <Column title="Actions" items={actions} color="text-primary" />
        <Column title="Feedback" items={feedback} color="text-energy-cyan" />
      </div>

      {/* Demo scenario */}
      <motion.div
        className="mt-16 max-w-3xl mx-auto p-6 rounded-xl bg-card border border-primary/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
          <Power className="w-5 h-5 text-primary" /> Demo Scenario
        </h3>
        <div className="space-y-3 text-sm text-muted-foreground">
          <p>
            <span className="text-foreground font-medium">22:00 —</span> Timetable API confirms no scheduled classes. Occupancy sensors report empty rooms.
          </p>
          <p>
            <span className="text-foreground font-medium">22:05 —</span> Policy engine evaluates: Lab equipment in Room 103 is non-critical. Auto-shutdown triggered via MQTT → Sonoff smart plug OFF.
          </p>
          <p>
            <span className="text-foreground font-medium">22:10 —</span> Power drop of 1.8 kW verified. Threshold stored for future optimization.
          </p>
          <p>
            <span className="text-foreground font-medium">23:30 —</span> Motion detected in Room 103. System automatically rolls back — plug re-enabled, SMS alert sent to facilities manager.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AutomationSection;
