import styles from "./SideBar.module.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const SideBar = (props) => {
  const navigate = useNavigate();
  function handleClick(path) {
    navigate(`${path}`);
    props.openCloseDrawer();
  }
  return (
    <div
      className={
        styles.sidebar + " " + (props.isMenuOpen ? styles.animate : "")
      }
    >
      <ul>
        <button className="btn" onClick={() => handleClick("/")}>
          Home
        </button>
        <button className="btn" onClick={() => handleClick("/doctors")}>
          Doctors
        </button>
        <button className="btn" onClick={() => handleClick("/contact")}>
          Contact
        </button>
      </ul>
    </div>
  );
};

SideBar.propTypes = {
  isMenuOpen: PropTypes.bool,
  openCloseDrawer: PropTypes.func,
};
export default SideBar;
