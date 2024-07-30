export type ChartData = {
  labels: string[];
  values: number[];
};

export type ChartsTypes = 'line' | 'bar' | 'pie';

export type ChartProps = {
  data: ChartData;
  type: ChartsTypes;
};
