import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import styles from "./articlepage.module.css";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { ONEARTICLE, getArticle } from "../../get_article";
import LoadingIndicator from "../../../components/doctors-div/components/loading-indicator/LoadingIndicator";
import { fromTo } from "../../../functions/timeFunction";
import Separator from "../../app/components/Separator/Separator";

const ArticlePage = () => {
  // const location = useLocation();

  const { docid, articleid } = useParams();

  const { t, i18n } = useTranslation();

  const isEnglish = i18n.language == "en";

  const { data, isError, isLoading } = useQuery({
    queryKey: [ONEARTICLE],
    queryFn: () => getArticle(docid, articleid),
    refetchOnMount: "always",
  });

  const d = new Date(data?.timeofpub);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{isEnglish ? data?.title.en : data?.title.ar}</title>
        <link
          rel="canonical"
          href={`https://cs-clinics.pages.dev/articles/${docid}/${articleid}`}
        />
        <meta
          name="description"
          content={
            isEnglish ? data?.shortdescription.en : data?.shortdescription.ar
          }
        />
        <meta name="robots" content="all" />
        {/*TODO:add complete head seo related tags*/}
      </Helmet>
      <div className={styles.mainArticleContainer}>
        <br />
        {isLoading && (
          <div className={styles.indicator}>
            <LoadingIndicator />
          </div>
        )}
        {isError && <h2>{t("conn_error_msg")}</h2>}
        <div className={styles.articleImg}>
          <img src={data?.articleimage} alt="article image" />
        </div>
        <div className={styles.articleTitle}>
          <h2>{isEnglish ? data?.title.en : data?.title.ar}</h2>
          <p>{`${d.getFullYear()} / ${d.getMonth()} / ${d.getDate()} - ${fromTo(
            t,
            d.getHours()
          )} `}</p>
          <br />
        </div>
        <div className={styles.paragraphsContainer}>
          {data?.paragraphs.map((e, index) => (
            <div key={e.uuid} className={styles.paragraphDiv}>
              <h3>
                {"  (" + (index + 1) + ")  "}
                {isEnglish ? e.title.en : e.title.ar}
              </h3>
              <p>{isEnglish ? e.body.en : e.body.ar}</p>
            </div>
          ))}
        </div>
        <br />
        <Separator />
      </div>
    </>
  );
};

export default ArticlePage;
