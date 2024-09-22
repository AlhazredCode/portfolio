'use client';
import React from 'react';
import { ChartData } from '@/types/chartdata';

// Component to store chart data
const ChartsData = (): ChartData[] => {
  const chartsData: ChartData[] = [
    {
      name: 'Design Skills',
      series: [
        {
          name: 'My Skill', // Nombre de la serie única
          data: [90, 75, 80, 85, 70], // Datos combinados
        },
      ],
      labels: ['Figma', 'Adobe XD', 'Sketch'], // Etiquetas actualizadas
    },
    {
      name: 'Code Skills',
      series: [
        {
          name: 'My Skill',
          data: [85, 70, 80],
        },
      ],
      labels: ['React', 'Python', 'Node.js'],
    },
    {
      name: '3D Skills',
      series: [
        {
          name: 'My Skill',
          data: [95, 80, 75], 
        },
      ],
      labels: ['Blender', 'Cinema 4D', 'ZBrush'],
    },
    {
      name: 'Motion Skills',
      series: [
        {
          name: 'My Skill', 
          data: [90, 75, 80], 
        },
      ],
      labels: ['After Effects', 'Premiere Pro', 'Nuke'], 
    },
    {
      name: 'Branding Skills',
      series: [
        {
          name: 'My Skill', 
          data: [85, 70, 80], 
        },
      ],
      labels: ['Illustrator', 'Photoshop', 'InDesign'],
    },
  ];

  return chartsData;
};

export default ChartsData;