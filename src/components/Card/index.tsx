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
  console.log(cardItem);
  return (
    <div className={styles.card}>
      <div className={styles.cardInfo}>
        <h3>{cardItem.id}</h3>
        <h3>{cardItem.title}</h3>
        <p>{cardItem.authors.join(", ")}</p>
        <p>{cardItem.tags.join(", ")}</p>
        <p>{cardItem.date}</p>
        <p>{cardItem.description}</p>
      </div>
    </div>
  );
};

export default Card;
