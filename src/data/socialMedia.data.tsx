import React from 'react';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';

type socialMediaDataType = {
  path: string;
  element: React.ReactNode;
};

const socialMediaData: socialMediaDataType[] = [
  {
    path: 'https://medium.com/@bun.coding',
    element: <FaMedium />,
  },
  {
    path: 'https://github.com/thisIsBun',
    element: <FaGithub />,
  },
  {
    path: 'https://www.linkedin.com/in/bun-chen-2a4411138/',
    element: <FaLinkedin />,
  },
];

export default socialMediaData;
