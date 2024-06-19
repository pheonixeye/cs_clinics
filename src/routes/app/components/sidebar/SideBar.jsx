import styles from "./SideBar.module.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SideBar = (props) => {
  const navigate = useNavigate();
  function handleClick(path) {
    navigate(`${path}`);
    props.openCloseDrawer();
  }

  const { t } = useTranslation();

  return (
    <div
      className={
        styles.sidebar + " " + (props.isMenuOpen ? styles.animate : "")
      }
    >
      <ul>
        <button className="btn" onClick={() => handleClick("/")}>
          {t("Home")}
        </button>
        <button className="btn" onClick={() => handleClick("/doctors")}>
          {t("ourdoctors")}
        </button>
        <button className="btn" onClick={() => handleClick("/contact")}>
          {t("Contact")}
        </button>
        {/* <button className="btn" onClick={() => handleClick("/articles")}>
          {t("articles")}
        </button> */}
      </ul>
    </div>
  );
};

SideBar.propTypes = {
  isMenuOpen: PropTypes.bool,
  openCloseDrawer: PropTypes.func,
};
export default SideBar;
