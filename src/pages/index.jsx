import Head from 'next/head';
import Banner from '../components/Banner'
import FeaturedProducts from '../components/FeaturedProducts';
import Header from '../components/Header'
import MiddleBanner from '../components/MiddleBanner';
import styles from '../styles/Home.module.scss';
import data from '../../data.json';

export default function Home({ bannerSlides, middleBannerItems, featuredProducts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | N1 Rush</title>
      </Head>

      <Header />

      <main className={styles.main}>
        <Banner slides={bannerSlides} />
        <MiddleBanner items={middleBannerItems} />
        <FeaturedProducts products={featuredProducts} />
      </main>

      <footer className={styles.footer}>
        <div>
          <img src="/assets/svg/logo_n1.svg" alt="Agência N1" />
        </div>
        <div>
          <p>Agência N1 - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  )
}

export function getServerSideProps() {
  return {
    props: data
  }
}
