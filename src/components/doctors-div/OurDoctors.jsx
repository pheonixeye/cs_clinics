import styles from "./ourdoctors.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingIndicator from "./components/loading-indicator/LoadingIndicator";
import DoctorCard from "./components/doctor-card/DoctorCard";
import { useTranslation } from "react-i18next";

const OurDoctors = () => {
  const { t } = useTranslation();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const url = "https://cosmosurgeserver.xyz/cpanel";
    axios.get(url).then((res) => {
      setDoctors([...res.data]);
    });
  }, []);

  console.log(doctors);
  return (
    <div className={styles.ourDoctorsDiv}>
      <h2>{t("Our Doctors")}</h2>
      {doctors.length == 0 ? (
        <LoadingIndicator />
      ) : (
        <div className={styles.doctorsList}>
          {doctors?.map((doctor, index) => {
            return <DoctorCard key={index} doctor={doctor}></DoctorCard>;
          })}
        </div>
      )}
    </div>
  );
};

export default OurDoctors;
