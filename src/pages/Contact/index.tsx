import { useContext, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import emailjs from "@emailjs/browser";

import { pageVariants, pageTransition } from "../../utils/FramerAnimation";
import styles from "./contact.module.scss";
import lottieData from "../../assets/email.json";
import { ThemeContext } from "../../context/ThemeContext";

const contactOpen = "<Contact />";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleOnchange = (e: any) =>
    setContactData({ ...contactData, [e.target.name]: e.target.value });

  const handleOnsubmit = (e: any) => {
    e.preventDefault();
    emailjs
      .send(
        "service_bw42ixw",
        "template_mnu4fow",
        {
          from_name: contactData.name,
          to_name: "Rajdeep",
          from_email: contactData.email,
          to_email: "rajdeep1999.srivastav@gmail.com",
          message: contactData.message,
        },
        "Pn_MPbzbJdOMOINMr"
      )
      .then(
        () => {
          alert("Thank you, I will get back to you asap");
          setContactData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          alert("Something went wrong, Try again");
        }
      );
  };

  return (
    <div className={`${styles.contact} ${styles[theme]}`}>
      <motion.div
        initial="init"
        animate="anim"
        exit="last"
        variants={pageVariants}
        transition={pageTransition}
        className={styles.wrapper}
      >
        <div className={styles.form}>
          <h3 className={styles.contactOpen}>{contactOpen}</h3>
          <form onSubmit={handleOnsubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={contactData.name}
              onChange={handleOnchange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={contactData.email}
              onChange={handleOnchange}
            />
            <textarea
              name="message"
              cols={30}
              rows={5}
              placeholder="Your Message"
              required
              value={contactData.message}
              onChange={handleOnchange}
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className={styles.lottie}>
          <Lottie animationData={lottieData} height="100%" width="100%" />
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
