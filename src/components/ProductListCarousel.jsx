import { useState } from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/components/ProductListCarousel.module.scss';

const ProductListCarousel = ({ products, openAddedProductModal }) => {

  const [currentCarouselProductIndex, setCurrentCarouselProductIndex] = useState(0);

  function nextCarouselProduct() {
    if (currentCarouselProductIndex === products.length - 1) {
      setCurrentCarouselProductIndex(0);
    } else {
      setCurrentCarouselProductIndex(currentCarouselProductIndex + 1);
    }
  }

  function previousCarouselProduct() {
    if (currentCarouselProductIndex === 0) {
      setCurrentCarouselProductIndex(products.length - 1);
    } else {
      setCurrentCarouselProductIndex(currentCarouselProductIndex - 1)
    }
  }

  return (
    <div className={styles.productListCarousel}>
      <img
        src="/assets/svg/angle-left-solid-blue.svg"
        alt="Anterior"
        onClick={previousCarouselProduct}
      />
      <ProductCard
        product={products[currentCarouselProductIndex]}
        openAddedProductModal={openAddedProductModal}
      />
      <img
        src="/assets/svg/angle-right-solid-blue.svg"
        alt="Próximo"
        onClick={nextCarouselProduct}
      />
    </div>
  );
}

export default ProductListCarousel;