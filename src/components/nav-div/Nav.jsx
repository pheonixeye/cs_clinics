import styles from "./nav.module.css";
import logo from "../../../logo.ico";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={styles.navDiv}>
      <div className={styles.logoContainer}>
        <img className={styles.clinicLogo} src={logo} alt="clinic logo" />
      </div>
      <h1 className={styles.clinicNameText}>Cs Clinics</h1>
      <nav className={styles.navBar}>
        <ul>
          <Link to={"/"} title="Home">
            Home
          </Link>
          <Link to={"/doctors"} title="Our Doctors">
            Our Doctors
          </Link>
          <Link to={"/contact"} title="Contact">
            Contact
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
