'use client';

import React from 'react';

import { Chart, ChartData, ChartsTypes } from '@/ui';
import { getData } from '@/services/sheets/get-data';
import { getQtdClientsByMonth } from '@/utils/functions';

const getRowsSheets = async () => {
  try {
    const data = await getData();
    return data;
  } catch (error) {
    return [];
  }
};

const Home = () => {
  const [chartData, setChartData] = React.useState<ChartData>({
    labels: [],
    values: [],
  });
  const [chartType, setChartType] = React.useState<ChartsTypes>('bar');

  React.useEffect(() => {
    const fetchData = async () => {
      const rows = await getRowsSheets();
      const dataClientsPerMonth = getQtdClientsByMonth(rows);
      setChartData(dataClientsPerMonth);
    };

    fetchData();
  }, []);

  const handleChartTypeChange = (event: any) => {
    setChartType(event.target.value);
  };

  return (
    <div>
      <select value={chartType} onChange={handleChartTypeChange}>
        <option value='line'>Line</option>
        <option value='bar'>Bar</option>
        <option value='pie'>Pie</option>
      </select>
      <Chart data={chartData} type={chartType} />
    </div>
  );
};

export { Home };
