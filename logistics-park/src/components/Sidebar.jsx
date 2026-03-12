const navItems = [
  { id: 'dashboard', name: '数据看板', icon: '📊' },
  { id: 'warehouse', name: '仓库管理', icon: '🏭' },
  { id: 'vehicle', name: '车辆调度', icon: '🚛' },
  { id: 'order', name: '订单管理', icon: '📦' },
  { id: 'report', name: '报表统计', icon: '📈' },
  { id: 'settings', name: '系统设置', icon: '⚙️' },
];

export function Sidebar({ isOpen, activeTab, setActiveTab }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-border
        transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:z-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        flex flex-col
      `}>
        {/* Logo */}
        <div className="h-16 flex items-center px-6 border-b border-border flex-shrink-0">
          <span className="text-xl font-bold text-primary">物流园</span>
        </div>
        
        {/* Navigation - scrollable if needed */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium
                transition-colors
                ${activeTab === item.id 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-foreground hover:bg-secondary'}
              `}
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>
        
        {/* Quick stats - static positioning */}
        <div className="flex-shrink-0 p-4 border-t border-border">
          <div className="bg-secondary rounded-lg p-4">
            <div className="text-xs text-muted-foreground mb-2">今日概况</div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>入库</span>
                <span className="font-medium">856 吨</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>出库</span>
                <span className="font-medium">723 吨</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>待处理</span>
                <span className="font-medium text-orange-600">42 单</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
