# Task Context: 物流园数据展示页面

Session ID: 2026-03-12-logistics-dashboard
Created: 2026-03-12T00:00:00Z
Status: completed

## Current Request
创建一个物流园数据展示页面 (Dashboard)，展示物流园区的关键运营数据、实时监控和可视化图表。

## Context Files (Standards to Follow)
- /Users/yyx/.config/opencode/context/core/standards/code-quality.md
- /Users/yyx/.config/opencode/context/ui/web/react-patterns.md
- /Users/yyx/.config/opencode/context/ui/web/ui-styling-standards.md
- /Users/yyx/.config/opencode/context/ui/web/design-systems.md

## Reference Files (Source Material to Look At)
- (New project - no existing source files)

## External Docs Fetched
- Recharts: React composable charting library
  - Installation: npm install recharts
  - Chart types: LineChart, BarChart, PieChart, AreaChart
  - ResponsiveContainer for responsive charts
  - Customization via props (colors, tooltips, legends)

## Components
1. **Header** - 页面标题、时间显示
2. **StatsCard** - KPI 统计卡片组件（今日吞吐量、车辆数、仓储利用率等）
3. **TrafficChart** - 24 小时货物流量趋势图（AreaChart）
4. **VehicleChart** - 车辆进出统计（BarChart）
5. **WarehousePie** - 仓储容量分布（PieChart）
6. **DataTable** - 最新订单/运输记录表格
7. **Dashboard** - 主页面，整合所有组件

## Constraints
- 新项目，从零开始
- 使用 React + Vite
- 使用 Recharts 作为图表库
- 使用 Tailwind CSS + CDN 方式
- 采用 Modern Dark Mode 设计风格（专业、简洁）
- 响应式设计，适配多种屏幕尺寸
- 纯前端实现，使用模拟数据

## Exit Criteria
- [ ] 项目初始化完成 (Vite + React)
- [ ] 所有依赖安装完成 (recharts, tailwindcss)
- [ ] 所有组件实现完成
- [ ] 页面响应式正常
- [ ] 图表渲染正常，数据可视化清晰
- [ ] 代码符合质量标准（纯函数、模块化、<50 行/组件）
