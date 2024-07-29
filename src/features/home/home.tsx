'use client';

import React from 'react';

import { Button } from '@nextui-org/button';

import { NameCompany } from '@/ui';
import { infoSheets } from '@/services/sheets/get-tittle';

const Home = () => {
  const getInfosSheets = async () => {
    console.log('get');
    await infoSheets();
  };

  return (
    <div>
      Home
      <NameCompany />
      <Button
        className='btn-custom'
        onClick={() => {
          getInfosSheets();
        }}
      >
        testee
      </Button>
    </div>
  );
};

export { Home };
