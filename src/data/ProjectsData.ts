interface ProjectsType {
  title: string
  description: string
  image: string
  GitHub: string
  hosted: string
}

export const ProjectsData: ProjectsType[] = [
  {
    title: 'Youtube Clone',
    description: `A modern youtube clone made with React.js, MaterialUI and RapidAPI`,
    image: "/youtube.png",
    GitHub: 'https://github.com/rajdeepsri/youtube-clone',
    hosted: 'https://utube-cloned.netlify.app/',
  },
  {
    title: 'Sorting Visualizer',
    description: `Made using Vanilla Javascript, visualizing how sorting works`,
    image: '/sorting.png',
    GitHub: 'https://github.com/rajdeepsri/sorting_visualizer',
    hosted: 'https://sorting-visualizer-app-test.netlify.app/',
  },
  {
    title: 'Dice Game',
    description: `Interactive game built using React.js and TailwindCSS`,
    image: '/dice.png',
    GitHub: 'https://github.com/rajdeepsri/dice-game-react',
    hosted: 'https://dice-gameapps.netlify.app/',
  },
  {
    title: 'PX to REM Converter',
    description: `Simple Pixel to REM Converter made (for personal use) using React.js`,
    image: '/px.png',
    GitHub: 'https://github.com/rajdeepsri/px-to-rem',
    hosted: 'https://px2rem.netlify.app/',
  },
  {
    title: 'Hangman Game',
    description: `Intuitive game made using React.js and Typescript`,
    image: '/hangman.png',
    GitHub: 'https://github.com/rajdeepsri/hangman-game-react',
    hosted: 'https://hangman-game-react-ts.netlify.app/',
  },
  {
    title: '3D Portfolio',
    description: `Personal portfolio built with React, Router, THREE.js and Framer Motion`,
    image: '/3d-portfolio.png',
    GitHub: 'https://github.com/rajdeepsri/3d-portfolio',
    hosted: 'https://3d-portfolio-razz.netlify.app/',
  },
];
