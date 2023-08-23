import axios from "axios";
import { ArticleIndex } from "./ArticleIndex";
import { useState, useEffect } from "react";

export function Content() {
  const [articles, setArticles] = useState([]);

  const handleArticlesIndex = () => {
    console.log("handleArticlesIndex");
    axios.get("http://localhost:3000/").then((response) => {
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
