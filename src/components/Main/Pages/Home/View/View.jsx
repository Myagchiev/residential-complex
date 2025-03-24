import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
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
  const autoPlayRef = useRef();

  // Обработчик ресайза
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Автопрокрутка
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev === sliderData.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(autoPlayRef.current);
  }, [currentSlide, sliderData.length]);

  const nextSlide = () => {
    clearInterval(autoPlayRef.current);
    setCurrentSlide(prev => (prev === sliderData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    clearInterval(autoPlayRef.current);
    setCurrentSlide(prev => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };

  // Свайп-жесты
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <section className="view">
      <h1>Наслаждайтесь видами <br />из окон своей квартиры</h1>
      
      {/* Улучшенный мобильный слайдер */}
      {isMobile ? (
        <div className="mobile-view-slider" {...swipeHandlers}>
          <div className="slider-container">
            <motion.img
              key={currentSlide}
              src={sliderData[currentSlide].image}
              alt={sliderData[currentSlide].title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="slider-image"
            />
            
            <div className="slider-controls">
              <button onClick={prevSlide} className="control-button">
                <GoArrowLeft />
              </button>
              
              <div className="pagination-dots">
                {sliderData.map((_, index) => (
                  <span 
                    key={index}
                    className={`dot ${currentSlide === index ? 'active' : ''}`}
                    onClick={() => {
                      clearInterval(autoPlayRef.current);
                      setCurrentSlide(index);
                    }}
                  />
                ))}
              </div>
              
              <button onClick={nextSlide} className="control-button">
                <GoArrowRight />
              </button>
            </div>
            
            <div className="slider-title">
              {sliderData[currentSlide].title}
            </div>
          </div>
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