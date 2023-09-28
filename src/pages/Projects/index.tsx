import Flip from "react-reveal/Flip";
import { motion } from "framer-motion";

import { ProjectCard } from "../../components/ProjectCard/ProjectCard";
import { ProjectsData } from "../../data/ProjectsData";
import { pageVariants, pageTransition } from "../../utils/FramerAnimation";
import styles from "./projects.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const projectsOpen = "<projects>";
const projectsClose = "</projects>";

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${styles.projects} ${styles[theme]}`}>
      <motion.div
        initial="init"
        animate="anim"
        exit="last"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className={styles.wrapper}>
          <h3 className={styles.projectsOpen}>{projectsOpen}</h3>

          <div className={styles.projects_content}>
            {ProjectsData.map((item, index) =>
              index % 2 === 0 ? (
                <Flip top key={item.title}>
                  <ProjectCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    GitHub={item.GitHub}
                    hosted={item.hosted}
                  />
                </Flip>
              ) : (
                <Flip bottom key={item.title}>
                  <ProjectCard
                    key={item.title}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    GitHub={item.GitHub}
                    hosted={item.hosted}
                  />
                </Flip>
              )
            )}
          </div>

          <h3 className={styles.projectsClose}>{projectsClose}</h3>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
