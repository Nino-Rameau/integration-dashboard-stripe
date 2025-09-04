import '../App.css'
import Graph1 from '../components/graph-rond1'
import Graph3 from '../components/graph-note1'
import Card from '../components/card'

function App() {

  return (
    <>
    <h1 className='text-center text-3xl p-4'>Dashboard de la NWS</h1>

    <div className='flex flex-row flex-wrap m-4'>
      <Card texte="157 étudiants au total"/>
      <Card texte="4 spécialité"/>
      <Card texte="3 mastère"/>
      <Card texte="2 campus"/>
    </div>

    <div className='min-w-screen grid grid-cols-2'>
      <div className='flex flex-col items-center'>
        <h2>Répartition des étudiants par années :</h2>
        <Graph1 className='h-20'/>
      </div>

      <div className='flex flex-col items-center'>
        <h2>Moyenne des notes des étudiants par années :</h2>
        <Graph3/>
      </div>    
    </div>
    </>
  )
}

export default App
