import styles from '../styles/components/NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.triangle} />
      <div>
        <section>
          <h2><a href="#">Luta</a></h2>
          <ul>
            <li><a href="#">Mortal Kombat</a></li>
            <li><a href="#">Smash Bros</a></li>
            <li><a href="#">Killer Instinct</a></li>
            <li><a href="#">DBZ Kakarot</a></li>
          </ul>
        </section>
        <section>
          <h2><a href="#">Ação / Aventura</a></h2>
          <ul>
            <li><a href="#">GTA V</a></li>
            <li><a href="#">Tomb Raider</a></li>
            <li><a href="#">HALO</a></li>
            <li><a href="#">Call of Duty</a></li>
          </ul>
        </section>
        <section>
          <h2><a href="#">Corrida</a></h2>
          <ul>
            <li><a href="#">NEED for SPEED</a></li>
            <li><a href="#">Forza Horizon</a></li>
          </ul>
        </section>
      </div>
      <div className={styles.shadow} />
    </nav>
  );
}

export default NavBar;