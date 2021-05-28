import { BagProvider } from '../contexts/BagContext';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <BagProvider>
      <Component {...pageProps} />
    </BagProvider>
  )
}

export default MyApp
