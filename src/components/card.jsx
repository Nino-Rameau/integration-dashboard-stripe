
const Card = ({texte}) => {

  return (
    <div className="bg-blue-100 w-80 h-32 rounded-2xl p-4 flex items-center justify-center mx-auto mb-10">
      <p className="text-xl">{texte}</p>
    </div>
  );
};

export default Card;