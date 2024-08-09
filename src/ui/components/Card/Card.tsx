import { Card, CardBody, Tooltip } from '@nextui-org/react';

import {
  FiTrendingUp,
  FiTrendingDown,
  FiDollarSign,
  FiUserPlus,
} from 'react-icons/fi';

import type { CardType, IconKey } from './Card.type';

const iconMap: Record<IconKey, React.ReactNode> = {
  up: <FiTrendingUp size={30} color='green' />,
  down: <FiTrendingDown size={30} color='red' />,
  money: <FiDollarSign size={30} color='green' />,
  new: <FiUserPlus size={30} color='green' />,
};

const CardHome = ({
  label,
  number,
  textTooltip = '',
  icon = 'up',
}: CardType) => {
  return (
    <Tooltip content={textTooltip}>
      <Card className='w-64 m-3'>
        <CardBody className='justify-center'>
          <div className='flex justify-between items-center'>
            <div className='items-center'>
              <p className='text-tiny uppercase font-bold'>{label}</p>
              <p className='font-bold text-large'>{number}</p>
            </div>
            {iconMap[icon]}
          </div>
        </CardBody>
      </Card>
    </Tooltip>
  );
};

export { CardHome };
