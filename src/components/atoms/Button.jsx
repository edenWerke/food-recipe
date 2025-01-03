/* eslint-disable react/prop-types */
const Button = ({ label, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 text-lg font-semibold transition-all duration-300 rounded-full shadow-lg hover:bg-gray-800 hover:scale-105 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
