import { parse, format } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';

import { RowsTypes } from '@/services/sheets/sheets.types';

import { ChartData } from '@/ui';

type GroupedData = {
  [key: string]: number;
};

export function getQtdClientsByMonth(rawData: RowsTypes[]): ChartData {
  const groupedData = rawData.reduce<GroupedData>((acc, item) => {
    const date = parse(item.start, 'dd/MM/yyyy', new Date());
    const month = format(date, 'MMM yyyy', { locale: ptBR });
    if (!acc[month]) {
      acc[month] = 0;
    }
    acc[month] += 1;
    return acc;
  }, {});

  const labels = Object.keys(groupedData);
  const values = Object.values(groupedData);

  return { labels, values };
}
