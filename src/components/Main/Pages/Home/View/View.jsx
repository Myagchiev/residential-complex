import { useState } from 'react';
import { motion } from 'framer-motion';
import './View.scss';
import view1 from '../../../../../assets/views/poklon.jpg';
import view2 from '../../../../../assets/views/moskva.jpg';
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };

  return (
    <section className="view">
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
    </section>
  );
}

export default View;