import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { ChartProps } from './Charts.type';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Chart: React.FC<ChartProps> = ({ data, type, ...props }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Quantidade de alunos por mês que começaram na academia',
        data: data.values,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const renderChart = () => {
    switch (type) {
      case 'line':
        return <Line data={chartData} />;
      case 'bar':
        return <Bar data={chartData} {...props} />;
      case 'pie':
        return <Pie data={chartData} />;
      default:
        return <Line data={chartData} />;
    }
  };

  return renderChart();
};

export { Chart };
