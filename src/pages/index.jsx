import Head from 'next/head';
import Banner from '../components/Banner'
import Header from '../components/Header'
import MiddleBanner from '../components/MiddleBanner';
import styles from '../styles/Home.module.scss'

export default function Home({ bannerSlides, middleBannerItems }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | N1 Rush</title>
      </Head>

      <Header />

      <main className={styles.main}>
        <Banner slides={bannerSlides} />
        <MiddleBanner items={middleBannerItems} />
      </main>

      <footer className={styles.footer}>

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
      ]
    }
  }
}
