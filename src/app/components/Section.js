import React from 'react';
import styles from './Section.module.css';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

function Section({ title, children, columns = 1 }) {
  return (
    <section className={`${styles.section}`}>
      {title && (
        <h2 className={`${styles.title} ${inter.className}`}>{title}</h2>
      )}
      <div className={`${styles.content} ${styles[`columns-${columns}`]}`}>
        {children}
      </div>
    </section>
  );
}

export default Section;
