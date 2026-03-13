import { useState } from 'react';
import { 
  DashboardIcon, 
  WarehouseIcon, 
  VehicleIcon, 
  OrderIcon, 
  ReportIcon, 
  SettingsIcon 
} from './icons';

const navItems = [
  { id: 'dashboard', name: '数据看板', icon: DashboardIcon },
  { id: 'warehouse', name: '仓库管理', icon: WarehouseIcon },
  { id: 'vehicle', name: '车辆调度', icon: VehicleIcon },
  { id: 'order', name: '订单管理', icon: OrderIcon },
  { id: 'report', name: '报表统计', icon: ReportIcon },
  { id: 'settings', name: '系统设置', icon: SettingsIcon },
];

export function Sidebar({ isOpen, activeTab, setActiveTab }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <>
      {/* Mobile overlay with smooth fade */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden animate-fade-in transition-opacity duration-300"
          onClick={() => setActiveTab(activeTab)}
        />
      )}
      
      {/* Sidebar - 桌面端固定，移动端抽屉 - 直角设计，顶部与 Header 对齐 */}
      <aside className={`
        fixed top-[5.25rem] left-2 bottom-2 z-40 h-[calc(100vh-6.25rem)] w-[15.5rem] glass-card-heavy
        transform transition-all duration-300 ease-out
        lg:translate-x-0 lg:z-auto lg:h-[calc(100vh-6.25rem)] lg:w-64
        ${isOpen ? 'translate-x-0 shadow-[0_16px_32px_-8px_rgba(148,163,184,0.6),0_8px_16px_-4px_rgba(148,163,184,0.4),0_4px_8px_-4px_rgba(59,130,246,0.15)]' : '-translate-x-full lg:shadow-[0_2px_8px_-2px_rgba(148,163,184,0.5),0_1px_3px_-1px_rgba(148,163,184,0.3)] lg:block'}
        flex flex-col
        overflow-hidden
        lg:border border-border/50
      `}>
        {/* Logo with gradient border */}
        <div className="h-16 flex items-center px-6 border-b border-border/50 flex-shrink-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
          <span className="text-xl font-bold text-gradient bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent relative z-10">
            物流园
          </span>
        </div>
        
        {/* Navigation - scrollable if needed */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1 flex-shrink-0 glass-scrollbar">
          {navItems.map((item, index) => {
            const isActive = activeTab === item.id;
            const isHovered = hoveredItem === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium
                  transition-all duration-200 ease-out relative overflow-hidden group
                  animate-fade-in-left
                  ${isActive 
                    ? 'text-foreground shadow-lg shadow-accent-blue/20' 
                    : 'text-muted-foreground hover:text-foreground'}
                `}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: 'backwards'
                }}
              >
                {/* Active gradient background */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 via-accent-purple/15 to-transparent rounded-2xl transition-transform duration-500" />
                )}
                
                {/* Hover background */}
                <div className={`
                  absolute inset-0 bg-white/5 rounded-2xl transition-all duration-200
                  ${isHovered && !isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
                `} />
                
                {/* Left accent bar for active state */}
                <div className={`
                  absolute left-0 top-1/2 -translate-y-1/2 w-1 rounded-r-full
                  bg-gradient-to-b from-accent-blue to-accent-purple
                  transition-all duration-300 ease-out
                  ${isActive ? 'h-8 opacity-100' : 'h-0 opacity-0'}
                `} />
                
                {/* Icon with scale animation */}
                <span className={`
                  text-lg relative z-10 transition-all duration-200 ease-out
                  ${isHovered || isActive ? 'scale-125 -translate-x-0.5' : 'scale-100'}
                  ${isActive ? 'drop-shadow-[0_0_8px_rgba(120,150,255,0.5)]' : ''}
                `}>
                  <item.icon className="w-5 h-5" />
                </span>
                
                {/* Label */}
                <span className="relative z-10 flex-1 text-left truncate whitespace-nowrap">
                  {item.name}
                </span>
                
                {/* Active indicator dot */}
                <div className={`
                  w-1.5 h-1.5 rounded-full bg-accent-blue
                  transition-all duration-300 ease-out
                  ${isActive ? 'opacity-100 scale-100 shadow-glow' : 'opacity-0 scale-50'}
                `} />
              </button>
            );
          })}
        </nav>
        
        {/* Quick stats card with glassmorphism */}
        <div className="flex-shrink-0 p-4 border-t border-slate-200">
          <div className="glass-card-light p-4 animate-fade-in-up animate-delay-500 group hover:shadow-[0_16px_32px_-8px_rgba(148,163,184,0.6),0_8px_16px_-4px_rgba(148,163,184,0.4),0_4px_8px_-4px_rgba(59,130,246,0.15)] shadow-[0_2px_8px_-2px_rgba(148,163,184,0.5),0_1px_3px_-1px_rgba(148,163,184,0.3)] transition-all duration-300 ease-out mx-0">
            <div className="text-xs text-slate-500 mb-3 font-semibold uppercase tracking-wider flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium">今日概况</span>
            </div>
            <div className="space-y-2.5">
              <div className="flex justify-between text-sm group/item">
                <span className="text-slate-500 transition-colors duration-200 group-hover/item:text-slate-700">入库</span>
                <span className="font-semibold text-slate-700 group-hover/item:text-emerald-600 transition-colors duration-200">856 吨</span>
              </div>
              <div className="flex justify-between text-sm group/item">
                <span className="text-slate-500 transition-colors duration-200 group-hover/item:text-slate-700">出库</span>
                <span className="font-semibold text-slate-700 group-hover/item:text-blue-600 transition-colors duration-200">723 吨</span>
              </div>
              <div className="flex justify-between text-sm group/item">
                <span className="text-slate-500 transition-colors duration-200 group-hover/item:text-slate-700">待处理</span>
                <span className="font-semibold text-amber-600 group-hover/item:text-amber-700 transition-colors duration-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  42 单
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
