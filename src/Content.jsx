import axios from "axios";
import { ArticleIndex } from "./ArticleIndex";
import { useState, useEffect } from "react";

export function Content() {
  const [articles, setArticles] = useState([]);

  const handleArticlesIndex = () => {
    console.log("handleArticlesIndex");
    axios.get("https://newsapi.org/v2/everything?q=litecoin&apiKey=###API_KEY###").then((response) => {
      console.log(response.data);
      setArticles(response.data.articles);
    });
  };
  useEffect(handleArticlesIndex, []);

  return (
    <div className="Content">
      <h1>Example-News-Frontend</h1>
      <ArticleIndex articles={articles} />
    </div>
  );
}
export default Content;
