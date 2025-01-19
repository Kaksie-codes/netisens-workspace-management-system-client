const PrimaryBtn = ({ styles, text, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`text-lg font-bold w-full md:w-[280px] xl:w-[300px] flex items-center justify-center px-4 whitespace-nowrap rounded-[20px] p-[10px] gap-[10px] ${styles}`}
    >
      {text}
      {icon && <span className="icon-container">{icon}</span>}
    </button>
  );
};

export default PrimaryBtn;
