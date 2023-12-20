import styles from "./contact.module.css";
import { useTranslation } from "react-i18next";
import {
  BsFillTelephoneFill,
  BsWhatsapp,
  BsFillPhoneVibrateFill,
  BsFillPinMapFill,
  BsClockHistory,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.contactDiv}>
      <h2>{t("Contact")}</h2>
      <div className={styles.mapDiv}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.331943929424!2d31.313849814591773!3d29.969888929046775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458397cfe331491%3A0xf55e2d037185129b!2sCosmoSurge%20Clinics!5e0!3m2!1sen!2seg!4v1621166318880!5m2!1sen!2seg"
          loading="lazy"
        ></iframe>
      </div>
      <div className={styles.infoDiv}>
        <h3>
          <span>
            <BsFillPhoneVibrateFill /> {"  "}
            <BsWhatsapp /> {"  "}
          </span>
          {t("mobile")}
        </h3>
        <h4>
          {"----- "}
          <Link to="tel:+201021646576" target={"_blank"}>
            01021646574
          </Link>
        </h4>
        <h3>
          <span>
            <BsFillTelephoneFill /> {"  "}
          </span>
          {t("phone")}
        </h3>
        <h4>
          {"----- "}
          <Link to="tel:+225165064" target={"_blank"}>
            25165064
          </Link>
        </h4>
        <h3>
          <span>
            <BsFillPinMapFill /> {"  "}
          </span>
          {t("Address")}
        </h3>
        <h4>
          {"----- "}
          <Link
            to="https://maps.app.goo.gl/ygnseja3EHRXq9E78"
            target={"_blank"}
          >
            {t("address")}
          </Link>
        </h4>
        <h3>
          <span>
            <BsClockHistory /> {"  "}
          </span>
          {t("Hours")}
        </h3>
        <h4>
          {"----- "}
          <Link> {t("hours")}</Link>
        </h4>
      </div>
    </div>
  );
};

export default Contact;

// '''
// <iframe
// src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.331943929424!2d31.313849814591773!3d29.969888929046775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458397cfe331491%3A0xf55e2d037185129b!2sCosmoSurge%20Clinics!5e0!3m2!1sen!2seg!4v1621166318880!5m2!1sen!2seg"
//  width="${(widget.width - 20)}"
//   height="${(widget.height - 20)}"
//    style="border:0;
//    " allowfullscreen="
//    " loading="lazy">
//    </iframe>
// '''
