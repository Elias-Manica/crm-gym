'use server';

import { doc } from '../api/connect-sheets';

async function getTitle() {
  try {
    await doc.loadInfo();
    console.log(doc.title, ' doc title');
  } catch (error) {
    console.log(error);
  }
}

export { getTitle };
