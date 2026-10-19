import { Zap } from "lucide-react";

const techStack = [
  "React + TypeScript",
  "Node.js / Python",
  "InfluxDB / TimescaleDB",
  "MQTT Protocol",
  "n8n Automation",
  "ESP32 / Raspberry Pi",
];

const Footer = () => (
  <footer className="py-16 border-t border-border">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-primary" />
            <span className="font-bold text-lg">SmartCampus Energy</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Autonomous energy management for Indian campus buildings. From passive monitoring to closed-loop control.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-display uppercase tracking-widest text-muted-foreground mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-display">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} SmartCampus Energy. Built for sustainable Indian campuses.
      </div>
    </div>
  </footer>
);

export default Footer;
