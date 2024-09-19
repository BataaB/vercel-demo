const Button = ({ text, handleClick, highlight }) => {
  return (
    <button
      className={`px-6 py-1 ${
        highlight ? "bg-green-400" : "bg-gray-200"
      } rounded-lg hover:bg-gray-300`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
