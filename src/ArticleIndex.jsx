/* eslint-disable react/prop-types */
export function ArticleIndex(props) {
  return (
    <div className="ArticleIndex">
      <h3>Article Index</h3>
      {props.articles.map((article) => (
        <div key={article.url}>
          <h3>{article.title}</h3>
          <h6>{article.author}</h6>
          <h8>
            <p>{article.description}</p>
            <p>{article.url}</p>
            <p>
              <img src={article.urlToImage} width="100" />
            </p>
            <p>&nbsp;</p>
          </h8>
        </div>
      ))}
    </div>
  );
}

export default ArticleIndex;
