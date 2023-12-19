import heroImg from "../../assets/hero.webp";
import styles from "./hero.module.css";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();

  const lang = i18n.language;

  return (
    <div className={styles.heroContainer}>
      <img
        src={heroImg}
        alt="hero img"
        className={styles.heroImage + ` ${lang === "ar" ? styles.flipImg : ""}`}
      />
      <button className={"btn" + " " + styles.ctaBtn}>
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
