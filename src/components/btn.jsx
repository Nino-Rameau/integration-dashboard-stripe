const Btn = ({ texte, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-center py-2 px-5 min-w-[110px] rounded-xl border
        ${active
          ? "bg-black text-white border-black scale-110"
          : "bg-white text-black border-gray-300 hover:bg-gray-100 hover:scale-110"
        }`}
    >
      {texte}
    </button>
  );
};

export default Btn;
