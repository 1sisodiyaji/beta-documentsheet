import React from 'react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
} from 'chart.js';

// Register required components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement
);

const ChartComponent = ({ chartType, chartData, chartOptions }) => {
  // Render chart based on the type
  const renderChart = () => {
    switch (chartType) {
      case 'doughnut':
        return <Doughnut data={chartData} options={chartOptions} />;
      case 'bar':
        return <Bar data={chartData} options={chartOptions} />;
      case 'line':
        return <Line data={chartData} options={chartOptions} />;
      default:
        return <p>Invalid chart type specified</p>;
    }
  };

  return <div className="w-full h-auto">{renderChart()}</div>;
};

export default ChartComponent;
