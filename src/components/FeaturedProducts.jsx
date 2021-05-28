import { useState } from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/components/FeaturedProducts.module.scss';
import AddedProductModal from './AddedProductModal';
import ProductListCarousel from './ProductListCarousel';

const FeaturedProducts = ({ products }) => {

  const [showAddedProductModal, setShowAddedProductModal] = useState(false);

  return (
    <>
      <section className={styles.featuredProducts}>
        <header>
          <img src="/assets/svg/section.svg" />
          <h1>Produtos em destaque</h1>
        </header>
        <div className={styles.productList}>
          {products.map(product => (
            <ProductCard
              key={product.name}
              product={product}
              openAddedProductModal={() => setShowAddedProductModal(true)}
            />
          ))}
        </div>
        <ProductListCarousel
          products={products}
          openAddedProductModal={() => setShowAddedProductModal(true)}
        />
      </section>
      {showAddedProductModal &&
        <AddedProductModal
          closeModal={() => setShowAddedProductModal(false)}
        />
      }
    </>
  );
}

export default FeaturedProducts;