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

// 占位组件 - 用于未实现的模块
function Placeholder({ title, icon }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
      <div className="text-6xl mb-4">{icon}</div>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-muted-foreground">模块开发中...</p>
    </div>
  );
}

// 数据看板内容
function DashboardView() {
  return (
    <div className="space-y-6">
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
  );
}

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

  // 根据 activeTab 渲染不同内容
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView />;
      case 'warehouse':
        return <Placeholder title="仓库管理" icon="🏭" />;
      case 'vehicle':
        return <Placeholder title="车辆调度" icon="🚛" />;
      case 'order':
        return <Placeholder title="订单管理" icon="📦" />;
      case 'report':
        return <Placeholder title="报表统计" icon="📈" />;
      case 'settings':
        return <Placeholder title="系统设置" icon="⚙️" />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-secondary flex">
      <Sidebar 
        isOpen={sidebarOpen} 
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          // 移动端点击后自动关闭侧边栏
          if (window.innerWidth < 1024) {
            setSidebarOpen(false);
          }
        }}
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header 
          currentTime={currentTime} 
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />
        
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
