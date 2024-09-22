'use client';
import React from 'react';
import Chart from 'react-apexcharts'; // Importa ApexOptions
import { ApexOptions } from 'apexcharts';
import ApexCharts from 'apexcharts';
import ChartsData  from '@/api/chartsData';
import { ChartData } from '@/types/chartdata';
interface SkillsChartProps {
  chartName?: string; // Nombre del gráfico a mostrar (opcional)
}

const SkillsChart: React.FC<SkillsChartProps> = ({ chartName = 'Design Skills' }) => {
  const chartsData: ChartData[] = ChartsData();

  // Buscar los datos del gráfico especificado en chartName
  const chartData = chartsData.find((data) => data.name === chartName);

  // Si no se encuentra el gráfico, usar los datos de 'Design Skills' por defecto
  const { series, labels } = chartData || chartsData[0];

  const options: ApexOptions = { // Define el tipo de 'options'
    chart: {
      type: 'radar', 
       toolbar: {
      show: false, 
    },
    },
    
    series: series,
    labels: labels,
    fill: {
      opacity: 0.5,
      colors: ['#008FFB', '#00E396', '#FEB019'], 
    },
    stroke: {
      width: 2,
      colors: ['#008FFB', '#00E396', '#FEB019'], 
    },
    markers: {
      size: 5,
      hover: {
        size: 10,
      },
    },
    plotOptions: {
      radar: {
        polygons: {
            strokeColors: '#e8e8e8', // Corregido a 'strokeColors'
            fill: {
              colors: ['#f8f8f8', '#fff'],
            },
        },
      },
    },
    yaxis: {
      show: false, 
    },
    xaxis: {
      labels: {
        style: {
          colors: ['#a8a8a8'],
          fontSize: '12px',
          fontFamily: 'Arial',
        },
      },
    },
    dataLabels: {
      enabled: true,
      background: {
        enabled: true,
        borderRadius: 2,
      },
    },
    legend: {
        show: false, 
      },
  };

  return (
    <Chart options={options} series={options.series} type="radar" height={400} />
  );
};

export default SkillsChart;