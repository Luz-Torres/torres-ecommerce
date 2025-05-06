const Button = ({ children, type = "button", onClick,className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 font-bold  bg-yellow-400 hover:bg-yellow-500 text-stone-950 rounded-lg transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;