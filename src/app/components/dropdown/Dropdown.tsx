import { useState } from "react";
import styles from "./dropdown.module.css"; 

const portfolios = [
  { name: "Portfolio 2024", url: "https://matias-fandino.vercel.app/" },
//   { name: "Portfolio 2023", url: "https://matias-fandino.vercel.app/" },
  { name: "Portfolio 2022", url: "https://portfolio-terminal.vercel.app/" },
  { name: "Portfolio 2021", url: "https://matifandy8.github.io/Portfolio-Page/" },
];

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.button}>
        Old Portfolios
      </button>

      {isOpen && (
        <div className={styles.menu}>
          {portfolios.map((portfolio, index) => (
            <a
              key={index}
              href={portfolio.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.menuItem}
            >
              {portfolio.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
