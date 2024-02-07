import React from 'react';
import styles from './Nav.module.css';

function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="/home">
        <img src="logo.png" alt="Logo" />
      </a>
      <ul>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact-us">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
