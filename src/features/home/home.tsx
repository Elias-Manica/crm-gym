'use client';

import React from 'react';

import { CardHome, Chart, ChartData, ChartsTypes } from '@/ui';
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
    <div className='flex w-4/5 mx-auto pt-5 flex-col'>
      <div className='flex w-full justify-between flex-wrap'>
        <CardHome label='Alunos ativos' number='218' icon='up' />
        <CardHome
          label='Alunos que deixaram de ser ativos'
          number='5'
          icon='down'
        />
        <CardHome
          label='Alunos que já pagaram a mensalidade desse mês'
          number='34'
          icon='money'
        />
        <CardHome label='Novos alunos' number='3' icon='new' />
      </div>
      <div>
        <select value={chartType} onChange={handleChartTypeChange}>
          <option value='line'>Line</option>
          <option value='bar'>Bar</option>
          <option value='pie'>Pie</option>
        </select>
        <Chart data={chartData} type={chartType} />
      </div>
    </div>
  );
};

export { Home };
