import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import styles from "./articlepage.module.css";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { ONEARTICLE, getArticle } from "../../get_article";

const ArticlePage = () => {
  const location = useLocation();

  const docid = location.pathname;

  const { t, i18n } = useTranslation();

  const isEnglish = i18n.language == "en";

  const { data, error, isLoading } = useQuery({
    queryKey: [ONEARTICLE],
    queryFn: () => getArticle(docid, articleid),
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t("articles")}</title>
        <link
          rel="canonical"
          href={`https://cs-clinics.pages.dev/articles/${docid}/${articleid}`}
        />
        <meta name="robots" content="all" />
        {/*TODO:add complete head seo related tags*/}
      </Helmet>
      <div className={styles.mainArticleContainer}>ArticlePage</div>
    </>
  );
};

export default ArticlePage;
