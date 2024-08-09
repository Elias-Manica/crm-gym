import { parse } from 'date-fns';

import { RowsTypes } from '@/services/sheets/sheets.types';

export function getClientsBasedOnPaymentMonth(
  rawData: RowsTypes[],
  monthsWithoutPayment: number = 2,
  inactive: boolean = false
) {
  const currentDate = new Date();

  return rawData.filter((client) => {
    const lastPaymentDate = parse(client.lastPayment, 'dd/MM/yyyy', new Date());

    const diffTime = currentDate.getTime() - lastPaymentDate.getTime();

    const diffMonths = diffTime / (1000 * 60 * 60 * 24 * 30);
    if (inactive) {
      return diffMonths < monthsWithoutPayment;
    }
    return diffMonths > monthsWithoutPayment;
  });
}
