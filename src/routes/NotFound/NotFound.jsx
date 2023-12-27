import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const NotFoundPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 Not Found...</title>
        <link rel="canonical" href={`http://mysite.com/not_found`} />
      </Helmet>
      <h3 style={{ width: "100%", gridColumn: "1 / -1" }}>
        {t("page_not_found")}
      </h3>
    </>
  );
};

export default NotFoundPage;
