import '../App.css'
import GraphRond from '../components/graph-rond'
import GraphNote from '../components/graph-note'
import Card from '../components/card'
import Calendrier from '../components/calendrier'

function App() {

  return (
    <>
      <h1 className='text-center text-4xl p-4 text-black dark:text-white'>Dashboard de la NWS</h1>

      <div className='flex flex-col md:flex-row md:flex-wrap justify-center items-center'>
        <Card texte="157 étudiants au total"/>
        <Card texte="4 spécialité"/>
        <Card texte="3 mastère"/>
        <Card texte="2 campus"/>
      </div>

      <div className='min-w-screen grid md:grid-cols-2 md:h-[400px] items-center my-10'>
        <div className='flex flex-col items-center'>
          <h2 className='text-2xl text-center text-black dark:text-white'>Répartition des étudiants par années :</h2>
          <GraphRond/>
        </div>

        <div className='flex flex-col items-center'>
          <h2 className='text-2xl text-center text-black dark:text-white'>Moyenne des notes des étudiants par années :</h2>
          <GraphNote/>
        </div>    
      </div>

      <div className='mx-10 md:mx-100'>
      <h2 className='text-2xl text-center text-black dark:text-white'>Emploi du temps</h2>
        <Calendrier/>
      </div>
    </>
  )
}

export default App