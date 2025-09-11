import '../App.css'
import data from '../../data.json'
import GraphRond from '../components/graph-rond'
import GraphNote from '../components/graph-note'
import Absence from '../components/absence'

function A5() {

  return (
    <>
      <h1 className='text-center text-3xl p-4 text-black dark:text-white'>Année 5</h1>
      
      <div className='min-w-screen flex flex-col md:flex-row items-center justify-center flex-wrap md:h-[400px] my-10'>
        <div className='flex flex-col items-center'>
          <h2 className='text-xl text-center text-black dark:text-white'>Répartition des étudiants par genre :</h2>
          <GraphRond data={data.A5.genre}/>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='text-xl text-center text-black dark:text-white'>Répartition des étudiants par age :</h2>
          <GraphRond data={data.A5.age}/>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='text-xl text-center text-black dark:text-white'>Répartition des étudiants par spécialité :</h2>
          <GraphRond data={data.A5.spe}/>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='text-xl text-center text-black dark:text-white'>Répartition des étudiants par status :</h2>
          <GraphRond data={data.A5.status}/>
        </div>
      </div>

      <div className='flex m-auto w-[80vw] h-[600px] md:h-[500px]'>
        <GraphNote data={data.A5.note}/>
      </div>

      <div className='flex flex-col gap-10 m-5'>
        <div className='flex flex-col md:flex-row items-center md:items-start justify-center mx-auto gap-10'>
          <Absence nombre={data.absence.absentsA5.length} liste={data.absence.absentsA5} type="absent aujourd'hui" />
          <Absence nombre={data.absence.retardsA5.length} liste={data.absence.retardsA5} type="en retard aujourd'hui" />
        </div>
        <div className='flex flex-col md:flex-row items-center md:items-start justify-center mx-auto gap-10'>
          <Absence nombre={data.absence.absentsA5.length} liste={data.absence.absentsA5} type="absent ce semestre" />
          <Absence nombre={data.absence.retardsA5.length} liste={data.absence.retardsA5} type="en retard ce semestre" />
        </div>
      </div>
    </>
  )
}
export default A5;
