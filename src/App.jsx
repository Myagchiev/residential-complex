import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Main/Pages/Home/Home';
import About from './components/Main/Pages/About/About';
import Plans from './components/Main/Pages/Plans/Plans';
import Buklet from './components/Main/Pages/Buklet/Buklet';
import Footer from './components/Footer/Footer';
import './styles/index.scss';
import './styles/App.scss';

function App() {
  return (
    <>
      <Navbar />
      <div className="navbar-placeholder"></div> {/* Добавляем отступ */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/buklet" element={<Buklet />} />
        <Route path="*" element={<div>404 - Страница не найдена</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;