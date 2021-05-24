import styles from '../styles/components/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <img src="/assets/svg/icon_hamburguer.svg" alt="Menu" />
        <img src="/assets/svg/logo_n1_rush.svg" alt="N1 Rush" />
      </div>
      <ul className={styles.menuOptions}>
        <li>
          <img src="/assets/svg/paper-plane.svg" alt="Contato" />
          <span>CONTATO</span>
        </li>
        <li>
          <img src="/assets/svg/search-solid.svg" alt="Buscar" />
          <span>BUSCAR</span>
        </li>
        <li>
          <img src="/assets/svg/shopping-bag-solid.svg" alt="Carrinho" />
          <span>2</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;