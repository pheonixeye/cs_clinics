import axios from "axios";

export async function getArticle(docid, articleid) {
  const url = `https://cosmosurgeserver.xyz/articles/${docid}/${articleid}`;
  const article = await axios.get(url);
  console.log(article);
  return article.data;
}

export const ONEARTICLE = "onearticle";
