import { FC, useContext } from "react";

import { LinkButton } from "./LinkButton";
import styles from "./projectCard.module.scss";
import { ThemeContext } from "../../context/ThemeContext";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  GitHub: string;
  hosted: string;
}

const ProjectCard: FC<ProjectCardProps> = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles.projectCard} ${styles[theme]}`}>
      <div className={styles.imagewrapper}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={styles.content}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className={styles.buttons}>
          {props.GitHub && <LinkButton isGitHub={true} link={props.GitHub} />}
          <LinkButton isGitHub={false} link={props.hosted} />
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
