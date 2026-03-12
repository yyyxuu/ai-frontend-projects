---
source: Context7 API
library: Recharts
package: recharts
topic: installation-and-setup
fetched: 2026-03-12T00:00:00Z
official_docs: https://recharts.org
---

# Recharts - Installation and Setup

## Overview
Recharts is a Redefined chart library built with React and D3, enabling developers to easily create charts in React applications using declarative components and native SVG support.

## Installation

### NPM (Recommended for SPAs)
```bash
npm install recharts
```

### Yarn
```bash
yarn add recharts
```

### pnpm
```bash
pnpm add recharts
```

## Basic Setup

Recharts uses a composable, component-based approach. All charts are built by combining different chart components.

### Basic Import Pattern
```jsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
```

### Key Components
- **Chart containers**: `LineChart`, `BarChart`, `PieChart`, `AreaChart`, `ComposedChart`, etc.
- **Chart elements**: `Line`, `Bar`, `Pie`, `Area`, `Cell`
- **Axes**: `XAxis`, `YAxis`
- **Grid**: `CartesianGrid`
- **Interactivity**: `Tooltip`, `Legend`
- **Layout**: `ResponsiveContainer`

## Development Setup

To build from source:
```bash
git clone https://github.com/recharts/recharts.git
cd recharts
npm install
npm run build
```

## Quick Start Example

```jsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398 },
  { name: 'Mar', uv: 2000, pv: 9800 },
];

function MyChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}
```

## Requirements
- Node.js and npm installed
- React application setup (works with Create React App, Next.js, Vite, etc.)
- No additional D3 setup required (included internally)
