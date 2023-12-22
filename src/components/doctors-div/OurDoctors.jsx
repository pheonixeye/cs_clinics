import styles from "./ourdoctors.module.css";
import LoadingIndicator from "./components/loading-indicator/LoadingIndicator";
import DoctorCard from "./components/doctor-card/DoctorCard";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { MAINQUERY, getDoctors } from "../../routes/get_doctors";

const OurDoctors = () => {
  const { t } = useTranslation();

  const { data: doctors, isLoading } = useQuery({
    queryKey: [MAINQUERY],
    queryFn: getDoctors,
  });

  return (
    <div className={styles.ourDoctorsDiv}>
      <h2>{t("Our Doctors")}</h2>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <div className={styles.doctorsList}>
          {doctors?.data.map((doctor, index) => {
            return <DoctorCard key={index} doctor={doctor}></DoctorCard>;
          })}
        </div>
      )}
    </div>
  );
};

export default OurDoctors;
