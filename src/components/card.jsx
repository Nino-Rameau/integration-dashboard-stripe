
const Card = ({Icon, texte}) => {

  return (
    <div className="bg-blue-100 w-[80%] md:w-80 md:h-32 rounded-2xl p-4 flex items-center justify-center m-5">
      <Icon className="text-4xl mr-3"/>
      <p className="text-xl">{texte}</p>
    </div>
  );
};

export default Card;