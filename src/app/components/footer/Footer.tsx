import styles from "./footer.module.css";
import Link from "next/link";
import github from "../../../../public/github.svg";
import linkedin from "../../../../public/linkedin.svg";
import Image from 'next/image'



export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <ul className={styles.links}>
            <li className={styles.link}>
              <Link href="/experience">Experience</Link>
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
                <Image
                  width={30}
                  height={30}
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
                  width={30}
                  height={30}
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