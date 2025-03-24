import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './View.scss';
import view1 from '../../../../../assets/views/poklon.jpeg';
import view2 from '../../../../../assets/views/moskva.jpeg';
import view3 from '../../../../../assets/views/matvey.jpg';
import view4 from '../../../../../assets/views/ramen.jpeg';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

function View() {
  const sliderData = [
    { image: view1, title: "Поклонная гора" },
    { image: view2, title: "Москва Сити" },
    { image: view3, title: "Матвеевский лес" },
    { image: view4, title: "Район Раменки" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };

  return (
    <section className="view">
      <h1>Наслаждайтесь видами <br />из окон своей квартиры</h1>
      {isMobile ? (
        // Мобильный слайдер
        <div className="mobile-slider">
          <div className="mobile-slider__content">
            <motion.div
              className="mobile-slider__wrapper"
              initial={{ x: 0 }}
              animate={{ x: `-${currentSlide * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {sliderData.map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  alt={item.title}
                  className="mobile-slider__image"
                />
              ))}
            </motion.div>
          </div>
          <div className="mobile-slider__titles">
            <div className="mobile-slider__titles-wrapper">
              {sliderData.map((item, index) => (
                <span
                  key={index}
                  className={`mobile-slider__title ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                >
                  {item.title}
                </span>
              ))}
            </div>
          </div>
          <button className="mobile-slider__arrow mobile-slider__arrow--left" onClick={prevSlide}>
            <GoArrowLeft />
          </button>
          <button className="mobile-slider__arrow mobile-slider__arrow--right" onClick={nextSlide}>
            <GoArrowRight />
          </button>
        </div>
      ) : (
        // Десктопный слайдер
        <div className="slider">
          <button className="slider__arrow slider__arrow--left" onClick={prevSlide}>
            <GoArrowLeft />
          </button>
          <div className="slider__content">
            <motion.div
              className="slider__wrapper"
              initial={{ x: 0 }}
              animate={{ x: `-${currentSlide * (1800 + 20)}px` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {sliderData.map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  alt={item.title}
                  className="slider__image"
                />
              ))}
            </motion.div>
            <div className="slider__titles">
              <div className="slider__titles-wrapper">
                {sliderData.map((item, index) => (
                  <span
                    key={index}
                    className={`slider__title ${currentSlide === index ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  >
                    {item.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <button className="slider__arrow slider__arrow--right" onClick={nextSlide}>
            <GoArrowRight />
          </button>
        </div>
      )}
    </section>
  );
}

export default View;