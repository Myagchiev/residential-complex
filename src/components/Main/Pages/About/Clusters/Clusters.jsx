import './Clusters.scss';
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

const MobileSlider = ({ 
  clusterData, 
  currentSlide, 
  setCurrentSlide, 
  logo, 
  title, 
  description,
  onOpenModal 
}) => {
  const [direction, setDirection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === clusterData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? clusterData.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="mobile-slider">
      <div className="mobile-slider__header">
        <h1>{title}</h1>
        <img src={logo} alt={`Логотип ${title}`} className="mobile-slider__logo" />
      </div>
      <p className="mobile-slider__description">{description}</p>
      
      <div className="mobile-slider__content">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(e, { offset, velocity }) => {
              setIsDragging(false);
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                nextSlide();
              } else if (swipe > swipeConfidenceThreshold) {
                prevSlide();
              }
            }}
            className="mobile-slider__slide"
          >
            <img 
              src={clusterData[currentSlide].image} 
              alt={clusterData[currentSlide].title || `Slide ${currentSlide + 1}`}
              className="mobile-slider__image"
              draggable="false"
            />
            {clusterData[currentSlide].title && (
              <p className="mobile-slider__title">{clusterData[currentSlide].title}</p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="mobile-slider__controls">
        <button 
          className="mobile-slider__arrow" 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <GoArrowLeft />
        </button>
        <div className="mobile-slider__dots">
          {clusterData.map((_, index) => (
            <button
              key={index}
              className={`mobile-slider__dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button 
          className="mobile-slider__arrow" 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <GoArrowRight />
        </button>
      </div>
      
      <Button 
        text="Посмотреть планировки" 
        color="white" 
        onClick={onOpenModal}
        className="mobile-slider__button"
      />
    </div>
  );
};

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

  const nextSlideBlue = () => {
    setCurrentBlueSlide((prev) => (prev === blueClusterData.length - 1 ? 0 : prev + 1));
  };

  const prevSlideBlue = () => {
    setCurrentBlueSlide((prev) => (prev === 0 ? blueClusterData.length - 1 : prev - 1));
  };

  const nextSlideGreen = () => {
    setCurrentGreenSlide((prev) => (prev === greenClusterData.length - 1 ? 0 : prev + 1));
  };

  const prevSlideGreen = () => {
    setCurrentGreenSlide((prev) => (prev === 0 ? greenClusterData.length - 1 : prev - 1));
  };

  const calculateOffset = (currentSlide, slideWidth, containerWidth) => {
    const slideFullWidth = slideWidth;
    const centerOffset = (containerWidth - slideWidth) / 2;
    return -(currentSlide * slideFullWidth) + centerOffset;
  };

  const handleSubmit = (phone) => {
    console.log(`Submitted phone from ${activeCluster} cluster:`, phone);
    setIsModalOpen(false);
    setActiveCluster(null);
  };

  const openModal = (cluster) => {
    setActiveCluster(cluster);
    setIsModalOpen(true);
  };

  const modalProps = {
    isOpen: isModalOpen,
    onClose: () => {
      setIsModalOpen(false);
      setActiveCluster(null);
    },
    title: 'Получите подробное описание и цены на свободные планировки в кластере River Line',
    text: 'PDF, можно скачать прямо сейчас',
    backgroundImage: Line,
    backgroundColor: activeCluster === 'blue' ? '#1f2057ff' : '#a0a747ff',
    foregroundImage: activeCluster === 'blue' ? BlueBook : GreenBook,
    showImages: true,
    onSubmit: handleSubmit,
    buttonText: 'Получить планировки',
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
              clusterData={blueClusterData}
              currentSlide={currentBlueSlide}
              setCurrentSlide={setCurrentBlueSlide}
              logo={LogoBlue}
              title="River Line"
              description="Восемь жилых корпусов по 12-14 этажей выстроены вдоль реки Раменки"
              onOpenModal={() => openModal('blue')}
            />
          </div>
          
          <div className="mobile-cluster mobile-cluster--green">
            <MobileSlider
              clusterData={greenClusterData}
              currentSlide={currentGreenSlide}
              setCurrentSlide={setCurrentGreenSlide}
              logo={LogoGreen}
              title="River Line"
              description="Семь 14-этажных жилых корпусов, расположенных вдоль Матвеевского леса"
              onOpenModal={() => openModal('green')}
            />
          </div>
        </>
      ) : (
        <>
          <div className="slider slider-blue">
            <Container>
              <div className="slider-content">
                <div className="slider-text">
                  <div className="subslider">
                    <h1>River Line</h1>
                    <img src={LogoBlue} alt="Логотип кластера 1" className="slider-logo" />
                  </div>
                  <p>Восемь жилых корпусов по 12-14 этажей выстроены вдоль реки Раменки</p>
                </div>
                <Button text="Посмотреть планировки" color="white" onClick={() => openModal('blue')} />
              </div>
            </Container>
            <div className="slider-photos">
              <button className="slider__arrow slider__arrow--left" onClick={prevSlideBlue}>
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
              <button className="slider__arrow slider__arrow--right" onClick={nextSlideBlue}>
                <GoArrowRight />
              </button>
            </div>
          </div>

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
              <button className="slider__arrow slider__arrow--left" onClick={prevSlideGreen}>
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
              <button className="slider__arrow slider__arrow--right" onClick={nextSlideGreen}>
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