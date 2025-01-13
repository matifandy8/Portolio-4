import styles from "./page.module.css";
import Image from 'next/image'



export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.presentation}>
        <h1 className={styles.title}>
          I’m a Frontend Developer Building Experiences that Matter
        </h1>
        <Image
          src="/images/foto-perfil-.jpg"
          width={230}
          height={300}
          alt="Picture of the author"
          className={styles.profileImage}
        />
      </section>
      <section className={styles.aboutme}>
        <h2 className={styles.subtitle}>
          Hi! I’m Matias, a Versatile Frontend Developer Passionate About Crafting
          Stunning and Functional Web Experiences
        </h2>
        <div className={styles.svg}>
          <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 99.33 103.79">
            <path d="M90.37 54.25v4.51h-4.51v4.51h4.51v-4.51h4.45v27h4.51V54.25h-8.96zM90.32 85.76h4.51v4.51h-4.51zM85.8 94.77h-4.5v4.51H4.51v-4.51H0v9.02h81.31v-4.51h4.5v-4.5h4.5v-4.51H85.8v4.5zM20.25 76.77h4.51v4.51h-4.51zM63.15 81.28h4.51v-4.5h4.63v-4.51H45.15v4.51h18v4.5z"></path>
            <path d="M17.92 63.14v-4.4h63.33V9.02h4.59v45.27h4.51V4.51h-4.51V0H27.01v4.51h54.33-.14v4.3H27.01v-4.3H22.5v4.3h-4.59v49.91h-4.49v4.41h-4.5v27.13h-4.4v4.51h4.51v-4.51h76.78V63.13H17.92Zm4.5-49.82h54.33v40.9H22.42v-40.9Zm58.87 72.44H13.42V67.65h67.87v18.11Z"></path>
            <path d="M26.99 49.68h45.18V17.96H26.99v31.72Zm4.51-27.22h36.16v22.7H31.5v-22.7Z"></path>
          </svg>
        </div>
      </section>
    </div>

  );
}
