import { useState, useEffect } from 'react';
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
  rightPadding = showImages ? '30px' : '40px',
  rightBackgroundColor = '#fff',
  rightAlign = 'start',
  rightTextAlign = 'left',
  formGap = '10px',
  hrColor = '#E0E0E0',
  hrWidth = '100%',
  mobilePadding = '20px',
  mobileWidth = '100%',
  mobileHeight = 'auto',
  mobileTitleFontSize = '20px',
  mobileTextFontSize = '16px',
  mobilePolicyFontSize = '12px',
  mobileInputFontSize = '14px',
}) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      <div
        className="modal"
        style={{
          width: isMobile ? mobileWidth : modalWidth,
          height: isMobile ? mobileHeight : modalHeight,
        }}
      >
        {showImages && !isMobile && (
          <div className="modal-left" style={{ backgroundColor }}>
            <div className="modal-background" style={{ backgroundImage: `url(${backgroundImage})` }} />
            <img src={foregroundImage} alt="Foreground" className="modal-foreground" loading="lazy" />
          </div>
        )}
        <div
          className="modal-right"
          style={{
            width: isMobile ? '100%' : (showImages ? '54.7%' : '100%'),
            padding: isMobile ? mobilePadding : rightPadding,
            backgroundColor: rightBackgroundColor,
            justifyContent: isMobile ? 'center' : (rightAlign === 'center' ? 'center' : rightAlign === 'end' ? 'flex-end' : 'flex-start'),
            textAlign: isMobile ? 'center' : rightTextAlign,
          }}
        >
          {logo && <img src={logo} alt="Logo" className="modal-logo" loading="lazy" />}
          <h6 style={{ 
            color: titleColor, 
            fontSize: isMobile ? mobileTitleFontSize : (showImages ? '28px' : '28px'),
            margin: isMobile ? '10px 0' : '0 0 15px 0'
          }}>
            {title}
          </h6>
          <p style={{ 
            color: textColor, 
            fontSize: isMobile ? mobileTextFontSize : (showImages ? '20px' : '20px'),
            margin: isMobile ? '0 0 15px 0' : '0 0 20px 0'
          }}>
            {text}
          </p>
          <hr style={{ 
            backgroundColor: hrColor, 
            width: hrWidth,
            margin: isMobile ? '0 0 15px 0' : '0 0 30px 0'
          }} />
          <div className="modal-form" style={{ gap: formGap }}>
            <div style={{ position: 'relative' }}>
              <IMaskInput
                mask="+7 000-000-00-00"
                unmask={false}
                placeholder="+7 ___-___-__-__"
                type="tel"
                value={phoneNumber}
                onAccept={(value) => setPhoneNumber(value)}
                style={{ 
                  backgroundColor: inputBackground,
                  fontSize: isMobile ? mobileInputFontSize : '16px'
                }}
                className="modal-input"
              />
              {error && (
                <p className="error" style={{ color: errorColor }}>
                  {error}
                </p>
              )}
            </div>
            <Button text={buttonText} color="brown" onClick={handleButtonClick} />
            <p className="policytext" style={{ 
              color: textColor, 
              fontSize: isMobile ? mobilePolicyFontSize : '14px',
              margin: isMobile ? '10px 0 0 0' : '15px 0 0 0'
            }}>
              Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь <br /> c{' '}
              <span className="policy">политикой конфиденциальности</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;