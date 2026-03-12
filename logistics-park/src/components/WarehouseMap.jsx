import { warehouseMapData } from '../data/mockData';

const zoneStatusColors = {
  normal: 'bg-green-500',
  warning: 'bg-yellow-500',
  error: 'bg-red-500',
};

const occupancyColors = {
  low: 'bg-green-400',
  medium: 'bg-yellow-400',
  high: 'bg-red-400',
};

function getOccupancyColor(occupancy) {
  if (occupancy < 50) return occupancyColors.low;
  if (occupancy < 80) return occupancyColors.medium;
  return occupancyColors.high;
}

function WarehouseZone({ zone }) {
  const color = getOccupancyColor(zone.occupancy);
  
  return (
    <div className="relative bg-white border-2 border-border rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer group">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold text-lg text-foreground">{zone.id}</span>
        <span className={`w-3 h-3 rounded-full ${zoneStatusColors[zone.status]}`}></span>
      </div>
      <div className="text-xs text-muted-foreground mb-2 truncate">{zone.name}</div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{zone.occupancy}%</span>
        <div className="flex-1 ml-2 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className={`h-full ${color} transition-all`} style={{ width: `${zone.occupancy}%` }}></div>
        </div>
      </div>
      <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-5 rounded-lg transition-opacity"></div>
    </div>
  );
}

function GateIndicator({ gate }) {
  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${gate.status === 'open' ? 'bg-green-50' : 'bg-gray-100'}`}>
      <div className={`w-3 h-3 rounded-full ${gate.status === 'open' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
      <div className="flex-1">
        <div className="text-sm font-medium text-foreground">{gate.name}</div>
        <div className="text-xs text-muted-foreground">
          {gate.status === 'open' ? `通行：${gate.vehicles} 辆` : '关闭'}
        </div>
      </div>
    </div>
  );
}

export function WarehouseMap() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">仓库分布</h3>
      
      {/* 仓库区域 */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {warehouseMapData.zones.map((zone) => (
          <WarehouseZone key={zone.id} zone={zone} />
        ))}
      </div>
      
      {/* 大门状态 */}
      <div className="border-t border-border pt-4">
        <h4 className="text-sm font-medium text-foreground mb-3">大门状态</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {warehouseMapData.gates.map((gate) => (
            <GateIndicator key={gate.id} gate={gate} />
          ))}
        </div>
      </div>
    </div>
  );
}
