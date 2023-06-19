import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import './styles.scss';
import { useEffect, useState } from 'react';

import { Button } from '@mui/material';
import api from '../../api/api';

const ArticlePage: React.FC = () => {
  const initialArticle = {
    score: null,
    id: null,
    title: 'Artigo não indexado',
    link: null,
    authors: [],
    authorsLinks: null,
    crawled: null,
    sections: [],
  };
  const location = useLocation();
  const search = new URLSearchParams(location.search).get('search');
  const articleUrl = new URLSearchParams(location.search).get('url');
  const articleId = new URLSearchParams(location.search).get('id');
  const [articleData, setArticleData] = useState(initialArticle);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/article/${articleId}`);
        console.log(response, 'response');
        setArticleData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [articleUrl]);

  const viewOriginalArticle = () => {
    if (articleData.link) window.open(articleData.link, '_blank');
  };

  return (
    <>
      <div className="container">
        <Header searchString={search || ''} />
        <p>Esperamos que este artigo possa ser útil para você !</p>

        <div className="articleData">
          <div>
            <h1>{articleData.title}</h1>
            <span>{articleData.authors && articleData.authors.join(', ')}</span>
          </div>

          <div className="sections">
            {articleData.sections &&
              articleData.sections.map((s: any, index: number) => (
                <div className="sectionWrapper" key={index}>
                  <h2>{s.section}</h2>
                  {s.paragraphs &&
                    s.paragraphs
                      .filter(
                        (p: string) => p.trim().length > 0 && p.trim() != '.'
                      )
                      .map((p: string, i: number) => <p key={i}>{p}</p>)}
                </div>
              ))}
          </div>
        </div>

        <div className="articlesActions">
          {/* <Button variant="outlined" size="large">Salvar Artigo</Button> */}
          <Button
            variant="contained"
            size="large"
            disabled={!articleData.link}
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
