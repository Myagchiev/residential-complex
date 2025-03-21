import './Greeting.scss';
import Logo2 from '@/assets/landing/logo2.svg';
import mainLand from '@/assets/landing/main-landing.png';
import award from '@/assets/landing/award.svg';

function Greeting() {
  return (
    <section className="greeting">
      <div>
        <img src={Logo2} alt="landinglogo" className="logotwo" />
        <h1>Жизнь в зеленом оазисе <br /> в статусном районе Москвы</h1>
        <p>Жилой комплекс бизнес-класса в 20 минутах от Кремля</p>
        <hr />
      </div>
      <div className="mainland">
        <img src={mainLand} alt="mainPhoto" />
        <div className="award-div">
          <img src={award} alt="award-icon" />
          <p>Победитель федеральной премии Urban Awards 2019</p>
        </div>
        <div className="when">
          <div><p>1 очередь <span>2022</span></p></div>
          <div><p>2 очередь <span>2023</span></p></div>
        </div>
      </div>
    </section>
  );
}

export default Greeting;