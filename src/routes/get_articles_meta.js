import axios from "axios";
import { BASE_URL } from "./base_url";

export async function getArticlesMeta(page) {
  const url = `${BASE_URL}/articles-meta/${page}`;
  const articles = await axios.get(url);
  console.log(articles);
  return articles.data;
}

export const ALLARTICLESMETA = "allarticlesmeta";
