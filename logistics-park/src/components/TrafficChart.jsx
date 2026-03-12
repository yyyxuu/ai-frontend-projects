import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { trafficData } from '../data/mockData';

export function TrafficChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">24 小时货物流量趋势</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={trafficData}>
            <defs>
              <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="oklch(0.8100 0.1000 252)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="oklch(0.8100 0.1000 252)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9220 0 0)" />
            <XAxis dataKey="time" stroke="oklch(0.5560 0 0)" fontSize={12} />
            <YAxis stroke="oklch(0.5560 0 0)" fontSize={12} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'oklch(1 0 0)', 
                border: '1px solid oklch(0.9220 0 0)',
                borderRadius: '8px'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="volume" 
              stroke="oklch(0.6200 0.1900 260)" 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorVolume)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
