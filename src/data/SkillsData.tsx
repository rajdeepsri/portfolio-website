import { FaReact, FaNodeJs, FaHtml5, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiRedux,
  SiCss3,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiCplusplus,
  SiFirebase,
  SiAdobeaftereffects,
} from "react-icons/si";
import { ImGit } from "react-icons/im";
import { ReactElement } from "react";

interface SkillsType {
  name: string;
  icon: ReactElement;
  link: string;
}

export const SkillsData: SkillsType[] = [
  {
    name: "JavaScript",
    icon: <IoLogoJavascript color="#000000dc" />,
    link: "https://www.javascript.com/",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript color="#000000dc" />,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: <FaReact color="#000000dc" />,
    link: "https://react.dev/",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs color="#000000dc" />,
    link: "https://nextjs.org/",
  },
  {
    name: "Redux",
    icon: <SiRedux color="#000000dc" />,
    link: "https://redux.js.org/",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs color="#000000dc" />,
    link: "https://nodejs.org/",
  },
  {
    name: "HTML",
    icon: <FaHtml5 color="#000000dc" />,
    link: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS",
    icon: <SiCss3 color="#000000dc" />,
    link: "https://www.w3schools.com/css/",
  },
  {
    name: "SASS",
    icon: <FaSass color="#000000dc" />,
    link: "https://sass-lang.com/",
  },
  {
    name: "Material-Ui",
    icon: <SiMui color="#000000dc" />,
    link: "https://mui.com/",
  },
  {
    name: "Tailwind-CSS",
    icon: <SiTailwindcss color="#000000dc" />,
    link: "https://tailwindcss.com/",
  },
  {
    name: "Git",
    icon: <ImGit color="#000000dc" />,
    link: "https://git-scm.com/",
  },
  {
    name: "C++",
    icon: <SiCplusplus color="#000000dc" />,
    link: "https://cplusplus.com/",
  },
  {
    name: "Firebase",
    icon: <SiFirebase color="#000000dc" />,
    link: "https://firebase.google.com/",
  },
  {
    name: "Adobe After Effects",
    icon: <SiAdobeaftereffects color="#000000dc" />,
    link: "https://www.adobe.com/in/products/aftereffects.html",
  },
];
