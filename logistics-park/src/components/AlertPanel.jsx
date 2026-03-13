import { useState } from 'react';
import { alertsData } from '../data/mockData';
import { WarningIcon, ErrorIcon, InfoIcon, SuccessIcon } from './icons';

const alertConfig = {
  warning: { 
    bg: 'bg-warning/10', 
    border: 'border-warning/30', 
    icon: WarningIcon, 
    text: 'text-warning',
    glow: 'shadow-[0_0_20px_rgba(251,191,36,0.2)]',
    gradient: 'from-warning/20 to-transparent'
  },
  error: { 
    bg: 'bg-error/10', 
    border: 'border-error/30', 
    icon: ErrorIcon, 
    text: 'text-error',
    glow: 'shadow-[0_0_20px_rgba(239,68,68,0.2)]',
    gradient: 'from-error/20 to-transparent'
  },
  info: { 
    bg: 'bg-info/10', 
    border: 'border-info/30', 
    icon: InfoIcon, 
    text: 'text-info',
    glow: 'shadow-[0_0_20px_rgba(59,130,246,0.2)]',
    gradient: 'from-info/20 to-transparent'
  },
  success: { 
    bg: 'bg-success/10', 
    border: 'border-success/30', 
    icon: SuccessIcon, 
    text: 'text-success',
    glow: 'shadow-[0_0_20px_rgba(34,197,94,0.2)]',
    gradient: 'from-success/20 to-transparent'
  },
};

export function AlertPanel() {
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [dismissedAlerts, setDismissedAlerts] = useState([]);

  const visibleAlerts = alertsData.filter(alert => !dismissedAlerts.includes(alert.id));

  const handleDismiss = (alertId, e) => {
    e.stopPropagation();
    setDismissedAlerts([...dismissedAlerts, alertId]);
  };

  return (
    <div className="glass-card p-6 animate-fade-in-up relative overflow-hidden shadow-[0_2px_8px_-2px_rgba(148,163,184,0.5),0_1px_3px_-1px_rgba(148,163,184,0.3)] hover:shadow-[0_16px_32px_-8px_rgba(148,163,184,0.6),0_8px_16px_-4px_rgba(148,163,184,0.4),0_4px_8px_-4px_rgba(59,130,246,0.15)] transition-all duration-300 ease-out">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-accent-red/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <svg className="w-5 h-5 text-accent-red animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            实时告警
          </h3>
          <span className="px-2.5 py-1 bg-error/20 border border-error/30 text-error text-xs font-semibold rounded-full animate-pulse">
            {visibleAlerts.length} 条通知
          </span>
        </div>
        
        <div className="space-y-2 max-h-96 overflow-y-auto overflow-x-hidden glass-scrollbar -mx-2 px-2">
          {visibleAlerts.length === 0 ? (
            <div className="text-center py-8 animate-scale-in">
              <div className="text-4xl mb-2">✓</div>
              <p className="text-muted-foreground text-sm">所有告警已处理</p>
            </div>
          ) : (
            visibleAlerts.map((alert, index) => {
              const config = alertConfig[alert.type];
              const isSelected = selectedAlert === alert.id;
              
              return (
                <div
                  key={alert.id}
                  onClick={() => setSelectedAlert(isSelected ? null : alert.id)}
                  className={`
                    ${config.bg} ${config.border} border
                    rounded-2xl p-3 cursor-pointer
                    transition-all duration-300 ease-out
                    hover:scale-[1.02] shadow-[0_2px_8px_-2px_rgba(148,163,184,0.5),0_1px_3px_-1px_rgba(148,163,184,0.3)] hover:shadow-[0_16px_32px_-8px_rgba(148,163,184,0.6),0_8px_16px_-4px_rgba(148,163,184,0.4),0_4px_8px_-4px_rgba(59,130,246,0.15)] ${config.glow}
                    animate-slide-expand
                    relative overflow-hidden
                  `}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'backwards'
                  }}
                >
                  {/* 背景渐变 */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="flex items-start gap-3 relative z-10">
                    {/* 图标 */}
                    <span className="text-xl flex-shrink-0 animate-bounce text-current">
                      <config.icon className="w-5 h-5" />
                    </span>
                    
                    {/* 内容 */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1 gap-2">
                        <h4 className={`text-sm font-semibold ${config.text} truncate flex-shrink-0`}>
                          {alert.title}
                        </h4>
                        <span className="text-xs text-muted-foreground font-mono whitespace-nowrap flex-shrink-0">
                          {alert.time}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed line-clamp-2">
                        {alert.message}
                      </p>
                      
                      {/* 展开的详情 */}
                      <div className={`
                        overflow-hidden transition-all duration-300 ease-out
                        ${isSelected ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 mt-0 opacity-0'}
                      `}>
                        <div className="pt-3 border-t border-border/50 flex gap-2">
                          <button className="px-3 py-1.5 glass-button text-xs font-medium transition-all duration-200 hover:scale-105">
                            查看详情
                          </button>
                            <button 
                              onClick={(e) => handleDismiss(alert.id, e)}
                              className="px-3 py-1.5 glass-button text-xs font-medium text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-105"
                            >
                            标记已读
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* 展开指示器 */}
                    <svg 
                      className={`
                        w-4 h-4 text-muted-foreground flex-shrink-0
                        transition-transform duration-300
                        ${isSelected ? 'rotate-180' : ''}
                      `}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
