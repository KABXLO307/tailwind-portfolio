import { nanoid } from 'nanoid';
import { FaHtml5 } from 'react-icons/fa';
import { BiLogoTypescript } from "react-icons/bi";
import { AiOutlineDotNet } from "react-icons/ai";
import backroads from './assets/Backroads.png'
import Teams from './assets/Teams.png'


export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'JavaScript, HTML & CSS',
    icon: <FaHtml5 className='h-16 w-16 text-sky-500' />,
    text: 'Highly skilled in JavaScript, HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Typescript',
    icon: <BiLogoTypescript className='h-16 w-16 text-sky-500' />,
    text: 'Expertise in Typescript, building interactive and dynamic web applications that communicate with a focus on seamless user interactions and functionality.',
  },
  {
    id: nanoid(),
    title: 'Dotnet',
    icon: <AiOutlineDotNet className='h-16 w-16 text-sky-500' style={{ transform: "scale(1.5)" }} />,
    text: 'Use .NET to build scalable, secure backend applications and APIs, handling business logic, database interactions, and authentication in modern web systems.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: backroads,
    url: 'https://temp-backroad-app.vercel.app/',
    github: 'https://github.com/KABXLO307/temp-backroad-app/tree/main',
    title: 'Backroads',
    text: 'Created an MVP landing page for an american touring company Stack: JavaScript, React, Tailwind',
  },
  {
    id: nanoid(),
    img: Teams,
    url: 'https://teams-clone-app.onrender.com/',
    github: 'https://github.com/KABXLO307/teams-clone-app',
    title: 'Teams clone',
    text: 'Full stack Microsoft Teams clone, with MongoDB back and real time chat messaging using socket.io',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
