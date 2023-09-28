import { ImGithub, ImLinkedin, ImYoutube } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";

interface LinksType {
  title: string;
  icon: any;
  link: string;
}

export const LinksData: LinksType[] = [
  {
    title: "GitHub",
    icon: <ImGithub color="#000000dc" />,
    link: "https://github.com/rajdeepsri",
  },
  {
    title: "LinkedIn",
    icon: <ImLinkedin color="#000000dc" />,
    link: "https://www.linkedin.com/in/rajdeep-shrivastava-199a9822a/",
  },
  {
    title: "Leetcode",
    icon: <SiLeetcode color="#000000dc" />,
    link: "https://leetcode.com/Razz_coding/",
  },
  {
    title: "Youtube",
    icon: <ImYoutube color="#000000dc" />,
    link: "https://www.youtube.com/@rajdeepedits3674",
  },
];
