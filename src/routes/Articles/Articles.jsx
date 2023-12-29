import { useTranslation } from "react-i18next";
import styles from "./articles.module.css";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import { ALLARTICLESMETA, getArticlesMeta } from "../get_articles_meta";
import { useState } from "react";
import LoadingIndicator from "../../components/doctors-div/components/loading-indicator/LoadingIndicator";
import ArticleMetaCard from "./components/ArticleMetaCard/ArticleMetaCard";
import { useNavigate } from "react-router-dom";

const Articles = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: [ALLARTICLESMETA],
    queryFn: () => getArticlesMeta(page),
  });

  const handleNextPage = () => {
    if (data.length < 5) {
      return;
    } else {
      setPage(page + 1);
    }
  };
  const handlePrevPage = () => {
    if (page == 1) {
      return;
    } else {
      setPage(page - 1);
    }
  };

  if (isLoading) {
    return (
      <div className={styles.indicator}>
        <LoadingIndicator />
      </div>
    );
  }

  const handleMetaClick = (docid, articleId) => {
    navigate(`/articles/${docid}/${articleId}`);
  };

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
        {isError && <h2>{t("conn_error_msg")}</h2>}

        {!data && <h2>{t("no_articles")}</h2>}
        <h2>{t("articles")}</h2>
        {!isError &&
          data?.map((e) => (
            <ArticleMetaCard key={e._id} meta={e} onClick={handleMetaClick} />
          ))}
        <br />
        <div className={styles.articleControls}>
          <button className="btn" onClick={handlePrevPage}>
            <h2>-</h2>
          </button>
          <h3>{page}</h3>
          <button className="btn" onClick={handleNextPage}>
            <h2>+</h2>
          </button>
        </div>
      </div>
    </>
  );
};

export default Articles;
