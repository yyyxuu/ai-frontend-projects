import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { StatsCards } from './components/StatsCard';
import { TrafficChart } from './components/TrafficChart';
import { VehicleChart } from './components/VehicleChart';
import { WarehousePie } from './components/WarehousePie';
import { DataTable } from './components/DataTable';
import { EfficiencyPanel } from './components/EfficiencyPanel';
import { AlertPanel } from './components/AlertPanel';
import { TemperatureMonitor } from './components/TemperatureMonitor';
import { WarehouseMap } from './components/WarehouseMap';
import { ShiftBoard } from './components/ShiftBoard';
import { QuickActions } from './components/QuickActions';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-secondary flex">
      <Sidebar 
        isOpen={sidebarOpen} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header 
          currentTime={currentTime} 
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />
        
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Quick Actions */}
            <QuickActions />
            
            {/* Stats Cards */}
            <StatsCards />
            
            {/* Efficiency Panel */}
            <EfficiencyPanel />
            
            {/* Main Grid - Left Column */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <WarehouseMap />
                <TemperatureMonitor />
              </div>
              
              <div className="space-y-6">
                <ShiftBoard />
                <AlertPanel />
              </div>
            </div>
            
            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TrafficChart />
              <VehicleChart />
            </div>
            
            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <WarehousePie />
              <DataTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
