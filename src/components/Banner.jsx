import styles from '../styles/components/Banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div
        className={styles.bannerBackground}
        style={{ backgroundImage: "url('/assets/img/principal_banner_desktop.jpg')" }}
      />
      <div className={styles.bannerInfo}>
        <h2>MORTAL KOMBAT</h2>
        <div className={styles.price}>
          <h3>R$ 299</h3>
          <span>,99</span>
        </div>
        <p>Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova. Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando tanto a estratégia como o estilo de luta.</p>
      </div>
      <div className={styles.bannerSlider}>
        <div className={styles.currentProduct}>
          <h4>MORTAL KOMBAT</h4>
          <span></span>
        </div>
        <div className={styles.controller}>
          <span>1/2</span>
          <div>
            <img src="/assets/svg/angle-left-solid.svg" alt="Anterior" title="Anterior" />
            <img src="/assets/svg/angle-right-solid.svg" alt="Próximo" title="Próximo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;