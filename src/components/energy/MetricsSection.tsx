import { useMemo } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const comparisonData = [
  { week: "Wk 1", before: 820, after: 780 },
  { week: "Wk 2", before: 850, after: 740 },
  { week: "Wk 3", before: 810, after: 710 },
  { week: "Wk 4", before: 830, after: 690 },
];

const MetricsSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-sm font-display text-primary tracking-wider uppercase">Results</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
          Evaluation <span className="text-primary">Metrics</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        {[
          { metric: "MAPE", value: "< 10%", desc: "Prediction accuracy for load forecasting" },
          { metric: "False Positives", value: "< 3%", desc: "Weekly anomaly detection precision" },
          { metric: "kWh Saved", value: "~15%", desc: "A/B verified savings across rooms" },
        ].map((m, i) => (
          <motion.div
            key={m.metric}
            className="p-6 rounded-xl bg-card border border-border text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <p className="text-4xl font-bold font-display text-primary">{m.value}</p>
            <p className="text-sm font-semibold mt-2">{m.metric}</p>
            <p className="text-xs text-muted-foreground mt-1">{m.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Before vs After chart */}
      <div className="max-w-3xl mx-auto p-6 rounded-xl bg-card border border-border">
        <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wide">Before vs After — kWh per Week</h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={comparisonData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 14%)" />
            <XAxis dataKey="week" tick={{ fontSize: 12, fill: "hsl(220 10% 50%)" }} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "hsl(220 10% 50%)" }} tickLine={false} />
            <Tooltip contentStyle={{ background: "hsl(220 18% 7%)", border: "1px solid hsl(220 15% 14%)", borderRadius: 8, color: "hsl(180 10% 92%)" }} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Bar dataKey="before" fill="hsl(0 72% 55%)" radius={[4, 4, 0, 0]} name="Before" />
            <Bar dataKey="after" fill="hsl(160 100% 45%)" radius={[4, 4, 0, 0]} name="After" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </section>
);

export default MetricsSection;
