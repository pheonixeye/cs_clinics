import { useTranslation } from "react-i18next";
import { BsWhatsapp, BsGlobe, BsArrowUpCircle } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import styles from "./ActionsSwitch.module.css";
import PropTypes from "prop-types";
import { Launcher } from "../../../../url_launcher";

const ActionsSwitch = (props) => {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const callWhatsapp = () => {
    window.open(Launcher.whatsapp, "_blank");
  };

  return (
    <div className={styles.actionsContainer}>
      <button
        className={`btn scroll-to-top-btn ${styles.actionButton}`}
        onClick={scrollToTop}
      >
        <BsArrowUpCircle />
      </button>
      <button
        className={`btn whatsapp-btn ${styles.actionButton}`}
        onClick={callWhatsapp}
      >
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
