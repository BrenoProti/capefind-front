import { useLocation, useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import {Tooltip} from "@mui/material";

interface CardProps {
  cardItem: {
    articleId: number;
    score: number;
    section: string;
    article: {
      title: string;
      authors: string[];
    };
    paragraphs: string[];
  };
  highScore: number;
}

const Card: React.FC<CardProps> = ({ cardItem , highScore}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const search = new URLSearchParams(location.search).get('search');

  const descriptionFiltered =
    cardItem.paragraphs && cardItem.paragraphs.join(' ').length > 350
      ? `${cardItem.paragraphs.join(' ').slice(0, 350)}...`
      : (cardItem.paragraphs && cardItem.paragraphs.join(' ')) || '';

  const calculateScore = (comparisonValue: number) => {
    const percentage = (comparisonValue / highScore) * 100;
    if (percentage >= 80) {
      return 'Score alto';
    }
    if (percentage >= 50) {
      return 'Score médio';
    }
    return 'Score baixo';
  }

  const handleCardClick = () => {
    navigate(`/article?search=${search}&id=${cardItem.articleId}`);
  };

  return (

    <div className={styles.card} onClick={handleCardClick}>
      <div className={styles.cardHead}>
        <h3>{cardItem.article.title}</h3>
      </div>



      <div className={styles.cardInfo}>
        <p>
          {cardItem.article.authors && cardItem.article.authors.length > 1
            ? 'Autores'
            : 'Autor'}
          :{' '}
          <span>
            {(cardItem.article.authors &&
              cardItem.article.authors.join(', ')) ||
              ''}
          </span>
        </p>
      </div>

      <div className={styles.cardDescription}>
        <h3 className={styles.sectionTitle}>{cardItem.section}</h3>
        <p className={styles.description}>{descriptionFiltered}</p>
      </div>

      <div className={styles.tagWrapper}>
        <Tooltip title={
          `Score: ${cardItem.score}`
        }>
          <span className={styles.tag}>{calculateScore(cardItem.score)}</span>
        </Tooltip>
      </div>
    </div>
  );
};

export default Card;
