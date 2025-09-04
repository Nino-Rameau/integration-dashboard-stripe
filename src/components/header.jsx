import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className="flex flex-row items-center justify-around text-black bg-blue-100" >

      <Link to="/">
      <img src="img/logo.svg"  className="w-16" />
      </Link>

        {/* <img src="img/logo.svg" alt="Logo" className="w-20"/> */}
      
      <div className="flex flex-row text-center gap-5">
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/dw">Développement Web</Link>
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/cg">Communication Graphique</Link>
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/cd">Communication Digital</Link>
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/md">Marketing Digital</Link>
      </div>
    </header>
  );
};

export default Header;