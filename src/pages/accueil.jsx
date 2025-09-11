import '../App.css'
import GraphRond from '../components/graph-rond'
import Card from '../components/card'
import Calendrier from '../components/calendrier'
import Absence from '../components/absence'
import data from '../../data.json'
import { Link } from "react-router-dom";

import { MdPeopleAlt } from "react-icons/md";
import { LuUniversity } from "react-icons/lu";
import { GiDiploma } from "react-icons/gi";

function App() {

  return (
    <>
      <h1 className='text-center text-4xl p-4 text-black dark:text-white'>Dashboard de la NWS</h1>

      <div className='flex flex-col md:flex-row flex-wrap justify-center items-center gap-10'>
        <Card Icon={MdPeopleAlt} texte="150 étudiants au total"/>
        <Card Icon={GiDiploma} texte="4 spécialités"/>
        <Card Icon={GiDiploma} texte="3 mastères"/>
        <Card Icon={LuUniversity} texte="2 campus"/>
        <Card Icon={LuUniversity} texte="26 intervenants"/>
        <Card Icon={LuUniversity} texte="24 entreprises partenaires"/>
      </div>

      <div className='min-w-screen flex flex-col md:flex-row items-center justify-center flex-wrap md:h-[400px] my-10'>
        <div className='flex flex-col items-center'>
          <h2 className='text-xl text-center text-black dark:text-white'>Répartition des étudiants par campus :</h2>
          <GraphRond data={data.graphsAccueil.campus}/>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='text-xl text-center text-black dark:text-white'>Répartition des étudiants par années :</h2>
          <GraphRond data={data.graphsAccueil.annees}/>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='text-xl text-center text-black dark:text-white'>Répartition des étudiants par types :</h2>
          <GraphRond data={data.graphsAccueil.types}/>
        </div>
      </div>

      <div className='flex flex-col md:flex-row items-center md:items-start justify-center my-20 mx-auto gap-10'>
        <Absence nombre={data.absence.absents.length} liste={data.absence.absents} type="absent" />
        <Absence nombre={data.absence.retards.length} liste={data.absence.retards} type="en retard" />
        <Link to="/a2/profil">Gabriel Drouet</Link>
      </div>

      <div className='mx-10 md:mx-100'>
      <h2 className='text-2xl text-center text-black dark:text-white'>Emploi du temps</h2>
        <Calendrier/>
      </div>
    </>
  )
}

export default App