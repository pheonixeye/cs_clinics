import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t("page_not_found")}</title>
        <meta name="description" content={t("page_not_found")} />
        <link rel="canonical" href={`http://mysite.com/not_found`} />
      </Helmet>
      <h3 style={{ width: "100%", gridColumn: "1 / -1" }}>
        {t("page_not_found")}
      </h3>
    </>
  );
};

export default NotFoundPage;
