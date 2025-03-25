import './Apartments.scss';
import PhotoCard from '../../../PhotoCard/PhotoCard';
import Container from '../../../Container/Container';
import Modal from '../../../Modals/Modal';
import Apart from '@/assets/apartments/apart.png';
import Apart1 from '@/assets/apartments/apart1.png';
import Apart2 from '@/assets/apartments/apart2.png';
import Apart3 from '@/assets/apartments/apart3.png';
import MiddleLine from '@/assets/lines/middleline.svg';
import Miniline from '@/assets/lines/miniline.svg';
import { useState } from 'react';

function Apartments() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  const handleSubmit = (phone) => {
    console.log(`Submitted phone for ${selectedCard?.title}:`, phone);
    closeModal();
  };

  return (
    <Container>
      <section className="apartments">
        <h1>Более 100 свободных квартир <br /> редких форматов <img className='middleline' src={MiddleLine} alt="line" /></h1>
        <PhotoCard
          image={Apart}
          title={
            <>
              Свободная планировка, возможность объединить квартиры до 500 м²
              <img className='miniline' src={Miniline} alt="line" />
            </>
          }
          description={
            <>
              Не ограничивайте себя при создании <br /> жилого пространства Вашей мечты, <br />
              воспользуйтесь возможностью увеличения <br /> площади до комфортного Вам размера
            </>
          }
          variant="side-image"
          linkText="Узнать стоимость"
          onLinkClick={() => openModal({ title: 'Свободной планировки до 500 м²' })}
        />
        <PhotoCard
          image={Apart1}
          title={
            <>Настоящий <br /> дровяной камин</>
          }
          description={
            <>
              В пентхаусах предусмотрен дымоход <br /> с возможностью установки камина, чтобы <br />Вы получали наслаждение от живого тепла <br /> в холодное время года
            </>
          }
          variant="side-image"
          linkText="Узнать стоимость"
          onLinkClick={() => openModal({ title: 'Настоящего дровяного камина' })}
        />
        <PhotoCard
          image={Apart2}
          title={
            <>
              Собственная <br />терраса до 17 м²
            </>
          }
          description={
            <>
              Современная терраса  <br />с необыкновенными видами  <br />на благоустроенную набережную, 
              МГУ им. <br /> М.В. Ломоносова и Воробьевы горы
            </>
          }
          variant="side-image"
          linkText="Узнать стоимость"
          onLinkClick={() => openModal({ title: 'Собственной террасы до 17 м²' })}
        />
        <PhotoCard
          image={Apart3}
          title={
            <> Увеличенная<br /> высота потолка</>
          }
          description={
            <>
              Почувствуйте простор помещений в <br />полной мере  с увеличенной высотой<br /> потолка 4,2 м
            </>
          }
          variant="side-image"
          linkText="Узнать стоимость"
          onLinkClick={() => openModal({ title: 'Увеличенная высота потолка' })}
        />

        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={`Узнайте стоимость: ${selectedCard?.title || ''}`}
          text="Оставьте номер телефона, чтобы получить подробную информацию о стоимости"
          showImages={false}
          rightPadding="20px 30px"
          rightBackgroundColor="#fff"
          rightAlign="center"
          rightTextAlign="center"
          formGap="5px"
          hrColor="$color-line-dark"
          hrWidth="100%"
          onSubmit={handleSubmit}
          buttonText="Отправить"
        />
      </section>
    </Container>
  );
}

export default Apartments;