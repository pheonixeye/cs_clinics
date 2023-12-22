import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import styles from "./doctor.module.css";
import nullDoc from "../../assets/doc.webp";
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";

function DoctorPage() {
  const ref = useRef(null);
  const location = useLocation();
  const doctor = location.state;
  console.log(doctor);

  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const titles = isEnglish ? doctor.titles : doctor.titles_a;

  const [sched, setSched] = useState({});

  const selectDay = (schedule) => {
    setSched(schedule);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Doctor {doctor.docname} Page</title>
        <link
          rel="canonical"
          href={`http://mysite.com/doctors/${doctor._id}`}
        />
      </Helmet>
      <div className={styles.pageContainer}>
        <div className={styles.overlayContainer}>
          {/**TODO: make alert message on error & confirm +/- use as loading indicator */}
        </div>
        <div className={styles.docInfoContainer}>
          <div className={styles.imgContainer}>
            <img
              src={
                doctor.avatar != null
                  ? `data:image/png;base64, ${doctor.avatar}`
                  : `${nullDoc}`
              }
              alt="doctor img"
            />
          </div>
          <div className={styles.dataContainer}>
            <h2>
              <span>{`${t("doc")}  `}</span>
              <br />
              {`${isEnglish ? doctor.docname.toUpperCase() : doctor.docname_a}`}
            </h2>
            <h3>{isEnglish ? doctor.clinic.toUpperCase() : doctor.clinic_a}</h3>
            {titles.map((title) => {
              return <h3 key={title}>{title}</h3>;
            })}
          </div>
          <div className={styles.scheduleContainer}>
            {doctor.schedule.map((sch) => {
              return (
                <div
                  key={sch}
                  className={
                    styles.schCard + " " + (sched == sch ? styles.selected : "")
                  }
                  onClick={() => selectDay(sch)}
                >
                  <h2>{t(sch.day)}</h2>
                  <h3>
                    {sch.start} : {sch.end}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        <div ref={ref} className={styles.calenderDiv}></div>
      </div>
    </>
  );
}

export default DoctorPage;
