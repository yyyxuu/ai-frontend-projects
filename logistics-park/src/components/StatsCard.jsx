import { statsData } from '../data/mockData';

function StatCard({ title, value, unit, trend, trendUp }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-border p-6 hover:shadow-md transition-shadow">
      <h3 className="text-sm font-medium text-muted-foreground mb-2">{title}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-bold text-foreground">{value.toLocaleString()}</span>
        <span className="text-sm text-muted-foreground">{unit}</span>
      </div>
      {trend && (
        <div className={`mt-2 text-sm flex items-center gap-1 ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
          <span>{trendUp ? '↑' : '↓'}</span>
          <span>较昨日 {trend}</span>
        </div>
      )}
    </div>
  );
}

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard 
        title="今日吞吐量" 
        value={statsData.todayThroughput} 
        unit="吨"
        trend="12.5%"
        trendUp={true}
      />
      <StatCard 
        title="今日车辆" 
        value={statsData.vehicleCount} 
        unit="辆"
        trend="8.3%"
        trendUp={true}
      />
      <StatCard 
        title="仓储利用率" 
        value={statsData.warehouseUtilization} 
        unit="%"
        trend="2.1%"
        trendUp={false}
      />
      <StatCard 
        title="今日订单" 
        value={statsData.orderCount} 
        unit="单"
        trend="15.7%"
        trendUp={true}
      />
    </div>
  );
}
