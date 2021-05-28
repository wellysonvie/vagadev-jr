import styles from '../styles/components/MiddleBanner.module.scss';

const MiddleBanner = ({ items }) => {
  return (
    <section className={styles.middleBanner}>
      {items.map(item => (
        <article key={item.name}>
          <img src={item.image} alt={item.name} loading="lazy" />
          <div className={styles.footer}>
            <h1>{item.name}</h1>
            <span></span>
          </div>
        </article>
      ))}
    </section>
  );
}

export default MiddleBanner;