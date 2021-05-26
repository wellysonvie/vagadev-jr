import { useEffect, useState } from 'react';
import styles from '../styles/components/ProductCard.module.scss';

const ProductCard = ({ image, name, price, openAddedProductModal }) => {

  const [purchased, setPurchased] = useState(false);

  function purchase() {
    setPurchased(!purchased);
  }

  useEffect(() => {
    if (purchased) openAddedProductModal();
  }, [purchased]);

  return (
    <article className={styles.productCard}>
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{price}</p>
        <button
          className={purchased ? styles.purchased : ''}
          onClick={purchase}
        >
          <img src="/assets/svg/mario.svg" />
        </button>
      </div>
    </article>
  );
}

export default ProductCard;