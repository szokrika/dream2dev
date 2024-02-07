import React from 'react';
import Image from 'next/image';
import Button from './Button';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import styles from './PromoImage.module.css';

function PromoImage({ title, text, image, layout = 'left', link = null }) {
  return (
    <div className={`${styles.promo} ${styles[layout]}`}>
      <div className={styles.content}>
        <h2 className={`${styles.title} ${inter.className}`}>{title}</h2>
        <p className={styles.copy}>{text}</p>
        {link && <Button href={link.href}>{link.text}</Button>}
      </div>
      <Image
        className={styles.image}
        src={image?.src || image}
        alt={image?.alt || title}
        width={image?.width || 500}
        height={image?.height || 500}
      />
    </div>
  );
}

export default PromoImage;
