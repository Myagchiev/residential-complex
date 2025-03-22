import './Payment.scss';
import Container from '../../../Container/Container';
import Button from '../../../Button/Button';
import Modal from '../../../Modals/Modal';
import sber from '@/assets/test/sber.png';
import percent from '@/assets/test/percent.png';
import { useState } from 'react';
import MiddleLine from '@/assets/lines/middleline.svg';
import Miniline from '@/assets/lines/miniline.svg';

function Payment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  const handleSubmit = (phone) => {
    console.log(`Submitted phone for ${modalType}:`, phone);
    closeModal();
  };

  return (
    <Container>
      <section className="payment">
        <div className="left">
          <h2>от 4,29% годовых
            <img className='middleline' src={MiddleLine} alt="line" />
          </h2>
          <p>
            Наш ипотечный брокер подберет для вас лучшие <br /> условия от 20 банков; Господдержка на протяжении <br />всего срока ипотеки.
          </p>
          <Button
            text="Рассчитать ипотеку"
            color="brown"
            onClick={() => openModal('ипотека')}
          />
        </div>
        <div className="right">
          <img src={sber} alt="icon" />
          <h3>
            Покупка защищена<br /> экскроу-счетом <br />от Сбербанка
          </h3>
          <p>
            Это означает, что мы <br />получим деньги только <br />после подписания акта <br />приема-передачи.
          </p>
        </div>
        <div className="down">
          <div className='downdiv'>
            <h2>30%</h2>
            <h4>
              первоначальный <br />взнос
            </h4>
          </div>
          <p>
            Беспроцентная рассрочка<br /> на 12 месяцев при первоначальном взносе
            <img className='miniline' src={Miniline} alt="line" />
          </p>
          <Button
            text="Узнать условия рассрочки"
            color="brown"
            onClick={() => openModal('рассрочка')}
          />
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={modalType === 'ипотека' ? 'Получите расчет ипотеки от нашего ипотечного брокера прямо сейчас' : 'Узнайте все условия беспроцентной рассрочки от застройщика прямо сейчас'}
          text={''}
          showImages={false} // Без изображений для обеих модалок
          logo={modalType === 'рассрочка' ? percent : null} // Логотип только для рассрочки
          rightPadding="20px 40px"
          rightBackgroundColor="#fff"
          rightAlign="center"
          rightTextAlign="center"
          formGap="5px"
          hrColor="$color-line-dark"
          hrWidth="100%"
          onSubmit={handleSubmit}
          buttonText="Получить расчет"
        />
      </section>
    </Container>
  );
}

export default Payment;