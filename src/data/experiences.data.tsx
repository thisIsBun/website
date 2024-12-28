type experienceDataType = {
  company: string;
  service: string;
  title: string;
  period: string;
  description: string[];
  tools?: string[];
};

const experienceData: experienceDataType[] = [
  {
    company: 'job4.company',
    service: 'job4.service',
    title: 'job4.title',
    period: 'job4.period',
    description: [
      'job4.description1',
      'job4.description2',
      'job4.description3',
      'job4.description4',
      'job4.description5',
    ],
    tools: ['React', 'Styled Components', 'Storybook', 'Vite', 'WCAG'],
  },
  {
    company: 'job3.company',
    service: 'job3.service',
    title: 'job3.title',
    period: 'job3.period',
    description: [
      'job3.description1',
      'job3.description2',
      'job3.description3',
    ],
    tools: ['job3.tool1', 'job3.tool2'],
  },
  {
    company: 'job2.company',
    service: 'job2.service',
    title: 'job2.title',
    period: 'job2.period',
    description: ['job2.description1', 'job2.description2'],
    tools: ['job2.tool1', 'job2.tool2'],
  },
  {
    company: 'job1.company',
    service: 'job1.service',
    title: 'job1.title',
    period: 'job1.period',
    description: ['job1.description1'],
    tools: ['job1.tool1', 'job1.tool2'],
  },
];

export default experienceData;
