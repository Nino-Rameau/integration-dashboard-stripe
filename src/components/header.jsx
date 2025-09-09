import { Link } from "react-router-dom";
import { bubble as Menu } from 'react-burger-menu';
import { useState } from "react";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
import Darkmod from "./darkmod";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = Darkmod(); 

  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '20px',
      top: '20px'
    },
    bmBurgerBars: { 
      background: '#000' 
    },
    bmBurgerBarsHover: { 
      background: '#a90000' 
    },
    bmCrossButton: { 
      height: '24px', 
      width: '24px' 
    },
    bmCross: { 
      background: '#000' 
    },
    bmMenuWrap: { 
      position: 'fixed', 
      height: '100%',
      marginTop: '30px'
    },
    bmMenu: { 
      background: '#8dc6ff', 
      padding: '2.5em 1.5em', 
      fontSize: '1.15em' 
    },
    bmMorphShape: { 
      fill: '#8dc6ff' 
    },
    bmItemList: { 
      color: '#fff', 
      padding: '0.8em' 
    },
    bmItem: { 
      display: 'block', 
      marginBottom: '10px' 
    },
    bmOverlay: { 
      background: 'rgba(0, 0, 0, 0.0)' 
    }
  };



return ( 
  <header className="flex flex-row items-center justify-around text-black bg-blue-100 dark:bg-blue-800 sticky top-0 z-20" > 
    <Link to="/"> 
      <img src="/img/logo.svg" className="w-16" /> 
    </Link> 
    
    {/* DESKTOP */}
    <nav className="hidden md:flex space-x-4">
      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/dw">Développement Web</Link> 
      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/cg">Communication Graphique</Link> 
      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/cd">Communication Digital</Link> 
      <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/md">Marketing Digital</Link> 

       <button title="Mode clair / sombre" onClick={() => setDarkMode(!darkMode)} className="ml-4" >
        {darkMode ? (
          <FaRegMoon className="text-white w-8 h-auto"/>
        ) : (
          <FiSun className="w-8 h-auto"/>
        )}
      </button>
    </nav>


    {/* MOBILE */}
    <div className="md:hidden">
      <Menu right styles={styles} isOpen={isOpen} onStateChange={({ isOpen }) => setIsOpen(isOpen)}>
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/dw">Développement Web</Link> 
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/cg">Communication Graphique</Link> 
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/cd">Communication Digital</Link> 
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" to="/md">Marketing Digital</Link> 
      </Menu>
      <button title="Mode clair / sombre" onClick={() => setDarkMode(!darkMode)} className="ml-4" >
        {darkMode ? (
          <FaRegMoon className="text-white w-8 h-auto"/>
        ) : (
          <FiSun className="w-8 h-auto"/>
        )}
      </button>
    </div>
  </header> 
  ); 
}; 
  
export default Header;
