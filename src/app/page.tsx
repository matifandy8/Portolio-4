import styles from "./page.module.css";
import Image from 'next/image'
import folder from "../../public/folder.svg"


export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.presentation}>
        <div className={styles.aboutme}>
          <h1 className={styles.title}>
            Hi, I'm Matias — a Frontend Developer Crafting Experiences That Inspire
          </h1>
          <h2 className={styles.subtitle}>
            Passionate About Designing Stunning and Functional Web Interfaces
          </h2>
        </div>
        <Image
          src="/images/foto-perfil-.jpg"
          width={230}
          height={300}
          alt="Matias' Profile Picture"
          className={styles.profileImage}
        />
      </section>
      <section id="experience" className={styles.experience}>
        <h1>Experience</h1>
        <div className={styles.timeline}>
          <div className={`${styles.timelineItem}`}>
            <div className={styles.date}>January 2022 - Present</div>
            <div className={styles.content}>
              <strong>Hogarth - Frontend Developer</strong>
              <ul>
                <li>Developed and coded responsive email templates for important clients using HTML, CSS, and Vue/Next.js.</li>
                <li>Collaborated frequently with project managers and team members to ensure timely delivery of work and stay up-to-date on any changes or updates to the project scope.</li>
              </ul>
            </div>
          </div>
          <div className={`${styles.timelineItem}`}>
            <div className={styles.date}>2021 - Alkemy</div>
            <div className={styles.content}>
              <strong>React.js</strong>
              <ul>
                <li>interactive user interfaces. The project followed agile methodologies (Scrum), focusing on iterative development and team collaboration to address real-world challenges. Contributed to a user-friendly and functional solution while enhancing skills in version control, peer reviews, and task prioritization.</li>
              </ul>
            </div>
          </div>
          <div className={`${styles.timelineItem}`}>
            <div className={styles.date}>2020 - Jóvenes a Programar</div>
            <div className={styles.content}>
              <strong>Web Developer</strong>
              <ul>
                <li>Used the Voxy platform for learning English, enhancing language skills through interactive lessons and live classes with native speakers.</li>
                <li>Focused on the development and improvement of transversal skills such as teamwork, self-regulation, and determination, fostering a growth mindset and adaptability in diverse environments.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className={styles.projects}>
        <h1 className={styles.title}>Here are some of my recent projects.</h1>
        <div className={styles.projectsList}>
          <div className={styles.project}>
            <div className={styles.projectTitle}>
              <h2>NeoBrutaismCSS</h2>
              <Image className={styles.projectImage} src="/images/neobrutalism-project.webp" width={266} height={180} alt="NeoBrutaismCSS Project Image" />
            </div>
            <div className={styles.projectDescription}>
              <p>CSS library that provides a variety of utility classes to help you style your website. This project was built using Sass.</p>
              <details className={styles.projectLink}>
                <summary className={styles.projectLinkSummary}> SEE MORE
                  <Image src={folder} width={20} height={20} alt="folder icon" /></summary>
                <div className={styles.projectLinkDetails}>
                  <p className={styles.projectLinkDetailsP}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
                    error saepe! Dolorem, quaerat sequi? Architecto veniam alias, vel
                    modi corrupti dolores libero esse expedita illo possimus, vero, non
                    cupiditate accusamus!
                  </p>
                </div>
              </details>
            </div>
          </div>
          <div className={styles.project}>
            <div className={styles.projectTitle}>
              <h2>CleanPic</h2>
              <Image className={styles.projectImage} src="/images/cleanpic.png" width={266} height={180} alt="CleanPic Project Image" />
            </div>
            <div className={styles.projectDescription}>
              <p> A simple and easy-to-use image compression tool that allows you to compress images without losing quality. This project was built using React.js and Next.js.</p>
              <details className={styles.projectLink}>
                <summary className={styles.projectLinkSummary}> SEE MORE
                  <Image src={folder} width={20} height={20} alt="folder icon" /></summary>
                <div className={styles.projectLinkDetails}>
                  <p className={styles.projectLinkDetailsP}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
                    error saepe! Dolorem, quaerat sequi? Architecto veniam alias, vel
                    modi corrupti dolores libero esse expedita illo possimus, vero, non
                    cupiditate accusamus!
                  </p>
                </div>
              </details>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
