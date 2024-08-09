'use client';

import React from 'react';

import { CardHome, Chart, ChartData, ChartsTypes } from '@/ui';
import { getData } from '@/services/sheets/get-data';
import {
  getClientsBasedOnPaymentMonth,
  getQtdClientsByMonth,
  getNewClients,
} from '@/utils/functions';
import { Card } from '@nextui-org/react';

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
  const [clientsActive, setClientsActive] = React.useState(0);
  const [clientsLeft, setClientsLeft] = React.useState(0);
  const [clientsAlreadyPaid, setClientsAlreadyPaid] = React.useState(0);
  const [newClient, setNewClient] = React.useState(0);

  React.useEffect(() => {
    const fetchData = async () => {
      const rows = await getRowsSheets();
      const dataClientsPerMonth = getQtdClientsByMonth(rows);
      const clientsActiveInThisMonth = getClientsBasedOnPaymentMonth(
        rows,
        2,
        true
      );
      const clientsLeftThePlan = getClientsBasedOnPaymentMonth(rows);
      const clientsAlreadyPaidLastMonth = getClientsBasedOnPaymentMonth(
        rows,
        1,
        true
      );
      const newClients = getNewClients(rows);

      console.log(dataClientsPerMonth, ' dataClientsPerMonth');
      setChartData(dataClientsPerMonth);
      setClientsActive(clientsActiveInThisMonth.length);
      setClientsLeft(clientsLeftThePlan.length);
      setClientsAlreadyPaid(clientsAlreadyPaidLastMonth.length);
      setNewClient(newClients.length);
    };

    fetchData();
  }, []);

  return (
    <div className='flex w-4/5 mx-auto pt-5 flex-col'>
      <div className='flex w-full justify-between flex-wrap'>
        <CardHome
          label='Alunos ativos'
          number={`${clientsActive}`}
          textTooltip='Alunos que pagaram nos últimos 2 meses'
          icon='up'
        />
        <CardHome
          label='Alunos que deixaram de ser ativos'
          textTooltip='Alunos que não pagam a mais de 2 meses'
          number={`${clientsLeft}`}
          icon='down'
        />
        <CardHome
          label='Alunos que já pagaram a mensalidade desse mês'
          textTooltip='Alunos que pagaram a mensalidade a menos que 30 dias'
          number={`${clientsAlreadyPaid}`}
          icon='money'
        />
        <CardHome
          label='Novos alunos'
          number={`${newClient}`}
          textTooltip='Alunos que começaram nos ultimos 30 dias'
          icon='new'
        />
      </div>
      <Card className='mb-5'>
        <Chart data={chartData} type='bar' />
      </Card>
    </div>
  );
};

export { Home };
