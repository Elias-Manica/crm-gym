import { parse } from 'date-fns';

import { RowsTypes } from '@/services/sheets/sheets.types';

export function getNewClients(
  rawData: RowsTypes[],
  monthBaseOfStart: number = 1
) {
  const currentDate = new Date();

  return rawData.filter((client) => {
    const startDate = parse(client.start, 'dd/MM/yyyy', new Date());

    const diffTime = currentDate.getTime() - startDate.getTime();

    const diffMonths = diffTime / (1000 * 60 * 60 * 24 * 30);
    return diffMonths < monthBaseOfStart;
  });
}
