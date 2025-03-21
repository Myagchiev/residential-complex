import './PhotoCard.scss';
import { GoArrowRight } from 'react-icons/go';

function PhotoCard({
  image,
  title,
  description,
  variant = 'default', // 'default' (Parent), 'side-image', 'stacked'
  buttonText,
  onButtonClick,
  linkText, // Для подчёркнутого текста со стрелкой
  onLinkClick,
}) {
  return (
    <div className={`photo-card photo-card--${variant}`}>
      {variant === 'side-image' ? (
        <>
          <div className="photo-card__text-side">
            <h3 className="photo-card__title">{title}</h3>
            <p className="photo-card__description">{description}</p>
            {linkText && (
              <span className="photo-card__link" onClick={onLinkClick}>
                {linkText} <GoArrowRight />
              </span>
            )}
          </div>
          <img src={image} alt={title} className="photo-card__image" />
        </>
      ) : (
        <>
          <img src={image} alt={title} className="photo-card__image" />
          <div className="photo-card__content">
            <h3 className="photo-card__title">{title}</h3>
            <p className="photo-card__description">{description}</p>
            {variant === 'default' && buttonText && (
              <button className="photo-card__button" onClick={onButtonClick}>
                {buttonText}
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default PhotoCard;