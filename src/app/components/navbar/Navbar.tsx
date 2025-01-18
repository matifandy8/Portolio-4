"use client";

import { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <div className={styles.menulinks}>
            <ul className={styles.links}>
              <li className={styles.link}>
                <Link className={styles.logo} href="/"><svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 126.01 103.16">
                  <path fill="#ffffff" d="M126.01 17.94h-4.47v65.77h-4.46v-12h-4.44V59.66h-4.47V47.6h-4.48V35.43h-4.51v12.19h4.48v12.05h4.48v12.06h4.44v12.05h4.46v14.91H26.86V95.8h-4.49V83.75H17.9V71.71h-4.44V59.66H8.99V47.6H4.51V35.45h94.66v-4.47H19.53V8.97h4.48v-4.5h32.63V0H24.01v4.46H19.5v4.45h-4.44v22.07H4.48v4.45H0v12.19h4.48v12.05h4.47v12.06h4.45v12.05h4.46v12.04h4.49v4.48h4.48v2.86h90.21V98.9h4.5v-4.71h4.47V17.94z"></path>
                  <path fill="#ffffff" d="M56.66 4.46h4.51v4.51h-4.51zM117.03 17.94h4.51v-4.51h-4.5V8.97H61.17v4.47h55.86v4.5z"></path>
                </svg>MF</Link>
              </li>
              <li className={styles.link}>
                <Link href="#experience">Experience</Link>
              </li>
              <li className={styles.link}>
                <Link href="#projects">Projects</Link>
              </li>
              <li className={styles.link}>
                <Link href="#blog">Blog</Link>
              </li>
              <li className={styles.link}>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className={styles.menulinks_mobile}>

            <ul className={styles.links_mobile}>
              <li className={styles.links_mobile}>
                <Link className={styles.logo} href="/"><svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 126.01 103.16">
                  <path fill="#ffffff" d="M126.01 17.94h-4.47v65.77h-4.46v-12h-4.44V59.66h-4.47V47.6h-4.48V35.43h-4.51v12.19h4.48v12.05h4.48v12.06h4.44v12.05h4.46v14.91H26.86V95.8h-4.49V83.75H17.9V71.71h-4.44V59.66H8.99V47.6H4.51V35.45h94.66v-4.47H19.53V8.97h4.48v-4.5h32.63V0H24.01v4.46H19.5v4.45h-4.44v22.07H4.48v4.45H0v12.19h4.48v12.05h4.47v12.06h4.45v12.05h4.46v12.04h4.49v4.48h4.48v2.86h90.21V98.9h4.5v-4.71h4.47V17.94z"></path>
                  <path fill="#ffffff" d="M56.66 4.46h4.51v4.51h-4.51zM117.03 17.94h4.51v-4.51h-4.5V8.97H61.17v4.47h55.86v4.5z"></path>
                </svg>MF</Link>
              </li>
            </ul>
            <button className={styles.hamburger} onClick={toggleMenu}>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              {isOpen ? <span className={styles.bar}></span> : null}
            </button>
          </div>
        </div>
      </nav>
      <div className={`${styles.menulinks_mobile} ${styles.show} ${isOpen ? styles.show : styles.hide}`}>
        <div className={styles.close}>
          <button className={styles.closeButton} onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="white" width="40" height="40"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /><path d="M0 0h40v40H0z" fill="none" /></svg>
          </button>
        </div>
        <ul className={styles.links_mobile}>
          <li className={styles.links_mobile}>
            <Link href="#experience">Experience</Link>
          </li>
          <li className={styles.links_mobile}>
            <Link href="#projects">Projects</Link>
          </li>
          <li className={styles.links_mobile}>
            <Link href="#blog">Blog</Link>
          </li>
          <li className={styles.links_mobile}>
            <Link href="#contact">Contact</Link>
          </li>

        </ul>
      </div>
    </>
  );
}