import { useRef } from 'react';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import OperationalOrchestrator from '@/components/OperationalOrchestrator';
import OperationalInput from '@/components/OperationalInput';
import OperationalDashboard from '@/components/OperationalDashboard';
import IntelligenceLayers from '@/components/IntelligenceLayers';
import TrustGovernance from '@/components/TrustGovernance';
import PlatformArchitecture from '@/components/PlatformArchitecture';
import Footer from '@/components/Footer';

export default function Home() {
  const orchestratorRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);

  const handleExperienceOrchestrator = () => {
    orchestratorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewDashboard = () => {
    dashboardRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-background min-h-screen">
      <Navigation />

      <Hero
        onExperienceOrchestrator={handleExperienceOrchestrator}
        onViewDashboard={handleViewDashboard}
      />

      <div ref={orchestratorRef} id="orchestrator">
        <OperationalOrchestrator />
      </div>

      <div id="analytics">
        <OperationalInput />
      </div>

      <div ref={dashboardRef} id="dashboard">
        <OperationalDashboard />
      </div>

      <div id="about">
        <IntelligenceLayers />
      </div>

      <TrustGovernance />

      <PlatformArchitecture />

      <Footer />
    </div>
  );
}
