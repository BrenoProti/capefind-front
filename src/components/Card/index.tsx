import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

interface CardProps {
  cardItem: {
    id: number;
    title: string;
    authors: string[];
    tags: string[];
    date: string;
    description: string;
    url: string;
  };
}

const Card: React.FC<CardProps> = ({ cardItem }) => {
  const navigate = useNavigate();

  const getDateYear = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.getFullYear();
  };

  const descriptionFiltered = cardItem.description.length > 350 ? `${cardItem.description.slice(0, 350)}...` : cardItem.description;

  const handleCardClick = () => {
    const articleLink = cardItem.url;
    if (articleLink) navigate(`/article?url=${articleLink}&search=${cardItem.title}`);
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <div className={styles.cardHead}>
        <h3>{cardItem.title}</h3>
        <span>{getDateYear(cardItem.date)}</span>
      </div>
      <div className={styles.cardInfo}>
        <p>
          {cardItem.authors.length > 1 ? "Autores" : "Autor"}:{" "}
          <span>{cardItem.authors.join(", ")}</span>
        </p>
        <p>
          Palavras chave: 
            {cardItem.tags.map((tag) => (
              <span className={styles.tag} key={tag}>{tag}</span>
            ))}
        </p>
      </div>
      <div className={styles.cardDescription}>
        <p>Resumo</p>
        <p className={styles.description}>{descriptionFiltered}</p>
      </div>
    </div>
  );
};

export default Card;
