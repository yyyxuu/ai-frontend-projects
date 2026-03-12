---
source: Context7 API
library: Recharts
package: recharts
topic: customization
fetched: 2026-03-12T00:00:00Z
official_docs: https://recharts.org
---

# Recharts - Customization Options

## Colors

### Using Color Arrays
```jsx
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

<Pie>
  {data.map((entry, index) => (
    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
  ))}
</Pie>
```

### Using Gradients
```jsx
<AreaChart data={data}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <Area
    type="monotone"
    dataKey="uv"
    stroke="#8884d8"
    fillOpacity={1}
    fill="url(#colorUv)"
  />
</AreaChart>
```

### Inline Colors
```jsx
<Line dataKey="pv" stroke="#8884d8" />
<Bar dataKey="uv" fill="#82ca9d" />
```

## Tooltip Customization

### Custom Tooltip Component
```jsx
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc' }}>
        <p style={{ margin: 0 }}><strong>{label}</strong></p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color, margin: '5px 0' }}>
            {entry.name}: {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

<Tooltip content={<CustomTooltip />} />
```

### Formatter Functions
```jsx
<Tooltip
  formatter={(value, name) => [`$${value.toLocaleString()}`, name.toUpperCase()]}
  labelFormatter={(label) => `Month: ${label}`}
  contentStyle={{ backgroundColor: '#f5f5f5' }}
  itemStyle={{ color: '#333' }}
/>
```

### Wrapper Style
```jsx
<Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
```

## Legend Customization

### Custom Legend Component
```jsx
const renderLegend = (props) => {
  const { payload } = props;
  return (
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center' }}>
      {payload.map((entry, index) => (
        <li key={`item-${index}`} style={{ marginRight: 20 }}>
          <span style={{
            backgroundColor: entry.color,
            width: 10,
            height: 10,
            display: 'inline-block',
            marginRight: 5
          }} />
          {entry.value}
        </li>
      ))}
    </ul>
  );
};

<Legend
  content={renderLegend}
  verticalAlign="top"
  height={36}
/>
```

### Legend Position and Style
```jsx
<Legend
  wrapperStyle={{
    top: 40,
    right: 20,
    backgroundColor: '#f5f5f5',
    border: '1px solid #d5d5d5',
    borderRadius: 3,
    lineHeight: '40px'
  }}
/>
```

## Axis Customization

### XAxis Styling
```jsx
<XAxis
  dataKey="name"
  stroke="#8884d8"
  tick={{ fill: '#333', fontSize: 12 }}
  tickLine={{ stroke: '#666' }}
/>
```

### YAxis Configuration
```jsx
<YAxis
  domain={[0, 'dataMax']}
  tickFormatter={(value) => `$${value}`}
  axisLine={{ stroke: '#333' }}
/>
```

### Multiple Y-Axes
```jsx
<YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
<YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />

<Line yAxisId="left" dataKey="revenue" stroke="#8884d8" />
<Line yAxisId="right" dataKey="visitors" stroke="#82ca9d" />
```

## Grid Customization

```jsx
<CartesianGrid
  stroke="#f5f5f5"
  strokeDasharray="3 3"
  vertical={true}
  horizontal={true}
/>
```

## Chart Margins

```jsx
<LineChart
  data={data}
  margin={{ top: 20, right: 30, bottom: 20, left: 20 }}
>
  {/* chart content */}
</LineChart>
```

## Line/Bar Specific Options

### Line Chart Options
```jsx
<Line
  type="monotone"        // curve type: monotone, linear, step, etc.
  dataKey="uv"
  stroke="#8884d8"
  strokeWidth={2}
  dot={{ r: 4 }}         // customize dots
  activeDot={{ r: 8 }}   // hover state dot
  animationDuration={1500}
/>
```

### Bar Chart Options
```jsx
<Bar
  dataKey="pv"
  fill="#8884d8"
  barSize={30}
  radius={[5, 5, 0, 0]}  // rounded corners
  animationDuration={1000}
/>
```

## Complete Customized Example

```jsx
<ResponsiveContainer width="100%" height={400}>
  <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
    <XAxis 
      dataKey="name" 
      stroke="#666"
      tick={{ fontSize: 12 }}
    />
    <YAxis
      tickFormatter={(value) => `$${value}`}
      stroke="#666"
    />
    <Tooltip
      contentStyle={{ 
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '4px'
      }}
      formatter={(value) => [`$${value}`, 'Revenue']}
    />
    <Legend
      wrapperStyle={{ paddingTop: '20px' }}
    />
    <Bar
      dataKey="uv"
      fill="#8884d8"
      radius={[4, 4, 0, 0]}
    />
  </BarChart>
</ResponsiveContainer>
```
