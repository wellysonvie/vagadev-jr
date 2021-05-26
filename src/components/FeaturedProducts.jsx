import ProductCard from './ProductCard';
import styles from '../styles/components/FeaturedProducts.module.scss';

const FeaturedProducts = ({ products }) => {
  return (
    <section className={styles.featuredProducts}>
      <header>
        <img src="/assets/svg/section.svg" />
        <h1>Produtos em destaque</h1>
      </header>
      <div className={styles.productList}>
        {products.map(product => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </section >
  );
}

export default FeaturedProducts;