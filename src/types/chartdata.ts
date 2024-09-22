// chartData.ts

export interface ChartData {
    name: string;
    series: { name: string; data: number[] }[];
    labels: string[];
  }