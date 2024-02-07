import React from 'react';
import Image from 'next/image';
import styles from './Banner.module.css';
import Button from './Button';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], style: ['normal'] });

function Banner({
  title,
  subtitle,
  description,
  backgroundImage,
  image,
  link,
}) {
  const css = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};
  return (
    <div className={styles.banner} style={css}>
      <h1 className={`${styles.title} ${inter.className}`}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <p className={styles.description}>{description}</p>
      {image && (
        <Image
          className={styles.image}
          src={image.src}
          alt={image.alt}
          width={image.width || 1000}
          height={image.height || 600}
        />
      )}
      {link && <Button href={link.href}>{link.text}</Button>}
    </div>
  );
}

export default Banner;
