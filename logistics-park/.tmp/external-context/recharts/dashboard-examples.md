---
source: Context7 API
library: Recharts
package: recharts
topic: dashboard-examples
fetched: 2026-03-12T00:00:00Z
official_docs: https://recharts.org
---

# Recharts - Dashboard Examples

## Dashboard Grid Layout

```jsx
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const lineData = [
  { name: 'Jan', uv: 4000, pv: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398 },
  { name: 'Mar', uv: 2000, pv: 9800 },
  { name: 'Apr', uv: 2780, pv: 3908 },
  { name: 'May', uv: 1890, pv: 4800 },
  { name: 'Jun', uv: 2390, pv: 3800 }
];

const barData = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
  { name: 'Page D', uv: 2780, pv: 3908 }
];

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function Dashboard() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', padding: '20px' }}>
      {/* Top Row - Two charts side by side */}
      <div style={{ height: 300 }}>
        <h3>Traffic Overview</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" name="Unique Visitors" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" name="Page Views" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div style={{ height: 300 }}>
        <h3>Page Performance</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" fill="#8884d8" name="UV" />
            <Bar dataKey="pv" fill="#82ca9d" name="PV" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      {/* Bottom Row - Full width chart */}
      <div style={{ height: 300, gridColumn: 'span 2' }}>
        <h3>Distribution</h3>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
```

## Composed Chart for Multiple Metrics

```jsx
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', revenue: 590, costs: 800, profit: 1400 },
  { name: 'Feb', revenue: 868, costs: 967, profit: 1506 },
  { name: 'Mar', revenue: 1397, costs: 1098, profit: 989 },
  { name: 'Apr', revenue: 1480, costs: 1200, profit: 1228 },
  { name: 'May', revenue: 1520, costs: 1108, profit: 1100 },
  { name: 'Jun', revenue: 1400, costs: 680, profit: 1700 },
];

function FinancialDashboard() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="profit" fill="#8884d8" stroke="#8884d8" name="Profit" />
        <Bar dataKey="revenue" barSize={20} fill="#413ea0" name="Revenue" />
        <Line type="monotone" dataKey="costs" stroke="#ff7300" name="Costs" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
```

## Dual Y-Axis Chart

```jsx
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function DualAxisChart() {
  const data = [
    { name: 'Jan', revenue: 4000, visitors: 2400 },
    { name: 'Feb', revenue: 3000, visitors: 1398 },
    { name: 'Mar', revenue: 2000, visitors: 9800 },
    { name: 'Apr', revenue: 2780, visitors: 3908 },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" label={{ value: 'Revenue ($)', angle: -90, position: 'insideLeft' }} />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" label={{ value: 'Visitors', angle: 90, position: 'insideRight' }} />
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#8884d8" name="Revenue" />
        <Line yAxisId="right" type="monotone" dataKey="visitors" stroke="#82ca9d" name="Visitors" />
      </LineChart>
    </ResponsiveContainer>
  );
}
```

## Responsive Dashboard Card

```jsx
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

function DashboardCard({ title, data, color }) {
  return (
    <div style={{
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>{title}</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="name" hide />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// Usage
<DashboardCard
  title="Weekly Sales"
  data={[
    { name: 'Mon', value: 120 },
    { name: 'Tue', value: 150 },
    { name: 'Wed', value: 180 },
    { name: 'Thu', value: 200 },
    { name: 'Fri', value: 170 },
  ]}
  color="#8884d8"
/>
```

## Key Dashboard Patterns

1. **Grid Layout**: Use CSS Grid for responsive chart placement
2. **Consistent Heights**: Set explicit heights for chart containers
3. **Shared Data**: Reuse data across multiple chart types
4. **Color Consistency**: Use a consistent color palette across charts
5. **Responsive Container**: Always wrap charts with ResponsiveContainer
6. **Minimal Margins**: Adjust margins to maximize chart area in cards
