import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import styles from "./doctor.module.css";
import nullDoc from "../../assets/doc.webp";
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Separator from "../app/components/Separator/Separator";
import { Appointment } from "../../models/Appointment";
// import { BsFillPersonFill, BsPhoneVibrate } from "react-icons/bs";

function DoctorPage() {
  const location = useLocation();
  const doctor = location.state;
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const [app, setApp] = useState(
    new Appointment({
      docid: doctor._id,
      docname: doctor.docname,
      clinic: doctor.clinic,
    })
  );

  const selectDay = (schedule) => {
    setApp({
      ...app,
      schedule: schedule,
    });

    dateRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const selectDate = (value) => {
    setApp({
      ...app,
      date: value,
    });
    infoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const dateRef = useRef(null);
  const infoRef = useRef(null);
  const schedRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setApp({
    //   ...app,
    //   date: app.date.toISOString(),
    // });
    console.log(app);
  };

  const handleClear = () => {
    setApp(
      new Appointment({
        docid: doctor._id,
        docname: doctor.docname,
        clinic: doctor.clinic,
        name: app.name,
        phone: app.phone,
      })
    );
    schedRef.current?.scrollIntoView({ behavior: "smooth" });
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
      <div key={"a"} className={styles.pageContainer}>
        <div key={"a1"} className={styles.overlayContainer}>
          {/**TODO: make alert message on error & confirm +/- use as loading indicator */}
        </div>
        <div key={"a2"} className={styles.docInfoContainer}>
          <div key={"a2a"} className={styles.imgContainer}>
            <img
              src={
                doctor.avatar != null
                  ? `data:image/png;base64, ${doctor.avatar}`
                  : `${nullDoc}`
              }
              alt="doctor img"
            />
          </div>
          <div key={"a2b"} className={styles.dataContainer}>
            <h2>
              <span>{`${t("doc")}  `}</span>
              <br />
              {`${isEnglish ? doctor.docname.toUpperCase() : doctor.docname_a}`}
            </h2>
            <h3>{isEnglish ? doctor.clinic.toUpperCase() : doctor.clinic_a}</h3>
            {isEnglish
              ? doctor.titles.map((title, index) => {
                  return <h3 key={index + title}>{title}</h3>;
                })
              : doctor.titles_a.map((title, index) => {
                  return <h3 key={index + title}>{title}</h3>;
                })}
          </div>
          <div ref={schedRef} key={"a2c"} className={styles.scheduleContainer}>
            <h2>{t("selectWeekday")}</h2>
            {doctor.schedule.map((sch) => {
              return (
                <div
                  key={sch.intday + sch.day}
                  className={
                    styles.schCard +
                    " " +
                    (app.schedule && app.schedule == sch ? styles.selected : "")
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
        <Separator key={"s1t"} isTransparent={true} />
        <Separator key={"s1c"} />
        <Separator key={"s2t"} isTransparent={true} />
        <div key={"a3"} ref={dateRef} className={styles.calendarDiv}>
          <div key={"a3a"} className={styles.calendarView}>
            <h2>{t("Select Date")}</h2>
            <Calendar
              className={styles.calendarBody}
              locale={i18n.language}
              tileDisabled={({ date }) => {
                const d = new Date();
                d.setHours(19);
                const refactoredD = new Date(
                  date.getFullYear(),
                  date.getMonth(),
                  date.getDate(),
                  19
                );
                // console.log("ofToday => " + d);
                // console.log("refactored => " + refactoredD);
                return (
                  refactoredD < d ||
                  refactoredD.getDay() !== app.schedule?.intday
                );
              }}
              onClickDay={(value) =>
                selectDate(
                  new Date(
                    value.getFullYear(),
                    value.getMonth(),
                    value.getDate(),
                    app.schedule?.start
                  )
                )
              }
            />
          </div>
          <div key={"a3b"} ref={infoRef} className={styles.userInfoView}>
            <h2>{t("Client Information")}</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                id="username"
                required
                placeholder={t("Enter Your Name")}
                // value={app.name}
                onChange={(e) =>
                  setApp({
                    ...app,
                    name: e.target.value,
                  })
                }
              />

              <input
                type="tel"
                name="phone"
                id="phone"
                required
                placeholder={t("Enter Your Phone")}
                // value={app.phone}
                onChange={(e) =>
                  setApp({
                    ...app,
                    phone: e.target.value,
                  })
                }
              />
              <h3>
                {t("Weekday")} :{" "}
                {app.schedule?.day ? t(`${app.schedule?.day}`) : ""}{" "}
                {/* {`${app.schedule?.intday}`} */}
              </h3>
              <h3>
                {t("From")} :{" "}
                {app.schedule?.start ? t(`${app.schedule?.start}`) : ""}
              </h3>
              <h3>
                {t("To")} : {app.schedule?.end ? t(`${app.schedule?.end}`) : ""}
              </h3>
              <h3>
                {t("Date")} :{" "}
                {app.date
                  ? `${app.date?.getFullYear()} / ${
                      app.date?.getMonth() + 1
                    } / ${app.date?.getDate()}`
                  : ""}
              </h3>
              {app.date != null ? <h3>{t("sms")}</h3> : null}
              <button
                className={`btn ${styles.okBtn}`}
                // onClick={() => console.log(app)}
                type="submit"
              >
                {t("confirm")}
              </button>
              <button
                className={`btn ${styles.clearBtn}`}
                onClick={handleClear}
              >
                {t("clear")}
              </button>
            </form>
          </div>
        </div>
        <Separator key={"s3t"} isTransparent={true} />
        <Separator key={"s2c"} />
        <Separator key={"s4t"} isTransparent={true} />
      </div>
    </>
  );
}

export default DoctorPage;
