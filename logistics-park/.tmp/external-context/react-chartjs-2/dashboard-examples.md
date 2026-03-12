---
source: Context7 API
library: React Chartjs 2
package: react-chartjs-2
topic: dashboard-examples
fetched: 2026-03-12T00:00:00Z
official_docs: https://react-chartjs-2.js.org
---

# React Chartjs 2 - Dashboard Examples

## Dashboard Grid Layout

```jsx
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const lineData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Traffic',
    data: [65, 59, 80, 81, 56, 55],
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    tension: 0.3,
  }],
};

const barData = {
  labels: ['Page A', 'Page B', 'Page C', 'Page D'],
  datasets: [{
    label: 'Views',
    data: [4000, 3000, 2000, 2780],
    backgroundColor: 'rgba(54, 162, 235, 0.5)',
    borderColor: 'rgb(54, 162, 235)',
    borderWidth: 1,
  }],
};

const pieData = {
  labels: ['Direct', 'Social', 'Referral', 'Organic'],
  datasets: [{
    data: [400, 300, 300, 200],
    backgroundColor: [
      'rgba(255, 99, 132, 0.5)',
      'rgba(54, 162, 235, 0.5)',
      'rgba(255, 206, 86, 0.5)',
      'rgba(75, 192, 192, 0.5)',
    ],
  }],
};

const commonOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
  },
};

function Dashboard() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
      padding: '20px',
    }}>
      {/* Top Row - Two charts */}
      <div style={{ height: 300 }}>
        <h3 style={{ margin: '0 0 10px 0' }}>Traffic Trend</h3>
        <Line data={lineData} options={commonOptions} />
      </div>
      
      <div style={{ height: 300 }}>
        <h3 style={{ margin: '0 0 10px 0' }}>Page Views</h3>
        <Bar data={barData} options={commonOptions} />
      </div>
      
      {/* Bottom Row - Full width */}
      <div style={{ height: 300, gridColumn: 'span 2' }}>
        <h3 style={{ margin: '0 0 10px 0' }}>Traffic Sources</h3>
        <Doughnut data={pieData} options={commonOptions} />
      </div>
    </div>
  );
}
```

## Multi-Dataset Dashboard Chart

```jsx
const data = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      type: 'line',
      label: 'Revenue',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: [120000, 150000, 180000, 200000],
      yAxisID: 'y',
    },
    {
      type: 'bar',
      label: 'Orders',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [500, 600, 700, 800],
      yAxisID: 'y1',
    },
    {
      type: 'bar',
      label: 'Customers',
      backgroundColor: 'rgb(53, 162, 235)',
      data: [300, 400, 500, 600],
      yAxisID: 'y1',
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      title: { display: true, text: 'Revenue ($)' },
      ticks: { callback: (v) => `$${v/1000}k` },
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: { drawOnChartArea: false },
      title: { display: true, text: 'Count' },
    },
  },
};

function MetricsChart() {
  return (
    <div style={{ height: 400 }}>
      <Chart type="bar" data={data} options={options} />
    </div>
  );
}
```

## Interactive Chart with Click Handling

```jsx
import { useRef } from 'react';
import { Chart, getElementsAtEvent } from 'react-chartjs-2';

function InteractiveChart() {
  const chartRef = useRef(null);

  const onClick = (event) => {
    const { current: chart } = chartRef;
    if (!chart) return;

    const elements = getElementsAtEvent(chart, event);
    if (!elements.length) return;

    const index = elements[0].index;
    const label = chart.data.labels?.[index];
    
    console.log(`Clicked: ${label}`);
    elements.forEach((el) => {
      const dsLabel = chart.data.datasets[el.datasetIndex].label;
      const value = chart.data.datasets[el.datasetIndex].data[el.index];
      console.log(`${dsLabel}: ${value}`);
    });
  };

  const data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Revenue',
        data: [120, 150, 180, 200],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Costs',
        data: [80, 90, 100, 110],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div style={{ height: 300 }}>
      <Chart
        ref={chartRef}
        type="bar"
        data={data}
        onClick={onClick}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'top' },
          },
        }}
      />
    </div>
  );
}
```

## Dashboard Card Component

```jsx
function DashboardCard({ title, chartType, data, color }) {
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  };

  const ChartComponent = chartType;

  return (
    <div style={{
      padding: '20px',
      borderRadius: '8px',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    }}>
      <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>
        {title}
      </h3>
      <div style={{ height: 150 }}>
        <ChartComponent
          data={data}
          options={commonOptions}
        />
      </div>
    </div>
  );
}

// Usage
<DashboardCard
  title="Weekly Sales"
  chartType={Line}
  data={{
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      data: [120, 150, 180, 200, 170],
      borderColor: '#8884d8',
      tension: 0.3,
    }],
  }}
/>
```

## Complete Dashboard Example

```jsx
function AnalyticsDashboard() {
  const kpiData = [
    { title: 'Total Revenue', value: '$45,231', change: '+20.1%', color: '#22c55e' },
    { title: 'Subscriptions', value: '+2350', change: '+180.1%', color: '#3b82f6' },
    { title: 'Sales', value: '+12,234', change: '+19%', color: '#f59e0b' },
    { title: 'Active Now', value: '+573', change: '+201', color: '#ef4444' },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* KPI Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '20px',
        marginBottom: '20px',
      }}>
        {kpiData.map((kpi) => (
          <div key={kpi.title} style={{
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: '#fff',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          }}>
            <p style={{ fontSize: '14px', color: '#666', margin: '0 0 8px 0' }}>
              {kpi.title}
            </p>
            <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 4px 0' }}>
              {kpi.value}
            </p>
            <p style={{ fontSize: '12px', color: kpi.color, margin: 0 }}>
              {kpi.change} from last month
            </p>
          </div>
        ))}
      </div>

      {/* Main Charts */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '20px',
      }}>
        <div style={{
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}>
          <h3 style={{ margin: '0 0 20px 0' }}>Overview</h3>
          <div style={{ height: 300 }}>
            <Line data={overviewData} options={chartOptions} />
          </div>
        </div>
        
        <div style={{
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        }}>
          <h3 style={{ margin: '0 0 20px 0' }}>Distribution</h3>
          <div style={{ height: 300 }}>
            <Doughnut data={distributionData} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}
```

## Dashboard Best Practices

1. **Consistent Spacing**: Use uniform gaps and padding across all cards
2. **Color Consistency**: Use a defined color palette across all charts
3. **Responsive Layout**: Grid layouts that adapt to screen size
4. **Minimal Chart Clutter**: Hide unnecessary axes/gridlines in small cards
5. **Loading States**: Handle data loading gracefully
6. **Tooltips**: Always enable informative tooltips
7. **Legend Position**: Use 'top' or 'bottom' for horizontal layouts
8. **Chart Heights**: Use consistent heights for visual alignment
