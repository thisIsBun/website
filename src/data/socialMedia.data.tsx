import React from 'react';
import { FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';

type socialMediaDataType = {
  path: string;
  element: React.ReactNode;
  ariaLabel: string;
};

const socialMediaData: socialMediaDataType[] = [
  {
    path: 'https://medium.com/@bun.coding',
    element: <FaMedium />,
    ariaLabel: "Bun's Medium link",
  },
  {
    path: 'https://github.com/thisIsBun',
    element: <FaGithub />,
    ariaLabel: "Bun's GitHub link",
  },
  {
    path: 'https://www.linkedin.com/in/bun-chen-2a4411138/',
    element: <FaLinkedin />,
    ariaLabel: "Bun's Linkedin link",
  },
];

export default socialMediaData;
