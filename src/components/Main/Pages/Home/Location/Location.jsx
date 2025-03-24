import './Location.scss';
import Map from '@/assets/location/Map.png';
import P360 from '@/assets/location/P360.svg';
import Container from '../../../Container/Container';
import Button from '../../../Button/Button';
import littleLine from '@/assets/lines/littleline.svg';
import panorama from '@/assets/location/panorama.png';
import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';

function Location() {
  const [isImageVisible, setIsImageVisible] = useState(false);

  return (
    <Container>
      <section className="location">
        <div className="string">
          <hr />
          <p>престижное расположение</p>
        </div>
        <h1>
          Один из самых зелёных <br /> районов столицы — Раменки{' '}
          <img src={littleLine} alt="line" className="littleline" loading="lazy" />
        </h1>
        <img src={Map} alt="карта" loading="lazy" />
        <div className="garden">
          <p>
            ЖК West Garden окружен Матвеевским лесом, набережной реки Раменки и природным заказником «Долина реки Сетунь»
          </p>
          <Button
            text={
              <>
                <img src={P360} alt="360" loading="lazy" /> Панорама района 360˚
              </>
            }
            color="white"
            className="custom-button"
            onClick={() => setIsImageVisible(true)}
          />
        </div>
      </section>

      {isImageVisible && (
        <div className="image-overlay" onClick={() => setIsImageVisible(false)}>
          <div className="image-container" onClick={(e) => e.stopPropagation()}>
            <img src={panorama} alt="Panorama" loading="lazy" />
            <IoCloseOutline
              className="close-icon"
              onClick={() => setIsImageVisible(false)}
            />
          </div>
        </div>
      )}
    </Container>
  );
}

export default Location;