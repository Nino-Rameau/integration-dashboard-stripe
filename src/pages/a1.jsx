import '../App.css'
import data from '../../data.json'
import GraphRond from '../components/graph-rond'
import GraphNote from '../components/graph-note'
import Absence from '../components/absence'

function A1() {

  return (
    <>
      <h1 className='text-center text-3xl p-4 text-black dark:text-white'>Année 1</h1>
      
      <div className='min-w-screen flex flex-col md:flex-row items-center justify-center flex-wrap gap-8 lg:gap-16 md:my-10 lg:my-20'>
        <div>
          <h2 className='text-xl text-center text-black dark:text-white'>Répartition des étudiants par genre :</h2>
          <GraphRond data={data.A1.genre}/>
        </div>
        <div>
          <h2 className='text-xl text-center text-black dark:text-white'>Répartition des étudiants par âge :</h2>
          <GraphRond data={data.A1.age}/>
        </div>
        <div>
          <h2 className='text-xl text-center text-black dark:text-white'>Répartition des étudiants par statut :</h2>
          <GraphRond data={data.A1.status}/>
        </div>
      </div>

      <div className='flex m-auto w-[80vw] h-[600px] md:h-[500px]'>
        <GraphNote data={data.A1.note}/>
      </div>

      <div className='flex flex-col gap-10 m-5'>
        <div className='flex flex-col md:flex-row items-center md:items-start justify-center mx-auto gap-10'>
          <Absence nombre={data.absence.absentsA1.length} liste={data.absence.absentsA1} type="absent aujourd'hui" />
          <Absence nombre={data.absence.retardsA1.length} liste={data.absence.retardsA1} type="en retard aujourd'hui" />
        </div>
        <div className='flex flex-col md:flex-row items-center md:items-start justify-center mx-auto gap-10'>
          <Absence nombre={data.absence.absentsA1.length} liste={data.absence.absentsA1} type="absent ce semestre" />
          <Absence nombre={data.absence.retardsA1.length} liste={data.absence.retardsA1} type="en retard ce semestre" />
        </div>
      </div>
    </>
  )
}

export default A1;
