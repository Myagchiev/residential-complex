import './Location.scss';
import Map from '@/assets/location/Map.png';
import P360 from '@/assets/location/P360.svg';
import Container from '../../../Container/Container';

function Location() {
  return (
    <Container>
      <section className="location">
      <div className="string">
        <hr />
        <p>престижное расположение</p>
      </div>
      <h2>Один из самых зелёных <br /> районов столицы — Раменки <hr /></h2>
      <img src={Map} alt="карта" />
      <div className="garden">
        <p>ЖК West Garden окружен Матвеевским лесом, набережной реки Раменки и природным заказником «Долина реки Сетунь»</p>
        <div className="panorama">
          <img src={P360} alt="360" />
          <p>Панорама района 360˚</p>
        </div>
      </div>
    </section>
    </Container>
  );
}

export default Location;