import './Bank.scss';
import bankLogos from '@/assets/Inteco/logos.png';
import Container from '../../../Container/Container';

function Bank() {
  return (
    <Container>
      <section className="bank">
        <h1>
          Самые выгодные условия<br /> кредитования от 20 банков
        </h1>
        <div className="logos">
          <img src={bankLogos} alt="logos" loading="lazy" />
        </div>
      </section>
    </Container>
  );
}

export default Bank;