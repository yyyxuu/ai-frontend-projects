---
source: Context7 API
library: Recharts
package: recharts
topic: responsive-charts
fetched: 2026-03-12T00:00:00Z
official_docs: https://recharts.org
---

# Recharts - Responsive Charts

## ResponsiveContainer Component

The `ResponsiveContainer` component makes charts automatically adjust to parent container dimensions.

### Basic Usage

```jsx
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'A', value: 400 },
  { name: 'B', value: 300 },
  { name: 'C', value: 500 },
];

function ResponsiveChart() {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
```

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | string/number | - | Container width (use "100%" for fluid) |
| `height` | string/number | - | Container height (required for percentage) |
| `aspect` | number | - | Width/height ratio (alternative to fixed dimensions) |
| `minWidth` | number | 0 | Minimum width in pixels |
| `minHeight` | number | 0 | Minimum height in pixels |

## Responsive Patterns

### Pattern 1: Fixed Height, Fluid Width
```jsx
<ResponsiveContainer width="100%" height={400}>
  <LineChart data={data}>
    {/* chart content */}
  </LineChart>
</ResponsiveContainer>
```

### Pattern 2: Aspect Ratio (Maintains Proportions)
```jsx
<ResponsiveContainer aspect={2}>
  <LineChart data={data}>
    {/* chart content */}
  </LineChart>
</ResponsiveContainer>
```

### Pattern 3: Dashboard Grid Layout
```jsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
  <div style={{ height: 300 }}>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data1}>
        {/* chart 1 */}
      </LineChart>
    </ResponsiveContainer>
  </div>
  <div style={{ height: 300 }}>
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data2}>
        {/* chart 2 */}
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>
```

## Important Notes

1. **Parent must have dimensions**: The parent container must have explicit width and height
2. **Height required for %**: When using `height="100%"`, parent must have defined height
3. **No fixed dimensions on chart**: Don't set width/height on the chart component itself when using ResponsiveContainer
4. **Re-renders on resize**: Chart automatically re-renders when container size changes

## Common Mistake to Avoid

```jsx
// ❌ WRONG - No parent height defined
<div>
  <ResponsiveContainer width="100%" height="100%">
    <LineChart>...</LineChart>
  </ResponsiveContainer>
</div>

// ✅ CORRECT - Parent has explicit height
<div style={{ height: 400 }}>
  <ResponsiveContainer width="100%" height="100%">
    <LineChart>...</LineChart>
  </ResponsiveContainer>
</div>
```

## Full Responsive Example

```jsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398 },
  { name: 'Mar', uv: 2000, pv: 9800 },
  { name: 'Apr', uv: 2780, pv: 3908 },
  { name: 'May', uv: 1890, pv: 4800 },
  { name: 'Jun', uv: 2390, pv: 3800 }
];

function MyLineChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#82ca9d"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
```
