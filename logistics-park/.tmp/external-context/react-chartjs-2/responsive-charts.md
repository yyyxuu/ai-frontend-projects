---
source: Context7 API
library: React Chartjs 2
package: react-chartjs-2
topic: responsive-charts
fetched: 2026-03-12T00:00:00Z
official_docs: https://react-chartjs-2.js.org
---

# React Chartjs 2 - Responsive Charts

## Basic Responsive Setup

```jsx
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js';

const options = {
  responsive: true,
  maintainAspectRatio: false,  // Key for full control
};

function ResponsiveChart() {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <Bar
        data={data}
        options={options}
      />
    </div>
  );
}
```

## Key Responsive Options

### responsive: true
Enables responsive behavior - chart scales to container size.

### maintainAspectRatio: false
Allows independent width/height control. When `true` (default), chart maintains its aspect ratio.

```jsx
const options = {
  responsive: true,
  maintainAspectRatio: false,
};
```

## Responsive Container Patterns

### Pattern 1: Fixed Height Container
```jsx
<div style={{ height: 400 }}>
  <Bar data={data} options={{ responsive: true, maintainAspectRatio: false }} />
</div>
```

### Pattern 2: Aspect Ratio Control
```jsx
<div style={{ height: 300 }}>
  <Bar 
    data={data}
    options={{
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2,  // width/height ratio
    }}
  />
</div>
```

### Pattern 3: Grid Dashboard Layout
```jsx
<div style={{ 
  display: 'grid', 
  gridTemplateColumns: 'repeat(2, 1fr)', 
  gap: '20px' 
}}>
  <div style={{ height: 300 }}>
    <Line data={data1} options={responsiveOptions} />
  </div>
  <div style={{ height: 300 }}>
    <Bar data={data2} options={responsiveOptions} />
  </div>
  <div style={{ height: 300, gridColumn: 'span 2' }}>
    <Pie data={data3} options={responsiveOptions} />
  </div>
</div>
```

## Chart Component Props for Responsiveness

```jsx
<Bar
  ref={chartRef}
  data={data}
  options={options}
  width={500}           // Canvas width (used when not responsive)
  height={300}          // Canvas height (used when not responsive)
  redraw={false}        // Prevent redraw on data changes
  datasetIdKey="label"  // Key to track datasets
  updateMode="resize"   // Update behavior on resize
/>
```

## Accessing Chart Instance

```jsx
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js';
import { useRef } from 'react';

function CustomizedChart() {
  const chartRef = useRef(null);

  const handleClick = () => {
    if (chartRef.current) {
      console.log('Chart instance:', chartRef.current);
      chartRef.current.update();  // Programmatically update
    }
  };

  return (
    <div>
      <Bar
        ref={chartRef}
        data={data}
        options={options}
      />
      <button onClick={handleClick}>Update Chart</button>
    </div>
  );
}
```

## Common Responsive Issues

### Issue 1: Chart Not Filling Container
**Problem**: Chart appears smaller than container.

**Solution**: Set `maintainAspectRatio: false` and ensure parent has explicit dimensions.

```jsx
// ❌ WRONG
<div>
  <Bar data={data} options={{ responsive: true }} />
</div>

// ✅ CORRECT
<div style={{ height: 400 }}>
  <Bar 
    data={data} 
    options={{ 
      responsive: true,
      maintainAspectRatio: false 
    }} 
  />
</div>
```

### Issue 2: Chart Distorted on Resize
**Problem**: Chart looks stretched or squashed.

**Solution**: Adjust `aspectRatio` or use fixed height containers.

```jsx
const options = {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 1.5,  // Adjust as needed
};
```

## Full Responsive Example

```jsx
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

const data = {
  labels,
  datasets: [
    {
      label: 'Sales 2024',
      data: [65, 59, 80, 81, 56, 55],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.3,  // Smooth curves
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Monthly Sales',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

function DashboardChart() {
  return (
    <div style={{ height: 300 }}>
      <Line data={data} options={options} />
    </div>
  );
}
```

## Responsive Best Practices

1. **Always wrap in container with explicit height**
2. **Use `maintainAspectRatio: false` for dashboard layouts**
3. **Test resize behavior during development**
4. **Consider mobile breakpoints for chart sizing**
5. **Use refs for programmatic updates**
6. **Set `updateMode` for controlled re-renders**
