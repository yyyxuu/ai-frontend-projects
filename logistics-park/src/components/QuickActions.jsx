import { quickActions } from '../data/mockData';
import { 
  InboundIcon, 
  OutboundIcon, 
  DispatchIcon, 
  InventoryIcon, 
  ClipboardIcon, 
  WarningIcon 
} from './icons';

const iconMap = {
  '📥': InboundIcon,
  '📤': OutboundIcon,
  '🚛': DispatchIcon,
  '📊': InventoryIcon,
  '📋': ClipboardIcon,
  '⚠️': WarningIcon,
};

const colorConfig = {
  blue: { 
    bg: 'bg-blue-500/10', 
    hover: 'hover:bg-blue-500/20', 
    text: 'text-blue-400', 
    glow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]',
    border: 'border-blue-500/30',
    iconGlow: 'group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]'
  },
  green: { 
    bg: 'bg-green-500/10', 
    hover: 'hover:bg-green-500/20', 
    text: 'text-green-400', 
    glow: 'hover:shadow-[0_0_30px_rgba(34,197,94,0.5)]',
    border: 'border-green-500/30',
    iconGlow: 'group-hover:drop-shadow-[0_0_12px_rgba(34,197,94,0.8)]'
  },
  orange: { 
    bg: 'bg-orange-500/10', 
    hover: 'hover:bg-orange-500/20', 
    text: 'text-orange-400', 
    glow: 'hover:shadow-[0_0_30px_rgba(251,146,60,0.5)]',
    border: 'border-orange-500/30',
    iconGlow: 'group-hover:drop-shadow-[0_0_12px_rgba(251,146,60,0.8)]'
  },
  purple: { 
    bg: 'bg-purple-500/10', 
    hover: 'hover:bg-purple-500/20', 
    text: 'text-purple-400', 
    glow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]',
    border: 'border-purple-500/30',
    iconGlow: 'group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]'
  },
  pink: { 
    bg: 'bg-pink-500/10', 
    hover: 'hover:bg-pink-500/20', 
    text: 'text-pink-400', 
    glow: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]',
    border: 'border-pink-500/30',
    iconGlow: 'group-hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.8)]'
  },
  red: { 
    bg: 'bg-red-500/10', 
    hover: 'hover:bg-red-500/20', 
    text: 'text-red-400', 
    glow: 'hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]',
    border: 'border-red-500/30',
    iconGlow: 'group-hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.8)]'
  },
};

export function QuickActions() {
  return (
    <div className="glass-card p-6 animate-fade-in-up shadow-[0_2px_8px_-2px_rgba(148,163,184,0.5),0_1px_3px_-1px_rgba(148,163,184,0.3)] hover:shadow-[0_16px_32px_-8px_rgba(148,163,184,0.6),0_8px_16px_-4px_rgba(148,163,184,0.4),0_4px_8px_-4px_rgba(59,130,246,0.15)] transition-all duration-300 ease-out">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">快捷操作</h3>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-pulse delay-100" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse delay-200" />
        </div>
      </div>
      
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
        {quickActions.map((action, index) => {
          const config = colorConfig[action.color];
          
          return (
            <button
              key={action.id}
              className={`
                group relative flex flex-col items-center gap-2 p-4 rounded-3xl
                ${config.bg} ${config.hover} ${config.text}
                border ${config.border}
                transition-all duration-300 ease-out
                ${config.glow}
                hover:-translate-y-1 hover:scale-105
                active:scale-95 active:duration-150
                animate-scale-in-bounce overflow-hidden
              `}
              style={{
                animationDelay: `${index * 80}ms`,
                animationFillMode: 'backwards'
              }}
            >
              {/* Background shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon with glow and scale animation */}
              <span className={`
                text-3xl relative z-10
                transition-all duration-300 ease-out
                group-hover:scale-125 group-hover:rotate-6
                ${config.iconGlow}
              `}>
                {(() => {
                  const IconComponent = iconMap[action.icon];
                  return IconComponent ? <IconComponent className="w-8 h-8" /> : action.icon;
                })()}
              </span>
              
              {/* Label */}
                <span className="text-xs font-medium text-center relative z-10 transition-colors duration-200 group-hover:text-foreground">
                {action.name}
              </span>
              
              {/* Corner accent */}
              <div className={`
                absolute top-0 right-0 w-10 h-10 rounded-tr-3xl
                bg-gradient-to-bl from-white/10 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
              `} />
              
              {/* Bottom glow bar */}
              <div className={`
                absolute bottom-0 left-1/2 -translate-x-1/2
                w-0 h-0.5 rounded-full
                ${config.text.replace('text', 'bg')}
                group-hover:w-8 group-hover:transition-all group-hover:duration-300
              `} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
