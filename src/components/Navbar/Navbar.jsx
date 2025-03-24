import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from '@/assets/landing/Logo.svg';
import '../Navbar/Navbar.scss';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isMobile = window.innerWidth <= 768;

  const desktopVariants = {
    initial: { opacity: 0, width: 0 },
    animate: { opacity: 1, width: 'auto' },
    exit: { opacity: 0, width: 0 },
  };

  const mobileVariants = {
    initial: { opacity: 0, x: '100%' },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: '100%' },
  };

  const variants = isMobile ? mobileVariants : desktopVariants;

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={Logo} alt="navbarlogo" className="logo" />
        </Link>
        <p>Официальный партнер <br /> АО «КККК»</p>
      </div>
      <div className="navbar-menu-container">
        <button className="navbar-menu-btn" onClick={toggleMenu}>
          M E N U
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="navbar-menu"
              initial={variants.initial}
              animate={variants.animate}
              exit={variants.exit}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <ul>
                <li><Link to="/" onClick={toggleMenu}>Главная</Link></li>
                <li><Link to="/about" onClick={toggleMenu}>О комплексе</Link></li>
                <li><Link to="/plans" onClick={toggleMenu}>Планировки</Link></li>
                <li><Link to="/buklet" onClick={toggleMenu}>Отделки</Link></li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="navbar-phone">
        <a href="tel:+7 495 845 19 34">+7 495 845 19 34</a>
        <hr />
        <p>· работаем</p>
      </div>
    </nav>
  );
}

export default Navbar;