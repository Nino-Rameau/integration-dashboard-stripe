import '../App.css'
import Grille from '../components/tableau'

function App() {

  return (
    <>
    <h1 className='text-center text-3xl p-4 text-black dark:text-white'>Dashboard de la spécialité Communication graphique</h1>

    <div className='flex flex-col items-center mt-20'>
      <h2 className='text-black dark:text-white text-xl'>Note des étudiants :</h2>
    <Grille/>
    </div>
    </>
  )
}

export default App
