import { useEffect, useRef, useState } from 'react';
import styles from '../styles/components/Banner.module.scss';

const Banner = ({ slides }) => {

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const timeoutRef = useRef();

  function nextSlide() {
    if (currentSlideIndex === slides.length - 1) {
      setCurrentSlideIndex(0);
    } else {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  }

  function previousSlide() {
    if (currentSlideIndex === 0) {
      setCurrentSlideIndex(slides.length - 1);
    } else {
      setCurrentSlideIndex(currentSlideIndex - 1)
    }
  }

  useEffect(() => {
    timeoutRef.current = setInterval(() => nextSlide(), 1000 * 10);
    return () => clearTimeout(timeoutRef.current);
  }, [nextSlide]);

  return (
    <div className={styles.banner}>
      <div
        className={`${styles.bannerBackground} ${styles.desktop}`}
        style={{ backgroundImage: `url('${slides[currentSlideIndex].images.desktop}')` }}
      />
      <div
        className={`${styles.bannerBackground} ${styles.mobile}`}
        style={{ backgroundImage: `url('${slides[currentSlideIndex].images.mobile}')` }}
      />
      <div className={styles.bannerInfo}>
        <h2>{slides[currentSlideIndex].name}</h2>
        <div className={styles.price}>
          <h3>{slides[currentSlideIndex].price.split(',')[0]}</h3>
          <span>,{slides[currentSlideIndex].price.split(',')[1]}</span>
        </div>
        <p>{slides[currentSlideIndex].description}</p>
      </div>
      <div className={styles.bannerSlider}>
        <div className={styles.currentProduct}>
          <h4>{slides[currentSlideIndex].name}</h4>
          <span></span>
        </div>
        <div className={styles.controller}>
          <span>{currentSlideIndex + 1}/{slides.length}</span>
          <div>
            <img
              src="/assets/svg/angle-left-solid.svg"
              alt="Anterior"
              title="Anterior"
              onClick={previousSlide}
            />
            <img
              src="/assets/svg/angle-right-solid.svg"
              alt="Próximo"
              title="Próximo"
              onClick={nextSlide}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;