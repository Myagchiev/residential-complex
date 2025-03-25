import './Button.scss';

function Button({ text, color = 'white', onClick, fullWidth = false }) {
  return (
    <button 
      className={`custom-button ${color} ${fullWidth ? 'full-width' : ''}`} 
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;