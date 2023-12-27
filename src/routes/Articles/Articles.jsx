import { useTranslation } from "react-i18next";
import styles from "./articles.module.css";
import { Helmet } from "react-helmet";

const Articles = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Articles</title>
        <link rel="canonical" href="http://mysite.com/articles" />
        {/*TODO:add complete head seo related tags*/}
      </Helmet>
      <div className={styles.articlesDiv}>
        <h2>{t("no_articles")}</h2>
      </div>
    </>
  );
};

export default Articles;
