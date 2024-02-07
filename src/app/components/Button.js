import React from 'react';
import styles from './Button.module.css';

function Button({ href, children, className = '' }) {
  return (
    <a href={href} className={`btn ${styles.default} ${className}`}>
      {children}
    </a>
  );
}

export default Button;
