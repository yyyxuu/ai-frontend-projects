---
source: Context7 API
library: React Chartjs 2
package: react-chartjs-2
topic: installation-and-setup
fetched: 2026-03-12T00:00:00Z
official_docs: https://react-chartjs-2.js.org
---

# React Chartjs 2 - Installation and Setup

## Overview
React Chartjs 2 provides React components for Chart.js, the most popular charting library, supporting Chart.js v4 and v3.

## Installation

### npm
```bash
npm install react-chartjs-2 chart.js
```

### yarn
```bash
yarn add react-chartjs-2 chart.js
```

### pnpm
```bash
pnpm add react-chartjs-2 chart.js
```

**Note**: Chart.js v4.0.0 or higher is recommended.

## Basic Setup

### Tree-shakable Setup (Recommended for Production)

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

// Register only the components you need
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function MyChart() {
  const data = {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  return <Line data={data} options={options} />;
}
```

### Quick Setup (Development)

For quick prototyping, you can import all of Chart.js:

```jsx
import 'chart.js/auto'; // Imports and registers everything
import { Line } from 'react-chartjs-2';

function MyChart() {
  return <Line data={chartData} />;
}
```

**Note**: This approach increases bundle size and is not recommended for production.

## Required Registrations by Chart Type

### Line Chart
```jsx
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
```

### Bar Chart
```jsx
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
```

### Pie/Doughnut Chart
```jsx
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);
```

### Polar Area Chart
```jsx
ChartJS.register(
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
);
```

## Data Structure

All charts use a consistent data structure:

```javascript
const data = {
  labels: ['January', 'February', 'March', 'April'],
  datasets: [
    {
      label: 'My Dataset',
      data: [10, 20, 30, 40],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1,
    },
  ],
};
```

## Options Structure

```javascript
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart Title',
    },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};
```

## Chart Components

| Component | Import | Description |
|-----------|--------|-------------|
| `<Line />` | `import { Line } from 'react-chartjs-2'` | Line charts |
| `<Bar />` | `import { Bar } from 'react-chartjs-2'` | Bar charts |
| `<Pie />` | `import { Pie } from 'react-chartjs-2'` | Pie charts |
| `<Doughnut />` | `import { Doughnut } from 'react-chartjs-2'` | Doughnut charts |
| `<PolarArea />` | `import { PolarArea } from 'react-chartjs-2'` | Polar area charts |
| `<Chart />` | `import { Chart } from 'react-chartjs-2'` | Generic chart component |

## Quick Start Example

```jsx
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 1,
    },
  ],
};

function App() {
  return <Bar data={data} />;
}
```
