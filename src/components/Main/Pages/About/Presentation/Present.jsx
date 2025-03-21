import './Present.scss';
import Alena from '@/assets/presentation/Alena.png';
import Button from '../../../Button/Button';
import Container from '../../../Container/Container';
import Arrow from '@/assets/presentation/arrow.svg';
import { IMaskInput } from 'react-imask';
import { useState } from 'react';
import Modal from '../../../Modals/Modal';


function Presentation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleButtonClick = () => {
    const cleanedNumber = phoneNumber.replace(/[^0-9+]/g, '');
    if (cleanedNumber.length === 12) {
      setIsModalOpen(true);
      setError('');
    } else {
      setError('Пожалуйста, введите полный номер телефона (10 цифр после +7)');
    }
  };

  // Функция для обработки отправки номера телефона
  const handleSubmit = (phone) => {
    console.log('Submitted phone from blue cluster:', phone);
    setIsModalOpen(false); // Закрываем модалку после отправки
  };

  return (
    <Container>
      <section className="presentation">
        <div className="left">
          <p>СПЕЦИАЛЬНО ДЛЯ ВАС</p>
          <h1>Персональная презентация West Garden</h1>
          <p><img src={Arrow} alt="стрелка" /> Подробно расскажем про жилой комплекс</p>
          <p><img src={Arrow} alt="стрелка" /> Ознакомитесь со всеми планировками и ценами</p>
          <p><img src={Arrow} alt="стрелка" /> Прогуляетесь по благоустроенной набережной</p>
          <div className="phone">
            <hr className='long'/>
            <p>Закрепить за номером</p>
            <div>
              <IMaskInput
                mask="+7 000-000-00-00"
                unmask={false}
                placeholder="+7 ___-___-__-__"
                type="tel"
                value={phoneNumber}
                onAccept={(value) => setPhoneNumber(value)}
              />
              <Button text="Записаться на презентацию" color="brown" onClick={handleButtonClick} />
              {error && <p className="error">{error}</p>}
            </div>
            <p>
              Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь<br /> c <span className="policy">политикой конфиденциальности</span>
            </p>
          </div>
        </div>
        <div className="right">
          <img src={Alena} alt="фото" />
          <div className="person">
            <h6>Алёна Кирющенко</h6>
            <p>ведущий эксперт по недвижимости в ESTES</p>
          </div>
        </div>

        {/* Модальное окно */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Мы свяжемся с вами по указанному номеру."
          text="Благодарим за заявку!"
          showImages={false}
          inputBackground="#F5F3F0"
          rightPadding="20px 40px"
          rightBackgroundColor="#fff"
          rightAlign="center"
          rightTextAlign="center"
          formGap="5px"
          hrColor={'$color-line-dark'}
          hrWidth="100%"
          onSubmit={handleSubmit}
          buttonText="Закрыть"
        />
      </section>
    </Container>
  );
}

export default Presentation;