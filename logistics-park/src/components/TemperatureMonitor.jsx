import { temperatureData } from '../data/mockData';

const statusColors = {
  normal: 'bg-green-100 text-green-700 border-green-200',
  warning: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  error: 'bg-red-100 text-red-700 border-red-200',
};

function TempBar({ temp, min, max }) {
  const range = max - min;
  const position = ((temp - min) / range) * 100;
  
  return (
    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-blue-400 via-green-400 to-red-400 rounded-full"
        style={{ width: `${position}%` }}
      />
    </div>
  );
}

export function TemperatureMonitor() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">冷链温度监控</h3>
        <span className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          正常：{temperatureData.filter(t => t.status === 'normal').length}
          <span className="w-2 h-2 rounded-full bg-yellow-500 ml-2"></span>
          异常：{temperatureData.filter(t => t.status === 'warning').length}
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {temperatureData.map((item) => {
          const statusColor = statusColors[item.status];
          return (
            <div key={item.location} className={`border rounded-lg p-4 ${statusColor} bg-opacity-30`}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{item.location}</span>
                <span className={`px-2 py-0.5 text-xs rounded-full border ${statusColor}`}>
                  {item.status === 'normal' ? '正常' : '警告'}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-bold">{item.temp}°C</span>
                <span className="text-xs text-muted-foreground">
                  范围：{item.min}°C ~ {item.max}°C
                </span>
              </div>
              <TempBar temp={item.temp} min={item.min} max={item.max} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
