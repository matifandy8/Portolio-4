import styles from "./footer.module.css";
import Link from "next/link";
import github from "../../../../public/github.svg";
import linkedin from "../../../../public/linkedin.svg";
import Image from "next/image";



export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <ul className={styles.links}>
            <li className={styles.link}>
              <a href="#experience">Experience</a>
            </li>
            <li className={styles.link}>
              <a href="#projects">Projects</a>
            </li>
            <li className={styles.link}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className={styles.socials}>
            <li className={styles.social}>
              <a
                href="https://www.linkedin.com/in/matiasfandino/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Image
                  width={40}
                  height={40}
                  alt="linkedin icon"
                  src={linkedin}
                />
              </a>
            </li>
            <li className={styles.social}>
              <a
                href="https://github.com/matifandy8"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Image
                  width={40}
                  height={40}
                  alt="github icon"
                  src={github}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}