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
import AlertBox from "./AlertBox/AlertBox";
import { useNavigate } from "react-router-dom";
import { fromTo } from "../../functions/timeFunction";
import { useQuery } from "@tanstack/react-query";
import { ONEDOCQUERY, getDoctor } from "../get_doctor";
import LoadingIndicator from "../../components/doctors-div/components/loading-indicator/LoadingIndicator";
import { NOTIFICATION_URL } from "../base_url";

function DoctorPage() {
  const location = useLocation();
  const path = location.pathname;
  const segments = path.split("/");
  const docid = segments.at(-1);
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";
  const navigate = useNavigate();

  const [app, setApp] = useState({});

  const setInitialApp = () => {
    setApp(
      new Appointment({
        docid: doctor._id,
        docname: doctor.docname,
        clinic: doctor.clinic,
      })
    );
  };

  const { data, error, isLoading } = useQuery({
    queryKey: [ONEDOCQUERY],
    queryFn: () => getDoctor(docid),
    enabled: location.state == undefined,
    onCompleted: () => setInitialApp(),
  });

  let doctor = location.state ?? data;

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    await validate(app, sendRequest);
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

  const d = new Date();

  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isAlertLoading, setIsAlertLoading] = useState(false);
  const [isAlertError, setIsAlertError] = useState({});

  const validate = async (app, sendRequest) => {
    if (
      app.name == null ||
      app.name.trim().length == 0 ||
      app.phone == null ||
      app.phone.trim().length == 0
    ) {
      setIsAlertVisible(true);
      setIsAlertError({
        isError: true,
        msg: {
          title: "miss_info",
          msg: "miss_info_msg",
        },
      });
      return false;
    } else if (app.phone.trim().length != 11) {
      setIsAlertVisible(true);
      setIsAlertError({
        isError: true,
        msg: {
          title: "wrong_num",
          msg: "wrong_num_msg",
        },
      });
      return false;
    } else if (app.date == null || app.date.length == 0) {
      setIsAlertVisible(true);
      setIsAlertError({
        isError: true,
        msg: {
          title: "app_info_miss",
          msg: "app_info_miss_msg",
        },
      });
      return false;
    } else {
      await sendRequest(app);
      setIsAlertVisible(true);
      setIsAlertError({
        isError: false,
        msg: {
          title: "app_conf",
          msg: "check_sms",
        },
      });
      return true;
    }
  };
  const sendRequest = async (app) => {
    setIsAlertLoading(true);
    setIsAlertVisible(true);
    const newApp = {
      ...app,
      date: app.date.toISOString(),
    };

    await fetch(`${NOTIFICATION_URL}&topic=01091966224`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(newApp),
    }).then(() => {
      setIsAlertLoading(false);
    });
    // .catch(() => {
    //   setIsAlertLoading(false);
    //   setIsAlertError({
    //     isError: true,
    //     msg: {
    //       title: "conn_error_title",
    //       msg: "conn_error_msg",
    //     },
    //   });
    // })
  };

  const navToConfirmApp = () => {
    navigate(`/doctors/${doctor._id}/confirm`, {
      state: {
        doc: doctor,
        app: app,
      },
    });
  };

  if (error) {
    return <h2>{t("404")}</h2>;
  }

  if (isLoading) {
    return <LoadingIndicator />;
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {t("doc") + " "} {isEnglish ? doctor.docname : doctor.docname_a}
        </title>
        <meta
          name="description"
          content={isEnglish ? doctor.titles[0] : doctor.titles_a[0]}
        />
        <link
          rel="canonical"
          href={`https://cs-clinics.pages.dev/doctors/${doctor._id}/confirm`}
        />
        <meta name="robots" content="all" />
      </Helmet>
      {
        <div key={"a"} className={styles.pageContainer}>
          <div key={"a1"} className={styles.overlayContainer}>
            {/**TODO: make alert message on error & confirm +/- use as loading indicator */}
            <AlertBox
              isVisible={isAlertVisible}
              setIsVisible={setIsAlertVisible}
              isError={isAlertError}
              setIsError={setIsAlertError}
              isLoading={isAlertLoading}
              setIsLoading={setIsAlertLoading}
              navToConfirmApp={navToConfirmApp}
            />
          </div>
          <div key={"a2"} className={styles.docInfoContainer}>
            <div key={"a2a"} className={styles.imgContainer}>
              <img
                src={`./doc_img/${doctor._id}.png` ?? `${nullDoc}`}
                alt="doctor img"
              />
            </div>
            <div key={"a2b"} className={styles.dataContainer}>
              <h2>
                <span>{`${t("doc")}  `}</span>
                <br />
                {`${
                  isEnglish ? doctor.docname.toUpperCase() : doctor.docname_a
                }`}
              </h2>
              <h3>
                {isEnglish ? doctor.clinic.toUpperCase() : doctor.clinic_a}
              </h3>
              {isEnglish
                ? doctor.titles.map((title, index) => {
                    return <h3 key={index + title}>{title}</h3>;
                  })
                : doctor.titles_a.map((title, index) => {
                    return <h3 key={index + title}>{title}</h3>;
                  })}
            </div>
            <div
              ref={schedRef}
              key={"a2c"}
              className={styles.scheduleContainer}
            >
              <h2>{t("selectWeekday")}</h2>
              {doctor.schedule.map((sch) => {
                return (
                  <div
                    key={sch.intday + sch.day}
                    className={
                      styles.schCard +
                      " " +
                      (app.schedule && app.schedule == sch
                        ? styles.selected
                        : "")
                    }
                    onClick={() => selectDay(sch)}
                  >
                    <h2>{t(sch.day)}</h2>
                    <h3>
                      {fromTo(t, sch.start)} : {fromTo(t, sch.end)}
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
                tileDisabled={({ date }) => {
                  if (app.schedule?.intday == 7 && date.getDay() === 0) {
                    if (date < d) {
                      return true;
                    }
                    return false;
                  } else {
                    return date < d || app.schedule?.intday !== date.getDay();
                  }
                }}
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
                  minLength={11}
                  maxLength={11}
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
                  {app.schedule?.start ? fromTo(t, app.schedule?.start) : ""}
                </h3>
                <h3>
                  {t("To")} :{" "}
                  {app.schedule?.end ? fromTo(t, app.schedule?.end) : ""}
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
      }
    </>
  );
}

export default DoctorPage;
