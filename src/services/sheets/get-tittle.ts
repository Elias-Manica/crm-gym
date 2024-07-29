'use server';

import { doc } from '../api/connect-sheets';

async function infoSheets() {
  try {
    await doc.loadInfo();
  } catch (error) {
    console.log(error);
  }
}

export { infoSheets };
