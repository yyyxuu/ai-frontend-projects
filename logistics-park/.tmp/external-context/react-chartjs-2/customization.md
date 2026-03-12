---
source: Context7 API
library: React Chartjs 2
package: react-chartjs-2
topic: customization
fetched: 2026-03-12T00:00:00Z
official_docs: https://react-chartjs-2.js.org
---

# React Chartjs 2 - Customization Options

## Colors

### Single Color
```jsx
const data = {
  datasets: [
    {
      label: 'Dataset',
      data: [10, 20, 30],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 1,
    },
  ],
};
```

### Multiple Colors (Pie/Doughnut)
```jsx
const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green'],
  datasets: [
    {
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
```

## Legend Customization

### Position and Display
```jsx
const options = {
  plugins: {
    legend: {
      display: true,
      position: 'top',  // top, bottom, left, right
      align: 'center',  // start, center, end
      fullSize: true,
      reverse: false,
    },
  },
};
```

### Legend Styling
```jsx
const options = {
  plugins: {
    legend: {
      labels: {
        font: {
          size: 14,
          family: 'Helvetica Neue',
        },
        color: '#333',
        padding: 20,
        usePointStyle: true,  // Use point style instead of box
        pointStyle: 'circle', // circle, rect, rectRot, etc.
      },
    },
  },
};
```

### Custom Legend Click Handler
```jsx
const options = {
  plugins: {
    legend: {
      onClick: (e, legendItem, legend) => {
        const index = legendItem.datasetIndex;
        const ci = legend.chart;
        if (ci.isDatasetVisible(index)) {
          ci.hide(index);
          legendItem.hidden = true;
        } else {
          ci.show(index);
          legendItem.hidden = false;
        }
      },
      onHover: (e, legendItem) => {
        e.native.target.style.cursor = 'pointer';
      },
      onLeave: (e, legendItem) => {
        e.native.target.style.cursor = 'default';
      },
    },
  },
};
```

## Tooltip Customization

### Basic Tooltip Options
```jsx
const options = {
  plugins: {
    tooltip: {
      enabled: true,
      mode: 'index',  // index, dataset, nearest
      intersect: true,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: 'rgba(255,255,255,0.5)',
      borderWidth: 1,
      padding: 10,
      displayColors: true,
    },
  },
};
```

### Custom Tooltip Callbacks
```jsx
const options = {
  plugins: {
    tooltip: {
      callbacks: {
        label: (context) => {
          let label = context.dataset.label || '';
          if (label) {
            label += ': ';
          }
          if (context.parsed.y !== null) {
            label += new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(context.parsed.y);
          }
          return label;
        },
        title: (items) => {
          return `Month: ${items[0].label}`;
        },
      },
    },
  },
};
```

## Axis Customization

### Y-Axis Configuration
```jsx
const options = {
  scales: {
    y: {
      beginAtZero: true,
      min: 0,
      max: 100,
      ticks: {
        stepSize: 10,
        callback: (value) => `$${value}`,
        font: {
          size: 12,
        },
        color: '#666',
      },
      grid: {
        color: 'rgba(0, 0, 0, 0.1)',
        lineWidth: 1,
      },
      title: {
        display: true,
        text: 'Revenue ($)',
        font: {
          size: 14,
          weight: 'bold',
        },
      },
    },
  },
};
```

### X-Axis Configuration
```jsx
const options = {
  scales: {
    x: {
      ticks: {
        maxRotation: 45,
        minRotation: 45,
        autoSkip: true,
        maxTicksLimit: 10,
      },
      grid: {
        display: false,
      },
      title: {
        display: true,
        text: 'Months',
      },
    },
  },
};
```

### Multiple Y-Axes
```jsx
const options = {
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      title: {
        display: true,
        text: 'Revenue',
      },
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
      title: {
        display: true,
        text: 'Visitors',
      },
    },
  },
};

const data = {
  datasets: [
    {
      label: 'Revenue',
      data: [4000, 3000, 2000],
      yAxisID: 'y',
    },
    {
      label: 'Visitors',
      data: [2400, 1398, 9800],
      yAxisID: 'y1',
    },
  ],
};
```

## Grid Customization

```jsx
const options = {
  scales: {
    x: {
      grid: {
        color: 'rgba(0, 0, 0, 0.1)',
        lineWidth: 1,
        borderDash: [5, 5],  // Dashed lines
      },
    },
    y: {
      grid: {
        color: (context) => {
          if (context.tick.value === 0) {
            return 'rgba(0, 0, 0, 0.3)';  // Highlight zero line
          }
          return 'rgba(0, 0, 0, 0.1)';
        },
      },
    },
  },
};
```

## Chart Title

```jsx
const options = {
  plugins: {
    title: {
      display: true,
      text: 'Monthly Sales Report',
      position: 'top',
      align: 'center',
      font: {
        size: 18,
        weight: 'bold',
      },
      color: '#333',
      padding: {
        top: 10,
        bottom: 20,
      },
    },
  },
};
```

## Complete Customized Example

```jsx
const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Revenue',
      data: [6500, 5900, 8000, 8100, 5600],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 2,
      borderRadius: 5,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        font: { size: 14 },
        usePointStyle: true,
      },
    },
    title: {
      display: true,
      text: 'Q1 Revenue Report',
      font: { size: 18, weight: 'bold' },
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleFont: { size: 14 },
      bodyFont: { size: 13 },
      padding: 12,
      cornerRadius: 8,
      callbacks: {
        label: (ctx) => `$${ctx.parsed.y.toLocaleString()}`,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value) => `$${value.toLocaleString()}`,
      },
      title: {
        display: true,
        text: 'Revenue (USD)',
      },
    },
  },
};

function CustomizedBarChart() {
  return <Bar data={data} options={options} />;
}
```
