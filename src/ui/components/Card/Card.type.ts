export type IconKey = 'up' | 'down' | 'money' | 'new';

export type CardType = {
  label: string;
  number: string;
  icon?: IconKey;
  textTooltip: string;
};
