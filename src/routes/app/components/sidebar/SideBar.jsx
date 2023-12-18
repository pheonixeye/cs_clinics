import styles from "./SideBar.module.css";
import PropTypes from "prop-types";

const SideBar = (props) => {
  return (
    <div
      className={
        styles.sidebar + " " + (props.isMenuOpen ? styles.animate : "")
      }
    >
      <ul>
        <button className="btn">Home</button>
        <button className="btn">Doctors</button>
        <button className="btn">Contact</button>
      </ul>
    </div>
  );
};

SideBar.propTypes = {
  isMenuOpen: PropTypes.bool,
};
export default SideBar;
