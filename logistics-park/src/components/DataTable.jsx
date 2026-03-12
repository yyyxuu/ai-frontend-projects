import { recentOrders } from '../data/mockData';

const statusStyles = {
  '已完成': 'bg-green-100 text-green-800',
  '处理中': 'bg-blue-100 text-blue-800',
  '待处理': 'bg-yellow-100 text-yellow-800',
};

export function DataTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">最新订单</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">订单号</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">客户</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">类型</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">货物</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">重量</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">状态</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">时间</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id} className="border-b border-border hover:bg-secondary transition-colors">
                <td className="py-3 px-4 text-sm font-medium text-foreground">{order.id}</td>
                <td className="py-3 px-4 text-sm text-foreground">{order.customer}</td>
                <td className="py-3 px-4 text-sm">
                  <span className={order.type === '入库' ? 'text-blue-600' : 'text-orange-600'}>
                    {order.type}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-foreground">{order.goods}</td>
                <td className="py-3 px-4 text-sm text-muted-foreground">{order.weight}</td>
                <td className="py-3 px-4 text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-sm text-muted-foreground">{order.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
