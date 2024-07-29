'use client';

import React from 'react';

import { Button } from '@nextui-org/button';

import { Chart, NameCompany } from '@/ui';
import { getTitle } from '@/services/sheets/get-tittle';
import { getData } from '@/services/sheets/get-data';

const getRowsSheets = async () => {
  try {
    const data = await getData();
    console.log(data, ' data');
    // return transformData(rows);
  } catch (error) {
    console.log(error);
  }
};

const Home = () => {
  const [chartData, setChartData] = React.useState({ labels: [], values: [] });

  React.useEffect(() => {
    const rows = getRowsSheets();
    // setChartData(rows);
  }, []);

  return (
    <div>
      Home
      <NameCompany />
      <Button
        className='btn-custom'
        onClick={() => {
          getTitle();
        }}
      >
        Titulo da tabela
      </Button>
      <Button
        className='btn-custom'
        onClick={() => {
          getData();
        }}
      >
        Dados da tabela
      </Button>
      {/* <Chart data={chartData} /> */}
    </div>
  );
};

export { Home };
