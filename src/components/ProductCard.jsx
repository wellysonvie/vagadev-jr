import { useEffect, useState } from 'react';
import { useBag } from '../contexts/BagContext';
import styles from '../styles/components/ProductCard.module.scss';

const ProductCard = ({ product, openAddedProductModal }) => {

  const [purchased, setPurchased] = useState(false);
  const { addProduct, removeProduct } = useBag();

  function purchase() {
    setPurchased(!purchased);
  }

  useEffect(() => {
    if (purchased) {
      addProduct(product);
      openAddedProductModal();
    } else {
      removeProduct(product.id);
    }
  }, [purchased]);

  return (
    <article className={styles.productCard}>
      <img src={product.image} alt={product.name} />
      <div>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
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