// 模拟数据 - 物流园运营数据

export const statsData = {
  todayThroughput: 12847, // 今日吞吐量 (吨)
  vehicleCount: 342, // 今日车辆数
  warehouseUtilization: 78.5, // 仓储利用率 (%)
  orderCount: 1563, // 今日订单数
};

export const trafficData = [
  { time: '00:00', volume: 120 },
  { time: '02:00', volume: 80 },
  { time: '04:00', volume: 60 },
  { time: '06:00', volume: 150 },
  { time: '08:00', volume: 420 },
  { time: '10:00', volume: 680 },
  { time: '12:00', volume: 750 },
  { time: '14:00', volume: 620 },
  { time: '16:00', volume: 580 },
  { time: '18:00', volume: 490 },
  { time: '20:00', volume: 320 },
  { time: '22:00', volume: 180 },
];

export const vehicleData = [
  { type: '货车', inbound: 156, outbound: 142 },
  { type: '冷链车', inbound: 45, outbound: 38 },
  { type: '集装箱车', inbound: 67, outbound: 71 },
  { type: '小型货车', inbound: 89, outbound: 95 },
];

export const warehouseData = [
  { name: '普通仓储', value: 45, color: 'oklch(0.8100 0.1000 252)' },
  { name: '冷链仓储', value: 25, color: 'oklch(0.6200 0.1900 260)' },
  { name: '危险品仓储', value: 15, color: 'oklch(0.5500 0.2200 263)' },
  { name: '临时仓储', value: 15, color: 'oklch(0.4900 0.2200 264)' },
];

export const recentOrders = [
  { id: 'ORD-2026-0001', customer: '某某贸易公司', type: '入库', goods: '电子产品', weight: '2.5 吨', status: '已完成', time: '10:32' },
  { id: 'ORD-2026-0002', customer: '生鲜供应链', type: '出库', goods: '冷冻食品', weight: '1.8 吨', status: '处理中', time: '10:28' },
  { id: 'ORD-2026-0003', customer: '化工集团', type: '入库', goods: '化工原料', weight: '5.2 吨', status: '待处理', time: '10:15' },
  { id: 'ORD-2026-0004', customer: '电商物流', type: '出库', goods: '日用品', weight: '3.1 吨', status: '已完成', time: '09:58' },
  { id: 'ORD-2026-0005', customer: '医疗器械', type: '入库', goods: '医疗设备', weight: '0.8 吨', status: '处理中', time: '09:45' },
];

// 告警数据
export const alertsData = [
  { id: 1, type: 'warning', title: '仓储容量告警', message: 'A3 仓库容量已达 95%', time: '10:45', level: 'high' },
  { id: 2, type: 'info', title: '车辆到达通知', message: '车牌 京 A12345 已到达北门', time: '10:42', level: 'normal' },
  { id: 3, type: 'error', title: '温度异常', message: '冷链仓库 B2 温度超出阈值', time: '10:38', level: 'critical' },
  { id: 4, type: 'success', title: '订单完成', message: '订单 ORD-2026-0001 已完成入库', time: '10:35', level: 'normal' },
  { id: 5, type: 'warning', title: '设备维护', message: '3 号叉车 scheduled 维护', time: '10:20', level: 'low' },
];

// 效率数据
export const efficiencyData = {
  overall: 87,
  inbound: 92,
  outbound: 85,
  storage: 78,
  dispatch: 89,
};

// 温度监控数据
export const temperatureData = [
  { location: '冷链 A1', temp: -18, min: -22, max: -16, status: 'normal' },
  { location: '冷链 A2', temp: -19, min: -22, max: -16, status: 'normal' },
  { location: '冷链 B1', temp: 4, min: 2, max: 6, status: 'normal' },
  { location: '冷链 B2', temp: 8, min: 2, max: 6, status: 'warning' },
  { location: '冷冻 C1', temp: -25, min: -28, max: -22, status: 'normal' },
  { location: '冷冻 C2', temp: -24, min: -28, max: -22, status: 'normal' },
];

// 班次数据
export const shiftData = {
  currentShift: '早班',
  shiftTime: '06:00 - 18:00',
  workers: [
    { name: '张三', role: '仓库管理员', status: 'on-duty', area: 'A 区' },
    { name: '李四', role: '叉车司机', status: 'on-duty', area: 'B 区' },
    { name: '王五', role: '质检员', status: 'break', area: 'C 区' },
    { name: '赵六', role: '保安', status: 'on-duty', area: '大门' },
    { name: '钱七', role: '调度员', status: 'on-duty', area: '调度室' },
    { name: '孙八', role: '仓库管理员', status: 'off-duty', area: 'A 区' },
  ],
};

// 仓库地图数据
export const warehouseMapData = {
  zones: [
    { id: 'A1', name: '普通仓储 A1', occupancy: 75, status: 'normal' },
    { id: 'A2', name: '普通仓储 A2', occupancy: 68, status: 'normal' },
    { id: 'A3', name: '普通仓储 A3', occupancy: 95, status: 'warning' },
    { id: 'B1', name: '冷链仓储 B1', occupancy: 82, status: 'normal' },
    { id: 'B2', name: '冷链仓储 B2', occupancy: 58, status: 'normal' },
    { id: 'C1', name: '危险品 C1', occupancy: 45, status: 'normal' },
    { id: 'C2', name: '危险品 C2', occupancy: 30, status: 'normal' },
    { id: 'D1', name: '临时仓储 D1', occupancy: 90, status: 'warning' },
  ],
  gates: [
    { id: 'N', name: '北门', status: 'open', vehicles: 12 },
    { id: 'S', name: '南门', status: 'open', vehicles: 8 },
    { id: 'E', name: '东门', status: 'closed', vehicles: 0 },
    { id: 'W', name: '西门', status: 'open', vehicles: 5 },
  ],
};

// 快捷操作
export const quickActions = [
  { id: 1, name: '入库登记', icon: '📥', color: 'blue' },
  { id: 2, name: '出库登记', icon: '📤', color: 'green' },
  { id: 3, name: '车辆调度', icon: '🚛', color: 'orange' },
  { id: 4, name: '库存查询', icon: '📊', color: 'purple' },
  { id: 5, name: '报表生成', icon: '📋', color: 'pink' },
  { id: 6, name: '告警处理', icon: '⚠️', color: 'red' },
];
