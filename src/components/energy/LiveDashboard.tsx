import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Activity, Zap, Thermometer, AlertTriangle, TrendingDown } from "lucide-react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const generateData = (points: number, base: number, variance: number) =>
  Array.from({ length: points }, (_, i) => ({
    time: `${String(i).padStart(2, "0")}:00`,
    value: +(base + Math.sin(i * 0.5) * variance + (Math.random() - 0.5) * variance * 0.5).toFixed(1),
  }));

const generateDeviceData = () => [
  { device: "AC Units", usage: 42 },
  { device: "Lighting", usage: 18 },
  { device: "Lab Equip", usage: 25 },
  { device: "Computers", usage: 12 },
  { device: "Other", usage: 3 },
];

const LiveDashboard = () => {
  const [liveValue, setLiveValue] = useState(234.5);
  const [currentDraw, setCurrentDraw] = useState(4.2);

  const voltageData = useMemo(() => generateData(24, 230, 8), []);
  const powerData = useMemo(() => generateData(24, 3.5, 1.2), []);
  const deviceData = useMemo(() => generateDeviceData(), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveValue(+(228 + Math.random() * 10).toFixed(1));
      setCurrentDraw(+(3.5 + Math.random() * 2).toFixed(1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const alerts = [
    { type: "spike", msg: "Power spike detected in Room 103 — 2.1 kW above baseline", time: "2 min ago" },
    { type: "anomaly", msg: "Unusual load pattern in Lab Block B after 22:00", time: "15 min ago" },
  ];

  return (
    <section className="py-24" id="dashboard">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-display text-primary tracking-wider uppercase">Live Monitoring</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Real-Time <span className="text-primary">Energy Dashboard</span>
          </h2>
        </motion.div>

        {/* Live metrics strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Zap, label: "Voltage", value: `${liveValue} V`, color: "text-primary" },
            { icon: Activity, label: "Current Draw", value: `${currentDraw} A`, color: "text-energy-cyan" },
            { icon: TrendingDown, label: "Today Saved", value: "12.4 kWh", color: "text-primary" },
            { icon: Thermometer, label: "PF", value: "0.92", color: "text-energy-amber" },
          ].map((m) => (
            <div key={m.label} className="p-5 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-2 mb-2">
                <m.icon className={`w-4 h-4 ${m.color}`} />
                <span className="text-xs text-muted-foreground uppercase tracking-wide">{m.label}</span>
              </div>
              <p className={`text-2xl font-bold font-display ${m.color}`}>{m.value}</p>
            </div>
          ))}
        </div>

        {/* Charts grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Voltage chart */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wide">Voltage (24h)</h3>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={voltageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 14%)" />
                <XAxis dataKey="time" tick={{ fontSize: 10, fill: "hsl(220 10% 50%)" }} tickLine={false} />
                <YAxis domain={[215, 245]} tick={{ fontSize: 10, fill: "hsl(220 10% 50%)" }} tickLine={false} />
                <Tooltip contentStyle={{ background: "hsl(220 18% 7%)", border: "1px solid hsl(220 15% 14%)", borderRadius: 8, color: "hsl(180 10% 92%)" }} />
                <Line type="monotone" dataKey="value" stroke="hsl(160 100% 45%)" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Power consumption */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wide">Power Consumption (kW)</h3>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={powerData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 14%)" />
                <XAxis dataKey="time" tick={{ fontSize: 10, fill: "hsl(220 10% 50%)" }} tickLine={false} />
                <YAxis tick={{ fontSize: 10, fill: "hsl(220 10% 50%)" }} tickLine={false} />
                <Tooltip contentStyle={{ background: "hsl(220 18% 7%)", border: "1px solid hsl(220 15% 14%)", borderRadius: 8, color: "hsl(180 10% 92%)" }} />
                <Area type="monotone" dataKey="value" stroke="hsl(190 90% 50%)" fill="hsl(190 90% 50% / 0.15)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Device breakdown */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wide">Device-Level Usage (%)</h3>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={deviceData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 14%)" horizontal={false} />
                <XAxis type="number" tick={{ fontSize: 10, fill: "hsl(220 10% 50%)" }} tickLine={false} />
                <YAxis type="category" dataKey="device" tick={{ fontSize: 11, fill: "hsl(180 10% 92%)" }} tickLine={false} width={80} />
                <Tooltip contentStyle={{ background: "hsl(220 18% 7%)", border: "1px solid hsl(220 15% 14%)", borderRadius: 8, color: "hsl(180 10% 92%)" }} />
                <Bar dataKey="usage" fill="hsl(160 100% 45%)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Alerts */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-sm font-semibold mb-4 text-muted-foreground uppercase tracking-wide">Active Alerts</h3>
            <div className="space-y-4">
              {alerts.map((a, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-lg bg-energy-surface border border-border">
                  <AlertTriangle className="w-5 h-5 text-energy-amber shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm">{a.msg}</p>
                    <p className="text-xs text-muted-foreground mt-1">{a.time}</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                <Zap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">Auto-shutdown triggered for Room 201 — non-critical load disabled</p>
                  <p className="text-xs text-muted-foreground mt-1">32 min ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDashboard;
