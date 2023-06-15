import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import "./styles.scss";
import { useEffect, useState } from "react";
import article from "../../mocks/article.json";

import { Button } from "@mui/material";
import Head from "../../components/Head";

const ArticlePage: React.FC = () => {
  const location = useLocation();
  const search = new URLSearchParams(location.search).get("search");
  const articleUrl = new URLSearchParams(location.search).get("url");
  const [articleData, setArticleData] = useState({} as any);

  useEffect(() => {
    // TODO: fetch article data
    setArticleData(article);
  }, [articleUrl]);

  const viewOriginalArticle = () => {
    if (articleData.url) window.open(articleData.url, "_blank");
  };

  return (
    <>
      <Head />
      <div className="container">
        <Header searchString={search || ""} />
        <p>Esperamos que este artigo possa ser útil para você !</p>

        <div
          className="articleData"
          dangerouslySetInnerHTML={{ __html: articleData.content }}
        />

        <div className="articlesActions">
          {/* <Button variant="outlined" size="large">Salvar Artigo</Button> */}
          <Button
            variant="contained"
            size="large"
            onClick={viewOriginalArticle}
          >
            Visualizar original
          </Button>
        </div>
      </div>
    </>
  );
};

export default ArticlePage;
