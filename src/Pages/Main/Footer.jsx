import meImg from "../../assets/img/me2.jpg";
import styles from "./Main.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <h3>Park Hee Soon</h3>
      </div>
      <div className={styles.footerBottom}>
        <h3>Links</h3>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#stacks">Stacks</a>
          </li>
          <li>
            <a href="#project">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact With Me</a>
          </li>
        </ul>
      </div>
      <p>Copyright ©2023 HeeSoon. All Rights Reserved.</p>
    </footer>
  );
}
