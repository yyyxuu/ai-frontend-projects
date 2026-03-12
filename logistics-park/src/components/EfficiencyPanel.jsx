import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import { efficiencyData } from '../data/mockData';

function EfficiencyGauge({ value, label, color }) {
  const data = [{ value, fill: color }];
  
  return (
    <div className="flex flex-col items-center">
      <div className="w-28 h-28 relative">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart 
            innerRadius="70%" 
            outerRadius="100%" 
            barSize={14} 
            data={data} 
            startAngle={90} 
            endAngle={-270}
          >
            <RadialBar 
              background={{ fill: 'oklch(0.92 0 0)' }} 
              dataKey="value" 
              cornerRadius={10}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        {/* Centered percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center -mt-1">
            <div className="text-2xl font-bold text-foreground leading-none">{value}</div>
            <div className="text-xs text-muted-foreground font-medium mt-0.5">%</div>
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
