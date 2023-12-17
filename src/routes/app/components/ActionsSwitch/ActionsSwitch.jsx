import { useTranslation } from "react-i18next";
import { BsWhatsapp, BsGlobe, BsArrowUpCircle } from "react-icons/bs";
import styles from "./ActionsSwitch.module.css";

const ActionsSwitch = () => {
  // const { t } = useTranslation();
  const { i18n } = useTranslation();

  function changeLanguage() {
    const lang = i18n.language;
    const newLang = lang === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.body.dir = i18n.dir();
    const html = document.querySelector("html");

    html.setAttribute("lang", newLang);
    html.setAttribute("dir", i18n.dir());
  }
  return (
    <div className={styles.actionsContainer}>
      <button className={`scroll-to-top-btn ${styles.actionButton}`}>
        <BsArrowUpCircle />
      </button>
      <button className={`whatsapp-btn ${styles.actionButton}`}>
        <BsWhatsapp />
      </button>
      <button
        className={`language-btn ${styles.actionButton}`}
        onClick={changeLanguage}
      >
        <BsGlobe />
      </button>
    </div>
  );
};

export default ActionsSwitch;
