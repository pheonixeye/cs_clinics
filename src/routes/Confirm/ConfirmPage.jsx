import { useTranslation } from "react-i18next";
import styles from "./confirmpage.module.css";
import { useLocation } from "react-router-dom";
import { fromTo } from "../../functions/timeFunction";
import { useNavigate } from "react-router-dom";
import Separator from "../app/components/Separator/Separator";
import { Helmet } from "react-helmet";

const ConfirmPage = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { doc, app } = location.state;
  const isEnglish = i18n.language == "en";
  const navigate = useNavigate();
  //   console.log(doc, app);

  const handleClick = () => {
    navigate("/");
  };

  const date = new Date(app.date);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t("app_conf")}</title>
        <link
          rel="canonical"
          href={`http://mysite.com/doctors/${doc._id}/confirm`}
        />
        {/*TODO:add complete head seo related tags*/}
      </Helmet>
      <div className={styles.confirmDiv}>
        <h2>{t("app_conf")}</h2>
        <h2>---------</h2>
        <h2>
          {t("doc")} : {isEnglish ? doc.docname.toUpperCase() : doc.docname_a}
        </h2>
        <h2>
          {t("Speciality")} :{" "}
          {isEnglish ? doc.clinic.toUpperCase() : doc.clinic_a}
        </h2>
        <h2>
          {t("Name")} : {app.name}
        </h2>
        <h2>
          {t("mobile")} : {app.phone}
        </h2>
        <h2>
          {t("Date")} :{" "}
          {`${date.getFullYear()} / ${date.getMonth()} / ${date.getDate()}`}
        </h2>
        <h2>
          {t("Weekday")} : {t(`${app.schedule.day}`)}
        </h2>
        <h2>
          {t("From")} : {fromTo(t, app.schedule.start)}
        </h2>
        <h2>
          {t("To")} : {fromTo(t, app.schedule.end)}
        </h2>
        <br />
        <button className="btn" onClick={handleClick}>
          {t("home")}
        </button>
        <Separator isTransparent={true}></Separator>
        <Separator></Separator>
      </div>
    </>
  );
};

export default ConfirmPage;
