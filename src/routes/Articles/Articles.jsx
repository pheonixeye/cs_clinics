import { useTranslation } from "react-i18next";
import styles from "./articles.module.css";
import { Helmet } from "react-helmet";

const Articles = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t("articles")}</title>
        <link rel="canonical" href="https://cs-clinics.pages.dev/articles" />
        <meta name="robots" content="all" />
        {/*TODO:add complete head seo related tags*/}
      </Helmet>
      <div className={styles.articlesDiv}>
        <h2>{t("no_articles")}</h2>
      </div>
    </>
  );
};

export default Articles;
