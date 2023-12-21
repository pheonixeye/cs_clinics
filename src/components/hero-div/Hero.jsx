import heroImg from "../../assets/hero.webp";
import styles from "./hero.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const lang = i18n.language;

  const handleNavigate = () => {
    navigate("/doctors");
  };

  return (
    <div className={styles.heroContainer}>
      <img
        src={heroImg}
        alt="hero img"
        className={styles.heroImage + ` ${lang === "ar" ? styles.flipImg : ""}`}
      />
      <button className={"btn" + " " + styles.ctaBtn} onClick={handleNavigate}>
        {t("Book Appointment")}
      </button>
      <div className={styles.heroTag}>
        <h3>{t("better1")} </h3>
        <h3> {t("better2")}</h3>
      </div>
    </div>
  );
};

export default Hero;
