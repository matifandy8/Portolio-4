'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './AnimatedDetails.module.css'; // Archivo CSS separado

export function AnimatedDetails({ summary, children }: { summary: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState('0px');

  useEffect(() => {
    // Actualiza la altura cuando el contenido cambia
    if (isOpen && contentRef.current) {
      setContentHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setContentHeight('0px');
    }
  }, [isOpen, children]); // Se ejecuta cuando isOpen o children cambian

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <button
        className={styles.accordionButton}
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <span>{summary}</span>
        <svg
          className={`${styles.arrowIcon} ${isOpen ? styles.arrowOpen : ''}`}
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path
            d="M7 10l5 5 5-5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div
        ref={contentRef}
        className={styles.accordionContent}
        style={{
          height: isOpen ? contentHeight : '0px',
          opacity: isOpen ? 1 : 0,
        }}
        aria-hidden={!isOpen}
      >
        <div className={styles.accordionInnerContent}>
          {children}
        </div>
      </div>
    </div>
  );
}