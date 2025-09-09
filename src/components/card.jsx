
const Card = ({texte}) => {

  return (
    <div className="bg-blue-100 w-80 h-32 rounded-2xl p-4 flex items-center justify-center mx-2 mb-2 md:mb-10">
      <p className="text-xl">{texte}</p>
    </div>
  );
};

export default Card;