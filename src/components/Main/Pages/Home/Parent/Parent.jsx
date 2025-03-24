import { useState } from 'react';
import { motion } from 'framer-motion';
import './Parent.scss';
import PhotoCard from '../../../PhotoCard/PhotoCard';
import photo1 from '@/assets/grid/20.png';
import photo2 from '@/assets/grid/15.png';
import photo3 from '@/assets/grid/7.png';
import photo4 from '@/assets/grid/2.png';
import Container from '../../../Container/Container';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

function Parent() {
  const photoData = [
    { image: photo1, title: '20 гектаров', description: 'территории ЖК — это как полтора Зарядья' },
    { image: photo2, title: '15 корпусов', description: 'по 12-14 этажей, просторная застройка' },
    { image: photo3, title: '7 гектаров', description: 'приватного парка для жителей ЖК' },
    { image: photo4, title: '2 километра', description: 'набережной реки Раменка вдоль ЖК' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % photoData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + photoData.length) % photoData.length);
  };

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
        <div className="slider-wrapper">
          <motion.div
            className="slider-content"
            initial={{ x: 0 }}
            animate={{ x: `-${currentSlide * 100}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
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
          </motion.div>
          <button className="slider-arrow slider-arrow--left" onClick={prevSlide}>
            <GoArrowLeft />
          </button>
          <button className="slider-arrow slider-arrow--right" onClick={nextSlide}>
            <GoArrowRight />
          </button>
        </div>
      </section>
    </Container>
  );
}

export default Parent;