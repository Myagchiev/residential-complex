import { useState } from 'react';
import { IMaskInput } from 'react-imask';
import Button from '../Button/Button';
import './Modal.scss';

function Modal({
  isOpen,
  onClose,
  title = 'дефолт заголовок',
  text = 'дефолт текст',
  backgroundImage = 'дефолт путь',
  backgroundColor = '#FFFFFF',
  foregroundImage = 'дефолт путь',
  showImages = true,
  logo = null,
  titleColor = '#1a1a1a',
  textColor = '#646562',
  inputBackground = '#F5F3F0',
  errorColor = '#ff0000',
  onSubmit = () => {},
  buttonText = 'дефолт баттон',
  modalWidth = showImages ? 774 : 520,
  modalHeight = showImages ? 480 : 410,
  // Новые пропсы
  rightPadding = showImages ? '30px' : '40px',
  rightBackgroundColor = '#fff',
  rightAlign = 'start', // 'start', 'center', 'end'
  rightTextAlign = 'left', // 'left', 'center', 'right'
  formGap = '10px',
  hrColor = '$color-line-primary', // Оставляем возможность переопределить цвет
  hrWidth = '100%',
}) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleButtonClick = () => {
    const cleanedNumber = phoneNumber.replace(/[^0-9+]/g, '');
    if (cleanedNumber.length === 12) {
      onSubmit(cleanedNumber);
      setError('');
    } else {
      setError('Введите полный номер телефона');
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal" style={{ width: modalWidth, height: modalHeight }}>
        {showImages && (
          <div className="modal-left" style={{ backgroundColor }}>
            <div className="modal-background" style={{ backgroundImage: `url(${backgroundImage})` }} />
            <img src={foregroundImage} alt="Foreground" className="modal-foreground" />
          </div>
        )}
        <div
          className="modal-right"
          style={{
            width: showImages ? '54.7%' : '100%',
            padding: rightPadding,
            backgroundColor: rightBackgroundColor,
            justifyContent: rightAlign === 'center' ? 'center' : rightAlign === 'end' ? 'flex-end' : 'flex-start',
            textAlign: rightTextAlign, 
          }}
        >
          {logo && <img src={logo} alt="Logo" className="modal-logo" />}
          <h6 style={{ color: titleColor, fontSize: showImages ? '28px' : '24px' }}>{title}</h6>
          <p style={{ color: textColor, fontSize: showImages ? '20px' : '18px' }}>{text}</p>
          <hr style={{ backgroundColor: hrColor, width: hrWidth }} /> 
          <div className="modal-form" style={{ gap: formGap }}> 
            <div style={{ position: 'relative' }}>
              <IMaskInput
                mask="+7 000-000-00-00"
                unmask={false}
                placeholder="+7 ___-___-__-__"
                type="tel"
                value={phoneNumber}
                onAccept={(value) => setPhoneNumber(value)}
                style={{ backgroundColor: inputBackground}}
                className="modal-input"
              />
              {error && (
                <p className="error" style={{ color: errorColor }}>
                  {error}
                </p>
              )}
            </div>
            <Button text={buttonText} color="brown" onClick={handleButtonClick} />
            <p className="policytext" style={{ color: textColor, fontSize: showImages ? '14px' : '14px' }}>
              Нажимая на кнопку, вы даёте согласие на обработку <br />персональных данных и соглашаетесь <br />c{' '}
              <span className="policy">политикой конфиденциальности</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;