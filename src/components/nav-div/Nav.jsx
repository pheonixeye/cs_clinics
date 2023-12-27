import styles from "./nav.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";
const Nav = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={styles.navDiv}>
        <div className={styles.logoContainer}>
          <img className={styles.clinicLogo} src={logo} alt="clinic logo" />
        </div>
        <h1 className={styles.clinicNameText}>{t("csc")}</h1>
        <nav className={styles.navBar}>
          <ul>
            <Link to={"/"} title="Home">
              {t("home")}
            </Link>
            <Link to={"/doctors"} title="Our Doctors">
              {t("ourdoctors")}
            </Link>
            <Link to={"/contact"} title="Contact">
              {t("contact")}
            </Link>
            <Link to={"/articles"} title="Articles">
              {t("articles")}
            </Link>
          </ul>
        </nav>
        <div className={styles.navSeparator}>
          <br />
        </div>
      </div>
    </>
  );
};

export default Nav;
