import styles from "./page.module.css";
import Image from "next/image";
import folder from "../../public/folder.svg"


export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.presentation}>
        <div className={styles.aboutme}>
          <h1 className={styles.title}>
            Hi, I&apos;m Matias — a Frontend Developer Crafting Experiences That Inspire
          </h1>
          <h2 className={styles.subtitle}>
            Passionate About Designing Stunning and Functional Web Interfaces
          </h2>
        </div>
        <Image
          src="/images/foto-perfil-.jpg"
          width={230}
          height={300}
          alt="Matias Profile Picture"
          className={styles.profileImage}
        />
      </section>
      <section id="experience" className={styles.experience}>
        <h1>Experience</h1>
        <div className={styles.timeline}>
          <div className={`${styles.timelineItem}`}>
            <div className={styles.date}>January 2022 - April 2025</div>
            <div className={styles.content}>
              <strong>Hogarth - Frontend Developer</strong>
              <ul>
                <li>Developed 50+ responsive email templates for important client using HTML and CSS, ensuring total render accuracy across clients (Gmail, Outlook, Apple Mail).</li>
                <li>Built dynamic, SEO-optimized web pages using Vue.js and Next.js, enhancing site performance more than 90% (Lighthouse scores).</li>
              </ul>
            </div>
          </div>
          <div className={`${styles.timelineItem}`}>
            <div className={styles.date}>2021 - JULY TO SEPTEMBER</div>
            <div className={styles.content}>
              <strong>Alkemy - Course</strong>
              <ul>
                <li>interactive user interfaces. The project followed agile methodologies (Scrum), focusing on iterative development and team collaboration to address real-world challenges. Contributed to a user-friendly and functional solution while enhancing skills in version control, peer reviews, and task prioritization.</li>
                <li>
                  Improve and practice real projects with Reactjs
                </li>
              </ul>
            </div>
          </div>
          <div className={`${styles.timelineItem}`}>
            <div className={styles.date}>2020 - ABRIL TO DECEMBER</div>
            <div className={styles.content}>
              <strong>Jóvenes a Programar - Course</strong>
              <ul>
                <li>Learn Web developer technoligies as javascript, HTML, CSS</li>
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
          <h2>Destino Uruguay</h2>
          <Image
            className={styles.projectImage}
            src="/images/destinouruguay.png"
            width={266}
            height={180}
            alt="Destino Uruguay Project Screenshot"
          />
        </div>
        <div className={styles.projectDescription}>
          <p>
          A web platform to discover cultural events, festivals, and travel destinations across Uruguay. 
          It helps locals and tourists stay updated with curated content by automating data collection 
          from official sources. The site features real-time updates, blog posts with information about city's and a 
          user-friendly interface built for both desktop and mobile. <br /> Built with Next.js, TypeScript, Cheerio, and Nodemailer. 
          </p>
          <details className={styles.projectLink}>
            <summary className={styles.projectLinkSummary}>
              SEE MORE
              <Image src={folder} width={20} height={20} alt="Folder icon" />
            </summary>
            <div className={styles.projectLinkDetails}>
              <p className={styles.projectLinkDetailsP}>
                 <strong>What I learned:</strong> Gained hands-on experience with cron jobs using GitHub Actions to run scripts in a Linux environment. Improved my skills in web scraping, asynchronous programming, and automating data workflows. Strengthened my understanding of API handling, data flow architecture, and deploying full-stack apps with serverless functions.
                 <br />
                <a
                  href="https://github.com/matifandy8/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  GitHub
                </a>
                <a
                  href="https://destinouruguay.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  Live Demo
                </a>
              </p>
            </div>
          </details>
        </div>
      </div>

          <div className={styles.project}>
            <div className={styles.projectTitle}>
              <h2>NeoBrutaismCSS</h2>
              <Image className={styles.projectImage} src="/images/neobrutalism-project.webp" width={266} height={180} alt="NeoBrutaismCSS Project Image" />
            </div>
            <div className={styles.projectDescription}>
              <p>CSS library that provides a variety of utility classes to help you style your website. Library inspired by the Neo-Brutalist design trend. It provides a bold and consistent visual style out-of-the-box for developers who want fast and opinionated UI styling with zero JavaScript. <br /> Built with Html, CSS and Sass. </p>

              <details className={styles.projectLink}>
                <summary className={styles.projectLinkSummary}> SEE MORE
                  <Image src={folder} width={20} height={20} alt="folder icon" /></summary>
                <div className={styles.projectLinkDetails}>
                  <p className={styles.projectLinkDetailsP}>
                  <strong>What I learned:</strong> I learned how to create and publish a library to the NPM registry, including the required configuration (package.json, README, versioning, npmignore, etc.). I also gained experience with semantic versioning, testing package builds locally, and using the npm CLI like a boss.
                  <br />
                    <a href="https://github.com/matifandy8/NeoBrutalismCSS" target="_blank" rel="noreferrer" className={styles.link}>Github</a>
                    <a href="https://matifandy8.github.io/NeoBrutalismCSS/" target="_blank" rel="noreferrer" className={styles.link}>Demo</a>
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
              <p> A simple and easy-to-use image compression tool that allows you to compress images without losing quality. <br /> Built with React.js and Next.js.</p>
              <details className={styles.projectLink}>
                <summary className={styles.projectLinkSummary}> SEE MORE
                  <Image src={folder} width={20} height={20} alt="folder icon" /></summary>
                <div className={styles.projectLinkDetails}>
                  <p className={styles.projectLinkDetailsP}>
                  <strong>What I learned:</strong> I gained experience working with image optimization techniques on the frontend, including using the HTML5 File API, manipulating files in the browser, and integrating compression libraries. I also improved my skills in handling file uploads, managing blob URLs, and enhancing performance in client-side apps.
                  <br />
                    <br/>                    
                    <a href="https://github.com/matifandy8/cleanpic" target="_blank" rel="noreferrer" className={styles.link}>Github</a>
                    <a href="https://cleanpic.vercel.app/" target="_blank" rel="noreferrer" className={styles.link}>Demo</a>
                  </p>
                </div>
              </details>
            </div>
          </div>

          <div className={styles.contact} id="contact">
            <h1 className={styles.title}>Contact Me</h1>
            <p className={styles.subtitle}>You can contact me at <a href="mailto:matifandy@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.link}>matifandy@gmail.com</a></p>
            <p className={styles.subtitle}>Chat with me on <a href="https://www.linkedin.com/in/matias-fandino/" target="_blank" rel="noopener noreferrer" className={styles.link}>Linkedin</a></p>
          </div>

        </div>
      </section>
    </div>
  );
}
