import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const d = new Date();
  return (
    <div>
      <h3>{t("copyright") + " " + `${d.getFullYear()}`}</h3>
      <h4>
        {t("design") + " "}
        <a href="https://drkaz.dev" target="_blank" rel="noreferrer">
          {t("Dr. Kareem Zaher")}
        </a>
      </h4>
    </div>
  );
};

export default Footer;
