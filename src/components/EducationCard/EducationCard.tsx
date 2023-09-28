import { FC, useContext } from "react";
import { IoIosSchool } from "react-icons/io";

import styles from "./educationCard.module.scss";
import { ThemeContext } from "../../context/ThemeContext";

interface EducationCardProps {
  title: string;
  date: string;
  details: string[];
  isLeft?: boolean;
}

const EducationCard: FC<EducationCardProps> = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${styles.row} ${styles[theme]} ${
        props.isLeft ? styles.row_1 : styles.row_2
      }`}
    >
      <section>
        <IoIosSchool className={styles.icon} />
        <div className={styles.details}>
          <span className={styles.title}>{props.title}</span>
          <span>{props.date}</span>
        </div>
        {props.details.map((item) => (
          <p key={item}>◉ {item}</p>
        ))}
      </section>
    </div>
  );
};

export { EducationCard };
