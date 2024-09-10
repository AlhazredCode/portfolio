import React from 'react';

// Define the Skill type
export interface Skill {
  id: number;
  name: string;
  description: string;
  tags: string[];
  image: string; // Path to the image
}

// Create the Skills array
const Skills: Skill[] = [
  {
    id: 1,
    name: 'Design',
    description: 'Expertise in creating visually appealing and user-friendly interfaces and experiences.',
    tags: ['UI/UX', 'Graphic Design', 'Branding'],
    image: '/assets/images/skills/design.jpg', // Replace with your image path
  },
  {
    id: 2,
    name: 'Code',
    description: 'Proficient in various programming languages and frameworks for web and mobile development.',
    tags: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js'],
    image: '/assets/images/skills/code.jpg', // Replace with your image path
  },
  {
    id: 3,
    name: '3D',
    description: 'Skilled in creating realistic 3D models and animations for various applications.',
    tags: ['Blender', 'Cinema 4D', '3D Modeling', 'Animation'],
    image: '/assets/images/skills/3d.jpg', // Replace with your image path
  },
  {
    id: 4,
    name: 'Motion',
    description: 'Experience in creating engaging motion graphics and animations for videos and web content.',
    tags: ['After Effects', 'Motion Design', 'Animation', 'Video Editing'],
    image: '/assets/images/skills/motion.jpg', // Replace with your image path
  },
  {
    id: 5,
    name: 'Branding',
    description: 'Ability to develop and implement effective branding strategies for businesses and products.',
    tags: ['Brand Identity', 'Logo Design', 'Marketing', 'Brand Strategy'],
    image: '/assets/images/skills/branding.jpg', // Replace with your image path
  },
];

export default Skills;