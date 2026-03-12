export function Header({ currentTime, onMenuClick }) {
  return (
    <header className="bg-white border-b border-border px-4 lg:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div>
            <h1 className="text-xl lg:text-2xl font-bold text-foreground">物流园数据展示平台</h1>
            <p className="text-sm text-muted-foreground hidden sm:block">实时运营监控与数据分析</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Time display */}
          <div className="text-right hidden sm:block">
            <div className="text-sm font-medium text-foreground">
              {currentTime.toLocaleDateString('zh-CN', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                weekday: 'long'
              })}
            </div>
            <div className="text-lg lg:text-xl font-bold text-primary">
              {currentTime.toLocaleTimeString('zh-CN', { 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit'
              })}
            </div>
          </div>
          
          {/* User avatar */}
          <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
            <span className="text-sm font-medium text-primary">管</span>
          </div>
        </div>
      </div>
    </header>
  );
}
