import React from 'react';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import styles from './PromoText.module.css';

function PromoText({ title, text }) {
  return (
    <div className={styles.promo}>
      <h2 className={`${styles.title} ${inter.className}`}>{title}</h2>
      <p className={styles.copy}>{text}</p>
    </div>
  );
}

export default PromoText;
