"use client";

import { usePathname } from "next/navigation";
import styles from "./Footer.module.css";
import Link from "next/link";

export const Footer = () => {
  const path = usePathname().split("?")[4];
  
// Minor update to trigger commit

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>Your gateway to the stars!</p>
        <p>&copy; 2024 Star Ventures. All rights reserved.</p>
      </div>

      {/* Pages Section */}
      <div className={styles.pages}>
        <h3>Explore</h3>
        <ul>
          <li>
            <Link href="/services">Our Services</Link>
          </li>
          <li>
            <Link href="/mission">Our Mission</Link>
          </li>
          <li>
            <Link href="/team">Meet the Team</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* Follow Us Section */}
      <div className={styles.footerLinks}>
        <h3>Connect with Us</h3>
        <ul>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
