
import React from 'react';
import TimeDisplay from '../components/TimeDisplay';
import MetricCard from '../components/MetricCard';
import TorqueChart from '../components/TorqueChart';
import AngleChart from '../components/AngleChart';
import { Settings } from 'lucide-react';

const Index = () => {
  return (
    <div className="nokia-dashboard">
      <div className="nokia-container">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-4xl font-bold tracking-wider">NOKIA</div>
          <div className="flex items-center gap-4">
            <TimeDisplay />
            <button className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
              <Settings className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>

        {/* Dashboard Title */}
        <h1 className="text-4xl font-bold mb-8">AI Industrial Dashboard</h1>

        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Chassis ID"
            value="A215"
            iconType="chassis"
          />
          
          <MetricCard
            title="Palette ID"
            value="573102"
            iconType="palette"
          />
          
          <MetricCard
            title="Torque Range"
            value="1500-1900"
            unit="N-m"
            iconType="torque"
          />
          
          <MetricCard
            title="Angle"
            value="042"
            iconType="angle"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TorqueChart />
          <AngleChart />
        </div>
      </div>
    </div>
  );
};

export default Index;
