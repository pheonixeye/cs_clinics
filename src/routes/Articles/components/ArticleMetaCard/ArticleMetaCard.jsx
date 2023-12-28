import PropTypes from "prop-types";
import styles from "./articlemetacard.module.css";
import { useTranslation } from "react-i18next";
import { fromTo } from "../../../../functions/timeFunction";

const ArticleMetaCard = (props) => {
  const { t, i18n } = useTranslation();

  const isEnglish = i18n.language == "en";

  const d = new Date(props.meta.created_at);

  return (
    <div className={styles.articleMetaContainer} onClick={props.onClick}>
      <div className={styles.metaThumbnail}>
        <img src={props.meta.thumbnail} alt="article thumbnail" />
      </div>
      <div className={styles.metaTitle}>
        <h2>{isEnglish ? props.meta.title.en : props.meta.title.ar}</h2>
      </div>
      <div className={styles.metaDescription}>
        <p>
          {isEnglish ? props.meta.description.en : props.meta.description.ar}{" "}
        </p>
      </div>
      <div className={styles.metaTime}>
        <h4>{`${d.getFullYear()} / ${d.getMonth()} / ${d.getDate()} - ${fromTo(
          t,
          d.getHours()
        )} `}</h4>
      </div>
    </div>
  );
};

ArticleMetaCard.propTypes = {
  meta: PropTypes.object,
  onClick: PropTypes.func,
};

export default ArticleMetaCard;
