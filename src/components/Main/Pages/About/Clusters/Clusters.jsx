import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../../../Container/Container';
import Button from '../../../Button/Button';
import LogoBlue from '@/assets/clusters/blueslide/LogoBlue.svg';
import LogoGreen from '@/assets/clusters/greenslide/LogoGreen.svg';
import slide from '@/assets/clusters/blueslide/slide.png';
import slide2 from '@/assets/clusters/blueslide/slide2.png';
import slide3 from '@/assets/clusters/blueslide/slide3.png';
import slide4 from '@/assets/clusters/blueslide/slide4.png';
import slide5 from '@/assets/clusters/blueslide/slide5.png';
import slide6 from '@/assets/clusters/blueslide/slide6.png';
import slide7 from '@/assets/clusters/blueslide/slide7.png';
import slide8 from '@/assets/clusters/blueslide/slide8.png';
import slide9 from '@/assets/clusters/blueslide/slide9.png';
import slide10 from '@/assets/clusters/blueslide/slide10.png';
import gslide from '@/assets/clusters/greenslide/gslide.png';
import gslide2 from '@/assets/clusters/greenslide/gslide2.png';
import gslide3 from '@/assets/clusters/greenslide/gslide3.png';
import gslide4 from '@/assets/clusters/greenslide/gslide4.png';
import gslide5 from '@/assets/clusters/greenslide/gslide5.png';
import gslide6 from '@/assets/clusters/greenslide/gslide6.png';
import gslide7 from '@/assets/clusters/greenslide/gslide7.png';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import Modal from '../../../Modals/Modal';
import BlueBook from '@/assets/modals/blueBook.png';
import GreenBook from '@/assets/modals/greenBook.png';
import Line from '@/assets/presentation/bgLine.png';

