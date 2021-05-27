import { useState } from 'react';
import NavBar from './NavBar';
import { useBag } from '../contexts/BagContext';
import styles from '../styles/components/Header.module.scss';

const Header = () => {

  const [showNavBar, setShowNavBar] = useState(false);
  const { bagProducts } = useBag();

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <div
          className={styles.hamburgerBtn}
          onClick={() => setShowNavBar(!showNavBar)}
          data-clicked={showNavBar}
        />
        <img src="/assets/svg/logo_n1_rush.svg" alt="N1 Rush" />
      </div>
      {showNavBar && <NavBar />}
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
          <span>{bagProducts.length}</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;