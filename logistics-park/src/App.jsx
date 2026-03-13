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
import { WarehouseIcon, VehicleIcon, OrderIcon, ReportIcon, SettingsIcon } from './components/icons';

// 占位组件 - 用于未实现的模块
// eslint-disable-next-line no-unused-vars
function Placeholder({ title, icon: IconComponent }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
      <div className="text-6xl mb-4 text-accent-blue/50">
        <IconComponent className="w-24 h-24" />
      </div>
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
        return <Placeholder title="仓库管理" icon={WarehouseIcon} />;
      case 'vehicle':
        return <Placeholder title="车辆调度" icon={VehicleIcon} />;
      case 'order':
        return <Placeholder title="订单管理" icon={OrderIcon} />;
      case 'report':
        return <Placeholder title="报表统计" icon={ReportIcon} />;
      case 'settings':
        return <Placeholder title="系统设置" icon={SettingsIcon} />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex relative overflow-hidden">
      {/* 背景装饰 - 微妙的渐变光晕 */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-cyan-400/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      {/* 精细网格背景 */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.5) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* 噪点纹理 overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
      }} />
      
      {/* Sidebar - 固定在左侧 */}
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
      
      {/* 主内容区域 */}
      <div className="flex-1 flex flex-col min-w-0 relative z-10 lg:ml-[17rem]">
        <Header 
          currentTime={currentTime} 
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        />
        
        <main className="flex-1 p-4 lg:p-6 overflow-auto" style={{ maxHeight: 'calc(100vh - 80px)' }}>
          <div className="max-w-7xl mx-auto animate-fade-in-up">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
