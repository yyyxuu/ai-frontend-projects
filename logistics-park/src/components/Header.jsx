import { useState } from 'react';

export function Header({ currentTime, onMenuClick }) {
  const [prevSeconds, setPrevSeconds] = useState(currentTime.getSeconds());
  const [isAnimating, setIsAnimating] = useState(false);

  // 检测秒数变化以触发动画
  if (currentTime.getSeconds() !== prevSeconds) {
    setPrevSeconds(currentTime.getSeconds());
    setIsAnimating(true);
    // 使用 requestAnimationFrame 延迟重置动画状态
    requestAnimationFrame(() => {
      setTimeout(() => setIsAnimating(false), 300);
    });
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString('zh-CN', { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit'
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('zh-CN', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      weekday: 'long'
    });
  };

  return (
    <header className="glass-card-heavy border-b border-border/50 px-4 lg:px-6 py-4 sticky top-0 z-50 shadow-[0_2px_8px_-2px_rgba(148,163,184,0.5),0_1px_3px_-1px_rgba(148,163,184,0.3)] transition-all duration-300 rounded-none lg:ml-[17rem]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Mobile menu button with animated hamburger */}
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg glass-button group transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
              <span className={`w-5 h-0.5 bg-current rounded-full transition-all duration-200 ${isAnimating ? 'scale-x-90' : 'scale-x-100'}`} />
              <span className="w-5 h-0.5 bg-current rounded-full transition-all duration-200" />
              <span className={`w-5 h-0.5 bg-current rounded-full transition-all duration-200 ${isAnimating ? 'scale-x-90' : 'scale-x-100'}`} />
            </div>
          </button>
          
          {/* Logo and title */}
          <div className="animate-fade-in-left">
            <h1 className="text-xl lg:text-2xl font-bold text-gradient bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              物流园数据展示平台
            </h1>
            <p className="text-sm text-muted-foreground hidden sm:block mt-0.5 animate-fade-in-up animate-delay-100">
              实时运营监控与数据分析
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Time display with digital animation */}
          <div className="text-right hidden sm:block animate-fade-in-right">
            <div className="text-sm font-medium text-muted-foreground animate-fade-in-up">
              {formatDate(currentTime)}
            </div>
            <div className={`text-lg lg:text-xl font-bold text-primary font-mono tracking-wider transition-all duration-300 ${isAnimating ? 'text-accent-blue scale-105' : 'scale-100'}`}>
              {formatTime(currentTime)}
            </div>
          </div>
          
          {/* User avatar with glow effect */}
          <div 
            className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 backdrop-blur-sm border border-accent-blue/30 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-glow hover:border-accent-blue/50 group animate-scale-in"
            role="button"
            tabIndex={0}
            aria-label="User profile"
          >
            <span className="text-sm font-medium text-accent-blue group-hover:text-foreground transition-colors duration-200">
              管
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
