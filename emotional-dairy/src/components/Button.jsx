import "./Button.css";

const Button = ({ text, type, onClick }) => {
  return (
    <button onClick={onclick} className={`Button Button_${type}`}>
      {text}
    </button>
  );
};

export default Button;
