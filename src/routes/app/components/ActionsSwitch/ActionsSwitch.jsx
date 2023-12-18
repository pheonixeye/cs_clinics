import { useTranslation } from "react-i18next";
import { BsWhatsapp, BsGlobe, BsArrowUpCircle } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import styles from "./ActionsSwitch.module.css";
import PropTypes from "prop-types";

const ActionsSwitch = (props) => {
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

  const openMenu = () => {
    props.openCloseDrawer();
  };

  return (
    <div className={styles.actionsContainer}>
      <button className={`btn scroll-to-top-btn ${styles.actionButton}`}>
        <BsArrowUpCircle />
      </button>
      <button className={`btn whatsapp-btn ${styles.actionButton}`}>
        <BsWhatsapp />
      </button>
      <button
        className={`btn language-btn ${styles.actionButton}`}
        onClick={changeLanguage}
      >
        <BsGlobe />
      </button>

      <button
        className={`btn ${styles.menuBtn} ${styles.actionButton}`}
        onClick={openMenu}
      >
        <FiMenu />
      </button>
    </div>
  );
};

ActionsSwitch.propTypes = {
  isMenuOpen: PropTypes.bool,
  openCloseDrawer: PropTypes.func,
};

export default ActionsSwitch;
