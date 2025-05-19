import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Netflix Clone. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
