import React from 'react';
import styles from './NavBar.module.css';
import { FaSearch, FaBell } from 'react-icons/fa';

export default function NavBar() {
  return (
    <div className={styles.nav}>
      <div className={styles.left}>
        <h1 className={styles.logo}>Netflix</h1>
        <div className={styles.links}>
          <p>Home</p>
          <p>TV Shows</p>
          <p>Movies</p>
          <p>New & Popular</p>
          <p>My List</p>
        </div>
      </div>
      <div className={styles.right}>
        <FaSearch className={styles.icon} />
        <FaBell className={styles.icon} />
        <button className={styles.login}>Login</button>
      </div>
    </div>
  );
}
