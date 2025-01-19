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
                <li>Worked on a project for an NGO using frontend development with React and agile methodologies (Scrum).</li>
              </ul>
            </div>
          </div>
          <div className={`${styles.timelineItem}`}>
            <div className={styles.date}>2020 - Jóvenes a Programar</div>
            <div className={styles.content}>
              <strong>Web Developer</strong>
              <ul>
                <li>Using the Voxy platform for learning English and live classes with natives.</li>
                <li>Development and improvement of transversal skills such as teamwork, self-regulation, determination, etc.</li>
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
              <Image src="/images/neobrutalism-project.webp" width={166} height={90} alt="Portfolio" />
            </div>
            <div className={styles.projectDescription}>
              <p>CSS library that provides a variety of utility classes to help you style your website. This project was built using Sass.</p>
              <details className={styles.projectLink}>
                <summary> SEE MORE
                  <Image src={folder} width={20} height={20} alt="folder icon" /></summary>
                <div>
                  <p>
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
