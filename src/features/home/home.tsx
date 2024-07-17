import React from 'react';

import { Button } from '@nextui-org/button';

import { NameCompany } from '@/ui';

const Home = () => {
  return (
    <div>
      Home
      <NameCompany />
      <Button className='btn-custom'>teste</Button>
    </div>
  );
};

export { Home };
