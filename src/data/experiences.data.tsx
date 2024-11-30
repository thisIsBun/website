import React from 'react';
import Strong from '../components/fonts/Strong.style';
import Anchor from '../components/others/Anchor.style';

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
    period: 'May 2023 — Present',
    description: [
      <>
        <Strong>Collaborate</Strong> with PMs, backend engineers, and QA teams
        to deliver functional, user-friendly digital interfaces within a
        one-month agile cycle.
      </>,
      <>
        <Strong>Engage</Strong> in requirement discussions, analyze user
        workflows, and proactively address potential challenges to boost
        development efficiency and product quality.
      </>,
      <>
        <Strong>Document</Strong> system designs with detailed requirement
        backgrounds and change scopes, ensuring clarity and providing reliable
        references for future development.
      </>,
      <>
        <Strong>Refactor</Strong> and optimize key areas of the codebase to
        enhance product quality, maintainability, and stability.
      </>,
    ],
    tools: ['JavaScript', 'React', 'Storybook', 'Vite', 'Docker'],
  },
  {
    company: 'QNAP',
    title: 'Software Product Manager',
    period: 'Jun 2021 — May 2023',
    description: [
      'Responsible for QVR-Human(crowd flow analysis), and QVR-Face(face recognition) software development.',
      'Collaborated with UI/UX designers to evaluate feasibility with frontend and backend engineers, assisting QA in defining tests.',
      'Defined MVP, wrote PRD, and provided marketing materials.',
    ],
    tools: ['Product Design', 'Cross-functional Collaborations'],
  },
  {
    company: 'Asus',
    title: 'Software Project Manager',
    period: 'Apr 2020 — Jun 2021',
    description: [
      'Lead the task force team to improve software stability.',
      'Gathered user issues from various countries, supported QA in reproducing issues.',
    ],
    tools: ['Software Troubleshooting', 'Cross-functional Collaborations'],
  },
  {
    company: 'Asus',
    title: 'Hardware Product Manager',
    period: 'May 2015 — Apr 2020',
    description: [
      'Responsible for the ROG gaming keyboard and mouse development.',
      <>
        Won the German{' '}
        <Anchor
          to='https://ifdesign.com/en/winner-ranking/project/cerberus-fortus/234226'
          target
          underline
          ariaLabel='if Design award website'
        >
          iF Design Award
        </Anchor>{' '}
        in 2018.
      </>,
    ],
    tools: ['Product Development', 'Cross-functional Collaborations'],
  },
];

export default experienceData;
