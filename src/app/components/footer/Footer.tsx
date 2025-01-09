import styles from "./footer.module.css";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.link}>
            <Link href="/projects">Projects</Link>
          </li>
          <li className={styles.link}>
            <Link href="/blog">Blog</Link>
          </li>
          <li className={styles.link}>
            <Link href="/contact">Contact</Link>
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
                Linkedin
              </a>
            </li>
            <li className={styles.social}>
              <a
                href="https://github.com/matifandy8"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                Github
              </a>
              </li>
          </ul>
          </div>
      </div>
    </footer>
  );
}