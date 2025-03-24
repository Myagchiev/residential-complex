import Container from '../Main/Container/Container';
import './Footer.scss';
import FooterLogo from '@/assets/landing/footerLogo.svg';
import Logo2 from '@/assets/landing/logo2.svg';
import logo3 from '@/assets/landing/experts.svg';

function Footer() {
  return (
    <section className="footer">
      <Container>
        <div className="garden">
          <h3>
            Жилой комплекс «West Garden» — <br />все преимущества жизни на природе
          </h3>
          <img className='logo2' src={Logo2} alt="logo2" loading="lazy" />
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="office">
            <div className="office-logos">
              <img src={FooterLogo} alt="logo" loading="lazy" />
              <p>|</p>
              <img src={logo3} alt="logo3" loading="lazy" />
            </div>
            <hr />
            <div className="office-address">
              <p>Офис продаж</p>
              <p>
                Москва, Локал наб. 2/4, <br /> строение 17, офис 308
              </p>
            </div>
            <hr />
            <div className="office-phone">
              <p>Телефон</p>
              <div>
                <p>+7 495 805 19 34 </p>
                <span>· работаем</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Footer;