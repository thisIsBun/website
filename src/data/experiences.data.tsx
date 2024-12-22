import React from 'react';

type experienceDataType = {
  company: string;
  title: string;
  period: string;
  description: (string | React.ReactNode)[];
  tools?: string[];
};

const experienceData: experienceDataType[] = [
  {
    company: 'Castles',
    title: 'Engineer',
    period: 'Present - 2023',
    description: [
      'Developed React.js platforms for B2B clients, and built reusable UI components using Styled Components and Storybook.',
      'Migrated the build tool from Webpack to Vite by referencing official documentation, reducing server startup time and improving development efficiency.',
      'Studied the details of WCAG 2.1 guidelines and analyzed the project codebase to evaluate the adjustments needed for compliance with accessibility standards.',
      'Documented development process with detailed requirements and change scopes to ensure alignment with project needs, enhancing development quality.',
      'Proactively discussed requirements with teams, ensured alignment with customer needs, and resolved issues early to streamline development.',
    ],
    tools: ['React', 'Styled Components', 'Storybook', 'Vite', 'WCAG'],
  },
  {
    company: 'QNAP',
    title: 'Software Product Manager',
    period: '2023 - 2021',
    description: [
      'Led development of crowd flow analysis and facial recognition software.',
      'Partnered with UI/UX designers and engineers to evaluate feasibility and optimize user experience.',
      'Authored detailed MVPs, PRDs, and marketing content to support software launches',
    ],
    tools: ['Product Design', 'Cross-functional Collaborations'],
  },
  {
    company: 'ASUS',
    title: 'Software Project Manager',
    period: '2021 - 2020',
    description: [
      'Led a task force to enhance software stability by collaborating with global key users to clarify and reproduce issues based on their usage scenarios.',
      'Presented at the annual global sales meeting, earning recognition from the sales team for significant improvements in software stability.',
    ],
    tools: ['Software Troubleshooting', 'Cross-functional Collaborations'],
  },
  {
    company: 'ASUS',
    title: 'Hardware Product Manager',
    period: '2020 - 2015',
    description: [
      'Led development of ROG gaming keyboards and mice, earning the 2018 German iF Design Award.',
    ],
    tools: ['Product Development', 'Cross-functional Collaborations'],
  },
];

export default experienceData;
