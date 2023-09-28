import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

import { LinksData } from "./LinksData";
import styles from "./navbar.module.scss";
import { ThemeContext } from "../../context/ThemeContext";
import Lottie from "lottie-react";
import day_mode from "../../assets/dark_mode.json";
import light_mode from "../../assets/light_mode.json";

const Navbar = () => {
  const [isMenuOpen, setIsmenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleMobileMenuToggle = () => setIsmenuOpen(!isMenuOpen);

  return (
    <>
      <div className={`${styles.navbar} ${styles[theme]}`}>
        <div className={styles.title_toggle_div}>
          <Lottie
            onClick={toggleTheme}
            animationData={theme === "dark" ? light_mode : day_mode}
            style={{ height: "40px", cursor: "pointer" }}
          />
          <h2 className={styles.logo}>Portfolio</h2>
        </div>
        <div className={styles.desktopitems}>
          {LinksData.map((link) => (
            <NavLink
              to={link.linkTo}
              key={link.title}
              className={styles.link}
              style={({ isActive }) =>
                isActive
                  ? {
                      background: "rgb(68 68 68 / 55%)",
                      borderBottom: "3px solid rgba(40, 40, 40, 0.67",
                    }
                  : { color: "white" }
              }
            >
              {link.title}
            </NavLink>
          ))}
        </div>
        <div className={styles.mobileview}>
          <div
            className={
              isMenuOpen
                ? `${styles.mobilemenu} ${styles.active}`
                : styles.mobilemenu
            }
            onClick={handleMobileMenuToggle}
          >
            <IoMenu size={40} color="#ffffff" />
          </div>

          <div
            className={
              !isMenuOpen
                ? `${styles.mobilemenu} ${styles.active}`
                : styles.mobilemenu
            }
            onClick={handleMobileMenuToggle}
          >
            <IoClose size={40} color="#ffffff" />
          </div>
        </div>
      </div>
      <div
        className={
          isMenuOpen
            ? `${styles.mobileMenuModal}  ${styles.active} ${styles[theme]}`
            : styles.mobileMenuModal
        }
      >
        {LinksData.map((link) => (
          <NavLink
            to={link.linkTo}
            key={link.title}
            className={styles.mobileLinks}
            onClick={handleMobileMenuToggle}
            style={({ isActive }) =>
              isActive
                ? {
                    background: "rgb(68 68 68 / 55%)",
                    borderBottom: "3px solid rgba(40, 40, 40, 0.67",
                  }
                : { color: "white" }
            }
          >
            {link.title}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Navbar;
