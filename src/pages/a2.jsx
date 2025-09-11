import '../App.css'
import data from '../../data.json'
import GraphRond from '../components/graph-rond'
import GraphNote from '../components/graph-note'
import Absence from '../components/absence'

function A2() {

  return (
    <>
      <h1 className='text-center text-3xl p-4 text-black dark:text-white'>Année 2</h1>
      
      <div className='min-w-screen flex flex-col md:flex-row items-center justify-center flex-wrap gap-8 lg:gap-16 md:my-10 lg:my-20'>
        <div>
          <h2 className='text-xl text-center text-black dark:text-white'>Répartition des étudiants par genre :</h2>
          <GraphRond data={data.A2.genre}/>
        </div>
        <div>
          <h2 className='text-xl text-center text-black dark:text-white'>Répartition des étudiants par age :</h2>
          <GraphRond data={data.A2.age}/>
        </div>
        <div>
          <h2 className='text-xl text-center text-black dark:text-white'>Répartition des étudiants par spécialité :</h2>
          <GraphRond data={data.A2.spe}/>
        </div>
        <div>
          <h2 className='text-xl text-center text-black dark:text-white'>Répartition des étudiants par status :</h2>
          <GraphRond data={data.A2.status}/>
        </div>
      </div>

      <div className='flex m-auto w-[80vw] h-[600px] md:h-[500px]'>
        <GraphNote data={data.A2.note}/>
      </div>

      <div className='flex flex-col gap-10 m-5'>
        <div className='flex flex-col md:flex-row items-center md:items-start justify-center mx-auto gap-10'>
          <Absence nombre={data.absence.absentsA2.length} liste={data.absence.absentsA2} type="absent aujourd'hui" />
          <Absence nombre={data.absence.retardsA2.length} liste={data.absence.retardsA2} type="en retard aujourd'hui" />
        </div>
        <div className='flex flex-col md:flex-row items-center md:items-start justify-center mx-auto gap-10'>
          <Absence nombre={data.absence.absentsA2.length} liste={data.absence.absentsA2} type="absent ce semestre" />
          <Absence nombre={data.absence.retardsA2.length} liste={data.absence.retardsA2} type="en retard ce semestre" />
        </div>
      </div>
    </>
  )
}

export default A2;
