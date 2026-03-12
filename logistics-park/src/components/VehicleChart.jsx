import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { vehicleData } from '../data/mockData';

export function VehicleChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">车辆进出统计</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={vehicleData}>
            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.9220 0 0)" />
            <XAxis dataKey="type" stroke="oklch(0.5560 0 0)" fontSize={12} />
            <YAxis stroke="oklch(0.5560 0 0)" fontSize={12} />
            <Tooltip
              contentStyle={{ 
                backgroundColor: 'oklch(1 0 0)', 
                border: '1px solid oklch(0.9220 0 0)',
                borderRadius: '8px'
              }}
            />
            <Legend />
            <Bar dataKey="inbound" name="进入" fill="oklch(0.8100 0.1000 252)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="outbound" name="驶出" fill="oklch(0.6200 0.1900 260)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
