import './Button.scss';

function Button({ text, color = 'white', onClick }) {
  return (
    <button className={`custom-button ${color}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;