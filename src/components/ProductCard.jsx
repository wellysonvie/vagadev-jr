import { useState } from 'react';
import styles from '../styles/components/ProductCard.module.scss';

const ProductCard = ({ image, name, price }) => {

  const [purchased, setPurchased] = useState(false);

  return (
    <article className={styles.productCard}>
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{price}</p>
        <button
          className={purchased ? styles.purchased : ''}
          onClick={() => setPurchased(!purchased)}
        >
          <img src="/assets/svg/mario.svg" />
        </button>
      </div>
    </article>
  );
}

export default ProductCard;