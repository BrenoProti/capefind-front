import { useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { useEffect, useState } from 'react';
import api from '../../api/api';

const ResultsPage: React.FC = () => {
  const location = useLocation();
  const search = new URLSearchParams(location.search).get('search');
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.post(
          '/article-section/search',
          {},
          {
            params: {
              size: 100,
              term: search,
            },
          }
        );
        const content = response.data.content;
        setData(content || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [search]);

  return (
    <div className="container">
      <Header searchString={search || ''} />

      <div className={styles.resultInfo}>
        <p>Aqui estão os melhores resultados para você !</p>
        <p>
          Termo pesquisado: <span>{search}</span>
        </p>
      </div>

      <div className={styles.results}>
        {data.map((item: any, index: number) => (
          <Card cardItem={item} key={index + item.articleId} />
        ))}

        {/* {mockFile.data.map((item: any) => (
          <Card cardItem={item} key={item.id} />
        ))} */}
      </div>
    </div>
  );
};

export default ResultsPage;
