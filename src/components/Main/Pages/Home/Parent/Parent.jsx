import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Parent.scss';
import PhotoCard from '../../../PhotoCard/PhotoCard';
import photo1 from '@/assets/grid/20.png';
import photo2 from '@/assets/grid/15.png';
import photo3 from '@/assets/grid/7.png';
import photo4 from '@/assets/grid/2.png';
import Container from '../../../Container/Container';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { useSwipeable } from 'react-swipeable';

function Parent() {
  const photoData = [
    { image: photo1, title: '20 гектаров', description: 'территории ЖК — это как полтора Зарядья' },
    { image: photo2, title: '15 корпусов', description: 'по 12-14 этажей, просторная застройка' },
    { image: photo3, title: '7 гектаров', description: 'приватного парка для жителей ЖК' },
    { image: photo4, title: '2 километра', description: 'набережной реки Раменка вдоль ЖК' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % photoData.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + photoData.length) % photoData.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    trackMouse: true
  });

  return (
    <Container>
      <section className="parent">
        <div className="grid-wrapper">
          {photoData.map((item, index) => (
            <PhotoCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              variant="default"
              loading="lazy"
            />
          ))}
        </div>
        
        <div className="mobile-slider" {...swipeHandlers}>
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="slide"
            >
              <PhotoCard
                image={photoData[currentSlide].image}
                title={photoData[currentSlide].title}
                description={photoData[currentSlide].description}
                variant="default"
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>
          
          <div className="slider-controls">
            <button 
              className="slider-arrow slider-arrow--left" 
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <GoArrowLeft />
            </button>
            
            <div className="pagination-dots">
              {photoData.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => {
                    setDirection(index > currentSlide ? 1 : -1);
                    setCurrentSlide(index);
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="slider-arrow slider-arrow--right" 
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <GoArrowRight />
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Parent;