import axios from "axios";
import { BASE_URL } from "./base_url";

export async function getArticle(docid, articleid) {
  const url = `${BASE_URL}/articles/${docid}/${articleid}`;
  const article = await axios.get(url);
  console.log(article);
  return article.data;
}

export const ONEARTICLE = "onearticle";
