import { useEffect, useState } from 'react';
import { useBag } from '../contexts/BagContext';
import styles from '../styles/components/ProductCard.module.scss';

const ProductCard = ({ product, openAddedProductModal }) => {

  const [purchased, setPurchased] = useState(false);
  const { bagProducts, addProduct, removeProduct, containsProduct } = useBag();

  function purchase() {
    if (!purchased) {
      addProduct(product);
      openAddedProductModal();
    } else {
      removeProduct(product.id);
    }
  }

  useEffect(() => {
    setPurchased(containsProduct(product.id));
  }, [product, bagProducts]);

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