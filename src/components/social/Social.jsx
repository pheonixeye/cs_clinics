import styles from "./social.module.css";
import { useTranslation } from "react-i18next";
import {
  BsFacebook,
  BsMessenger,
  BsInstagram,
  BsGooglePlay,
} from "react-icons/bs";
import { Launcher } from "../../url_launcher";

const Social = () => {
  const { t } = useTranslation();

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className={styles.socialDiv}>
      <h2>{t("social")}</h2>
      <div className={styles.iconsDiv}>
        <div
          className={styles.glassBtn + " " + styles.blueBtn}
          onClick={() => handleClick(Launcher.facebookPage)}
        >
          <span>
            <BsFacebook className={styles.facebook} />
          </span>
        </div>
        <div
          className={styles.glassBtn + " " + styles.amberBtn}
          onClick={() => handleClick(Launcher.instagramPage)}
        >
          <span>
            <BsInstagram className={styles.instagram} />
          </span>
        </div>
        <div
          className={styles.glassBtn + " " + styles.blueBtn}
          onClick={() => handleClick(Launcher.fbMessengerPage)}
        >
          <span>
            <BsMessenger className={styles.facebook} />
          </span>
        </div>
        <div
          className={styles.glassBtn + " " + styles.amberBtn}
          onClick={() => handleClick(Launcher.playstore)}
        >
          <span>
            <BsGooglePlay className={styles.instagram} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Social;
