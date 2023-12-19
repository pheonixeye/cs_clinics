import PropTypes from "prop-types";
import styles from "./doctorCard.module.css";
import { useTranslation } from "react-i18next";
import nullDoc from "../../../../assets/doc.webp";

const DoctorCard = (props) => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  return (
    <div className={styles.doctorCard}>
      <div className={styles.imgContainer}>
        <img
          src={
            props.doctor.avatar != null
              ? `data:image/png;base64, ${props.doctor.avatar}`
              : `${nullDoc}`
          }
          alt="doctor img"
        />
      </div>
      <div className={styles.dataContainer}>
        <h4>
          <span>{`${t("doc")}  `}</span>
          {`${
            isEnglish
              ? props.doctor.docname.toUpperCase()
              : props.doctor.docname_a
          }`}
        </h4>
        <h5>
          {isEnglish
            ? props.doctor.clinic.toUpperCase()
            : props.doctor.clinic_a}
        </h5>
        <h5>
          {isEnglish
            ? props.doctor.titles[0].toUpperCase()
            : props.doctor.titles_a[0]}
        </h5>
      </div>
    </div>
  );
};

DoctorCard.propTypes = {
  doctor: PropTypes.object,
};

export default DoctorCard;
