import styles from "./NavBar.module.css";
import { Web3Button } from "@web3modal/react";
const queryParameters = new URLSearchParams(window.location.search)
const page = queryParameters.get("listing")

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <div className={styles.rectangle} />
          <div className={styles.rectangle1} />
          <div className={styles.rectangle2} />
          <div className={styles.pricing}>Pricing</div>
          <a className={styles.blog} href="http://localhost:3000/blog">
            Blog
          </a>
          <a className={styles.myListings} href="http://localhost:3000/upload">
            My Listings
          </a>
          <a className={styles.aboutUs} href="http://localhost:3000/about">
            About Us
          </a>
          <a className={styles.roadmap} href="http://localhost:3000/roadmap">
            Roadmap
          </a>
        </div>
        <a className={styles.frame2} href="http://localhost:3000/upload">
          <button className={styles.sartsellingbutton}>
            <div className={styles.rectangle3} />
            <div className={styles.startSelling}>Start Selling</div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
