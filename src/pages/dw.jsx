import '../App.css'
import Grille from '../components/grid'


function App() {

  return (
    <>
    <h1 className='text-center text-3xl p-4'>Dashboard de la spécialité Développement web</h1>

    <div className='flex flex-col items-center mt-20'>
      <h2>Note des étudiants :</h2>
    <Grille/>
    </div>

    </>
  )
}

export default App
