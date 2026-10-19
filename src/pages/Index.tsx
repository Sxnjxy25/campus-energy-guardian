import Navbar from "@/components/energy/Navbar";
import HeroSection from "@/components/energy/HeroSection";
import ProblemSection from "@/components/energy/ProblemSection";
import SolutionFlow from "@/components/energy/SolutionFlow";
import LiveDashboard from "@/components/energy/LiveDashboard";
import ArchitectureSection from "@/components/energy/ArchitectureSection";
import AutomationSection from "@/components/energy/AutomationSection";
import MetricsSection from "@/components/energy/MetricsSection";
import DifferentiationSection from "@/components/energy/DifferentiationSection";
import Footer from "@/components/energy/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <SolutionFlow />
    <LiveDashboard />
    <div id="architecture">
      <ArchitectureSection />
    </div>
    <div id="automation">
      <AutomationSection />
    </div>
    <div id="metrics">
      <MetricsSection />
    </div>
    <DifferentiationSection />
    <Footer />
  </div>
);

export default Index;
