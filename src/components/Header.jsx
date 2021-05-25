import { useState } from 'react';
import NavBar from './NavBar';
import styles from '../styles/components/Header.module.scss';


const Header = () => {

  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <img
          src="/assets/svg/icon_hamburguer.svg"
          alt="Menu"
          onClick={() => setShowNavBar(!showNavBar)}
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
          <span>2</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;