import React from "react";
import { SiTailwindcss } from "react-icons/si";

// import { image } from "motion/react-client";

export const myProjects = [ 
  {
    id: 1,
    title: "FitDrip Exercises",
    description: "Focuses more on the various kinds of Exercises on the different parts of the body you as an individual can work on.",
    Image: "/src/assets/Boy-fitness.png",

    tags: [
      {
        id: 1,
        name: "React",
        path: "/src/assets/react.svg",
      },
      {
        id: 2,
        name: "Vite",
        path: "/vite.svg",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        path: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 48 48"
            fill="none"
            className="text-sky-400"
          >
            <path
              fill="#38BDF8"
              d="M24 10c-6.627 0-10.793 3.667-12.5 11 2.5-3.667 5.333-5.5 8.5-5.5 2.118 0 3.627 1.072 4.527 3.217C25.912 20.862 26.99 21.5 28 21.5c2.706 0 5.206-1.206 7.5-3.217C34.5 14.167 30.333 10 24 10z"
            />
            <path
              fill="#38BDF8"
              d="M11.5 24.5c-6.627 0-10.793 3.667-12.5 11 2.5-3.667 5.333-5.5 8.5-5.5 2.118 0 3.627 1.072 4.527 3.217C12.912 34.362 13.99 35 15 35c2.706 0 5.206-1.206 7.5-3.217C21.5 28.667 17.333 24.5 11.5 24.5z"
            />
          </svg>
        ),
      },
    ],
  },
];


export const mySocials = [
  {
    name: "Whatsapp",
    href: "https://api.whatsapp.com/send/?phone=%2B7049593176&type=phone_number&app_absent=0",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#25D366"
          d="M16 0a16 16 0 0 0-13.832 24.3L0 32l8.109-2.134A16 16 0 1 0 16 0z"
        />
        <path
          fill="#FFF"
          d="M25.478 22.508c-.389-.195-2.297-1.133-2.652-1.264-.355-.13-.613-.195-.872.195s-1 1.265-1.226 1.521c-.226.26-.452.293-.84.098-.388-.195-1.636-.604-3.117-1.926-1.152-1.026-1.93-2.293-2.156-2.682-.226-.39-.024-.6.17-.796.174-.173.388-.452.582-.678.194-.227.258-.39.388-.65.13-.26.065-.487-.033-.681-.098-.195-.872-2.1-1.196-2.877-.316-.76-.638-.656-.872-.666-.226-.01-.484-.012-.742-.012-.259 0-.68.098-1.035.487-.355.388-1.355 1.325-1.355 3.234s1.386 3.75 1.58 4.01c.194.26 2.73 4.184 6.62 5.87.926.398 1.647.635 2.21.814.928.295 1.773.254 2.44.154.744-.111 2.297-.938 2.623-1.84.323-.902.323-1.672.226-1.84-.097-.165-.355-.26-.744-.455z"
        />
      </svg>
    ),
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/michael-emediong-41382436a/",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#0077B5"
          d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0z"
        />
        <path
          fill="#fff"
          d="M35.9 47.6h13.9v44.7H35.9zM42.9 36.1c4.4 0 8 3.6 8 8s-3.6 8-8 8a8.008 8.008 0 1 1 0-16zM55.9 47.6h13.4v6.1h.2c1.9-3.3 6.5-6.7 13.4-6.7 14.3 0 16.9 9.4 16.9 21.7v23.6H85.8V70.2c0-5.7-.1-13-7.9-13-7.9 0-9.1 6.1-9.1 12.5v23.6H55.9V47.6z"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/scarletfate_13/",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            id="instaGradient"
            cx="64"
            cy="64"
            r="64"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#feda75" />
            <stop offset="50%" stopColor="#d62976" />
            <stop offset="100%" stopColor="#4f5bd5" />
          </radialGradient>
        </defs>
        <path
          fill="url(#instaGradient)"
          d="M92 0H36C16.1 0 0 16.1 0 36v56c0 19.9 16.1 36 36 36h56c19.9 0 36-16.1 36-36V36c0-19.9-16.1-36-36-36z"
        />
        <path
          fill="#fff"
          d="M64 38.3c-14.2 0-25.7 11.5-25.7 25.7S49.8 89.7 64 89.7s25.7-11.5 25.7-25.7S78.2 38.3 64 38.3zm0 42.5c-9.3 0-16.8-7.6-16.8-16.8s7.6-16.8 16.8-16.8 16.8 7.6 16.8 16.8-7.5 16.8-16.8 16.8zM93.6 36.4c0 2.7-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5 5 2.3 5 5z"
        />
      </svg>
    ),
  },
];

export const experiences = [
  {
    title: "Frontend Dev",
    job: "Intern",
    date: "2023-2025",
    content: "As a Frontend Developer, I specialize in building responsive and user-centric web interfaces using React and Tailwind CSS. I translate design concepts into high-performance, accessible, and pixel-perfect UIs. My workflow includes integrating APIs, optimizing components for speed, and maintaining clean, reusable code. I'm passionate about creating seamless user experiences and continuously improving performance and accessibility. Collaboration with designers and backend engineers is central to my process, ensuring functionality aligns with visual design."
  },
  {
    title: "Software Dev",
    job: "Intern",
    date: "2023-2025",
    content: "As a software developer, I design and build applications that solve real-world problems. I enjoy working with both frontend and backend technologies to create seamless user experiences. Writing clean, efficient code and constantly learning new tools are part of my daily routine. Collaboration, problem-solving, and innovation drive my passion for development.",
  },
  {
    title: "Freelancer Dev",
    job: "Intern",
    date: "2023-2025",
    content: "As a freelance developer, I work with clients to turn their ideas into functional, user-friendly digital solutions. I manage projects independently, handling both design and development tasks. Flexibility and communication are key as I adapt to different workflows and requirements. Every project is an opportunity to grow and deliver impactful results.",
  },
  {
    title: "Saxophonist",
    date: "2017-Date",
    content: "As a saxophonist, I express emotion through every note, blending rhythm and melody to create soulful music. Whether performing solo or with a band, I use my instrument to tell stories that words cannot. The saxophone is not just an instrument—it's an extension of my voice and passion. Music is my way of connecting with people on a deeper level."
  },
];
