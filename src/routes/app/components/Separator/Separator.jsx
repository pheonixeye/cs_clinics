import styles from "./separator.module.css";
import PropTypes from "prop-types";

const Separator = (props) => {
  return (
    <div
      className={
        styles.separator + " " + (props.isTransparent ? styles.transparent : "")
      }
    >
      <br />
    </div>
  );
};

Separator.propTypes = {
  isTransparent: PropTypes.bool,
};

export default Separator;
