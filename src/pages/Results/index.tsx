import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import Header from "../../components/Header";
import mockFile from "../../mocks/results.json";
import Card from "../../components/Card";


const ResultsPage: React.FC = () => {
  const location = useLocation();
  const search = new URLSearchParams(location.search).get('search');

  return (
    <div className="container">
      <Header searchString={search || ''} />
      
      <div className={styles.resultInfo}>
        <p>Aqui estão os melhores resultados para você !</p>
        <p>Termo pesquisado: <span>{search}</span></p>
      </div>

      <div className={styles.results}>
        { mockFile.data.map((item: any) => (
          <Card cardItem={item} key={item.id} />
        )) }
      </div>
    </div>
  );
}

export default ResultsPage;