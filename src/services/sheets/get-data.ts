'use server';

import { doc } from '../api/connect-sheets';

async function getData() {
  try {
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
    const transformedRows = rows.map((item) => ({
      name: item.get('Nome'),
      age: item.get('Idade'),
      start: item.get('Data de inicio'),
      price: item.get('Preço Plano'),
      active: item.get('Pago'),
    }));
    return transformedRows;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export { getData };
