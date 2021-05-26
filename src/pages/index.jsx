import Head from 'next/head';
import Banner from '../components/Banner'
import FeaturedProducts from '../components/FeaturedProducts';
import Header from '../components/Header'
import MiddleBanner from '../components/MiddleBanner';
import styles from '../styles/Home.module.scss'

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
    props: {
      bannerSlides: [
        {
          images: {
            desktop: '/assets/img/principal_banner_desktop.jpg',
            mobile: '/assets/img/principal_banner_mobile.jpg'
          },
          name: 'MORTAL KOMBAT',
          price: 'R$ 299,99',
          description: `Mortal Kombat X combina uma apresentação cinemática única 
            com uma jogabilidade totalmente nova. Os jogadores podem escolher pela 
            primeira vez diversas variantes de cada personagem, afetando tanto a 
            estratégia como o estilo de luta.`
        },
        {
          images: {
            desktop: '/assets/img/principal_banner_desktop_02.jpg',
            mobile: '/assets/img/principal_banner_mobile_02.jpg'
          },
          name: 'RED DEAD REDEMPTION 2',
          price: 'R$ 299,99',
          description: `Arthur Morgan e a gangue Van der Linde são bandidos em fuga. 
            Com agentes federais e os melhores caçadores de recompensas no seu encalço, 
            a gangue precisa roubar, assaltar e lutar para sobreviver no impiedoso coração 
            dos Estados Unidos. Conforme divisões internas profundas ameaçam despedaçar a gangue, 
            Arthur deve fazer uma escolha entre os seus próprios ideais e a lealdade à gangue que o criou.`
        },
      ],
      middleBannerItems: [
        {
          image: '/assets/img/zelda_banner.jpg',
          name: 'The Legend of Zelda - Breath of th wild'
        },
        {
          image: '/assets/img/sekiro_banner.jpg',
          name: 'SEKIRO - Shadows die twice'
        }
      ],
      featuredProducts: [
        {
          id: 0,
          image: '/assets/img/product-outriders.jpg',
          name: 'Outriders',
          price: 'R$ 200,00',
        },
        {
          id: 1,
          image: '/assets/img/product-cyberpunk2077.jpg',
          name: 'CYBERPUNK 2077',
          price: 'R$ 200,00',
        },
        {
          id: 2,
          image: '/assets/img/product-donkey-kong-country-tropical-freeze.jpg',
          name: 'Donkey Kong Country Tropical Freeze',
          price: 'R$ 200,00',
        },
      ]
    }
  }
}
