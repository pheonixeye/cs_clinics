import styles from "./alertbox.module.css";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "../../../components/doctors-div/components/loading-indicator/LoadingIndicator";

const AlertBox = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleDismiss = () => {
    props.setIsVisible(false);
    if (props.isError.isError) {
      return;
    } else {
      navigate("/");
    }
  };

  return (
    <div
      className={
        styles.alertBox + " " + `${props.isVisible ? styles.isShown : ""}`
      }
    >
      props.isLoading ? <LoadingIndicator />:{" "}
      <div className={styles.alertTitle}>
        <h2>{props.isError?.msg?.title}</h2>
      </div>
      <div className={styles.alertMsg}>
        {<h3>{props.isError?.msg?.msg}</h3>}
      </div>
      <div className={styles.alertAction}>
        <button className="btn" onClick={handleDismiss}>
          {" "}
          {t("Ok")}
        </button>
      </div>
    </div>
  );
};

AlertBox.propTypes = {
  isVisible: PropTypes.bool,
  setIsVisible: PropTypes.func,
  isError: PropTypes.object,
  setIsError: PropTypes.func,
  isLoading: PropTypes.bool,
  setIsLoading: PropTypes.func,
};

export default AlertBox;
