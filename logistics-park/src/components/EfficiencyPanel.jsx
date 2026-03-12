import { efficiencyData } from '../data/mockData';

// 计算环形进度条的 stroke-dasharray
function getProgressStroke(value, radius) {
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  return { circumference, offset };
}

function EfficiencyGauge({ value, label, color }) {
  const size = 120;
  const strokeWidth = 16;
  const radius = (size - strokeWidth) / 2;
  const { circumference, offset } = getProgressStroke(value, radius);
  const center = size / 2;
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
          viewBox={`0 0 ${size} ${size}`}
        >
          {/* Background track */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="oklch(0.92 0 0)"
            strokeWidth={strokeWidth}
          />
          {/* Progress bar */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.5s ease' }}
          />
        </svg>
        {/* Centered text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground leading-none tracking-tight">{value}</div>
            <div className="text-sm text-muted-foreground font-medium">%</div>
          </div>
        </div>
      </div>
      <div className="mt-3 text-sm font-medium text-foreground">{label}</div>
    </div>
  );
}

export function EfficiencyPanel() {
  const colors = {
    overall: 'oklch(0.2050 0 0)',
    inbound: 'oklch(0.8100 0.1000 252)',
    outbound: 'oklch(0.6200 0.1900 260)',
    storage: 'oklch(0.5500 0.2200 263)',
    dispatch: 'oklch(0.7323 0.2492 142.4953)',
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">运营效率</h3>
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">
        <EfficiencyGauge value={efficiencyData.overall} label="综合" color={colors.overall} />
        <EfficiencyGauge value={efficiencyData.inbound} label="入库" color={colors.inbound} />
        <EfficiencyGauge value={efficiencyData.outbound} label="出库" color={colors.outbound} />
        <EfficiencyGauge value={efficiencyData.storage} label="仓储" color={colors.storage} />
        <EfficiencyGauge value={efficiencyData.dispatch} label="配送" color={colors.dispatch} />
      </div>
    </div>
  );
}
