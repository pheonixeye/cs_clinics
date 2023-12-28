import axios from "axios";

export async function getArticlesMeta(page) {
  const url = `https://cosmosurgeserver.xyz/articles-meta/${page}`;
  const articles = await axios.get(url);
  console.log(articles);
  return articles.data;
}

export const ALLARTICLESMETA = "allarticlesmeta";