function Clusters() {
  const blueClusterData = [
    { image: slide, title: 'Корпуса кластера River Line на набережной Раменки' },
    { image: slide2, title: 'Возле набережной места для прогулок и детские площадки' },
    { image: slide3, title: 'Вид на корпуса сверху' },
    { image: slide4, title: 'Можно провести вечер сидя на мостике около реки' },
    { image: slide5, title: 'Детская площадка' },
    { image: slide6, title: 'Река прямо у дома, в любой момент можно прогуляться' },
    { image: slide7, title: 'Квартиры с панорамным видом на парк' },
    { image: slide8, title: 'Корпуса кластера River Line на набережной Раменки' },
    { image: slide9, title: 'Возле набережной места для прогулок и детские площадки' },
    { image: slide10, title: 'Вид на корпуса сверху' },
  ];

  const greenClusterData = [
    { image: gslide },
    { image: gslide2 },
    { image: gslide3 },
    { image: gslide4 },
    { image: gslide5 },
    { image: gslide6 },
    { image: gslide7 },
  ];

  const [currentBlueSlide, setCurrentBlueSlide] = useState(0);
  const [currentGreenSlide, setCurrentGreenSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCluster, setActiveCluster] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = (setSlide, length) => {
    setSlide(prev => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (setSlide, length) => {
    setSlide(prev => (prev === 0 ? length - 1 : prev - 1));
  };

  const calculateOffset = (currentSlide, slideWidth, containerWidth) => {
    const slideFullWidth = slideWidth;
    const centerOffset = (containerWidth - slideWidth) / 2;
    return -(currentSlide * slideFullWidth) + centerOffset;
  };

  const openModal = (cluster) => {
    setActiveCluster(cluster);
    setIsModalOpen(true);
  };

  const handleSubmit = (phone) => {
    console.log(`Submitted phone from ${activeCluster} cluster:`, phone);
    setIsModalOpen(false);
  };

  const modalProps = {
    isOpen: isModalOpen,
    onClose: () => setIsModalOpen(false),
    title: `Получите подробное описание и цены на свободные планировки в кластере ${activeCluster === 'blue' ? 'River Line' : 'Green Line'}`,
    text: 'PDF, можно скачать прямо сейчас',
    backgroundImage: Line,
    backgroundColor: activeCluster === 'blue' ? '#1f2057ff' : '#a0a747ff',
    foregroundImage: activeCluster === 'blue' ? BlueBook : GreenBook,
    showImages: true,
    onSubmit: handleSubmit,
    buttonText: 'Получить планировки',
  };

  // мобильный слайдер
  const MobileSlider = ({ data, logo, title, description, cluster, showTitles = false }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);

    return (
      <div className="mobile-slider">
        <div className="mobile-slider__header">
          <h1>{title}</h1>
          <img src={logo} alt={`Логотип ${title}`} className="mobile-slider__logo" />
        </div>
        <p className="mobile-slider__description">{description}</p>
        
        <div className="mobile-slider__content">
          <AnimatePresence custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction < 0 ? 100 : -100 }}
              transition={{ duration: 0.3 }}
              className="slide-container"
            >
              <img 
                src={data[currentSlide].image} 
                alt={data[currentSlide].title || `Slide ${currentSlide + 1}`}
                className="mobile-slider__image"
              />
              {showTitles && data[currentSlide].title && (
                <motion.p 
                  className="mobile-slider__title"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {data[currentSlide].title}
                </motion.p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="mobile-slider__controls">
          <button 
            className="mobile-slider__arrow"
            onClick={() => {
              setDirection(-1);
              prevSlide(setCurrentSlide, data.length);
            }}
          >
            <GoArrowLeft />
          </button>
          
          <div className="mobile-slider__dots">
            {data.map((_, index) => (
              <button
                key={index}
                className={`mobile-slider__dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1);
                  setCurrentSlide(index);
                }}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            className="mobile-slider__arrow"
            onClick={() => {
              setDirection(1);
              nextSlide(setCurrentSlide, data.length);
            }}
          >
            <GoArrowRight />
          </button>
        </div>
        
        <Button 
          text="Посмотреть планировки" 
          color="white" 
          onClick={() => openModal(cluster)}
          className="mobile-slider__button"
        />
      </div>
    );
  };

  return (
    <section className="clusters">
      <Container>
        <h1 className="clusters-title">
          Жилой комплекс состоит <br /> из двух кластеров
        </h1>
      </Container>

      {isMobile ? (
        <>
          <div className="mobile-cluster mobile-cluster--blue">
            <MobileSlider
              data={blueClusterData}
              logo={LogoBlue}
              title="River Line"
              description="Восемь жилых корпусов по 12-14 этажей выстроенны вдоль реки Раменки"
              cluster="blue"
              showTitles
            />
          </div>
          
          <div className="mobile-cluster mobile-cluster--green">
            <MobileSlider
              data={greenClusterData}
              logo={LogoGreen}
              title="Green Line"
              description="Семь 14-этажных жилых корпусов, расположенных вдоль Матвеевского леса"
              cluster="green"
            />
          </div>
        </>
      ) : (
        <>
          {/* Десктопная версия синего кластера */}
          <div className="slider slider-blue">
            <Container>
              <div className="slider-content">
                <div className="slider-text">
                  <div className="subslider">
                    <h1>River Line</h1>
                    <img src={LogoBlue} alt="Логотип кластера 1" className="slider-logo" />
                  </div>
                  <p>Восемь жилых корпусов по 12-14 этажей выстроенны вдоль реки Раменки</p>
                </div>
                <Button text="Посмотреть планировки" color="white" onClick={() => openModal('blue')} />
              </div>
            </Container>
            <div className="slider-photos">
              <button className="slider__arrow slider__arrow--left" onClick={() => prevSlide(setCurrentBlueSlide, blueClusterData.length)}>
                <GoArrowLeft />
              </button>
              <div className="slider__content">
                <motion.div
                  className="slider__wrapper"
                  initial={{ x: 0 }}
                  animate={{ x: calculateOffset(currentBlueSlide, 1180, 1800) }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  {blueClusterData.map((item, index) => (
                    <div key={index} className="slider__item">
                      <img src={item.image} alt={item.title} className="slider__image" />
                      <p className="slider__title">{item.title}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
              <button className="slider__arrow slider__arrow--right" onClick={() => nextSlide(setCurrentBlueSlide, blueClusterData.length)}>
                <GoArrowRight />
              </button>
            </div>
          </div>

          {/* Десктопная версия зеленого кластера */}
          <div className="slider slider-green">
            <Container>
              <div className="slider-content">
                <div className="slider-text">
                  <div className="subslider">
                    <h1>River Line</h1>
                    <img src={LogoGreen} alt="Логотип кластера 2" className="slider-logo" />
                  </div>
                  <p>Семь 14-этажных жилых корпусов, расположенных вдоль Матвеевского леса</p>
                </div>
                <Button text="Посмотреть планировки" color="white" onClick={() => openModal('green')} />
              </div>
            </Container>
            <div className="slider-photos">
              <button className="slider__arrow slider__arrow--left" onClick={() => prevSlide(setCurrentGreenSlide, greenClusterData.length)}>
                <GoArrowLeft />
              </button>
              <div className="slider__content">
                <motion.div
                  className="slider__wrapper"
                  initial={{ x: 0 }}
                  animate={{ x: calculateOffset(currentGreenSlide, 1320, 1800) }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  {greenClusterData.map((item, index) => (
                    <div key={index} className="slider__item">
                      <img
                        src={item.image}
                        alt={`Slide ${index + 1}`}
                        className="slider__image"
                        style={{
                          width: '1320px',
                          height: '580px',
                          borderRadius: '5px',
                        }}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
              <button className="slider__arrow slider__arrow--right" onClick={() => nextSlide(setCurrentGreenSlide, greenClusterData.length)}>
                <GoArrowRight />
              </button>
            </div>
          </div>
        </>
      )}

      <Modal {...modalProps} />
    </section>
  );
}

export default Clusters;