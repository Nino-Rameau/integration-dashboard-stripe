import data from '../../data.json'
import Card from '../components/card'
import GraphNote from '../components/graph-Note-eleve'
import { CiClock2 } from "react-icons/ci";
import { FaUserXmark } from "react-icons/fa6";

const Profil = ({rang}) => {
  
  return (
    <>
      <h1 className="text-white text-5xl text-center">{data.etudiant[rang].nom} {data.etudiant[rang].prenom}</h1>
    
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-30 m-10">
            <img src="/img/photo.jpg" alt="Photo de profil de l'etudiant" className="rounded-full" width="150px" height="150px"/>
            <ul className='text-black dark:text-white'>
                <li>Age : {data.etudiant[rang].age}</li>
                <li>Genre : {data.etudiant[rang].genre}</li>
                <li>Numéro de téléphone : {data.etudiant[rang].num_tel}</li>
                <li>Adresse mail : {data.etudiant[rang].email}</li>
            </ul>
            <ul className='text-black dark:text-white'>
                <li>Année en cours : {data.etudiant[rang].annee}</li>
                <li>Campus : {data.etudiant[rang].campus}</li>
                <li>Diplome en cours : {data.etudiant[rang].diplome}</li>
                <li>Spécialité : {data.etudiant[rang].spe}</li>
                <li>Statut : {data.etudiant[rang].statut}</li>
            </ul>
        </div>

        <h2 className="text-black dark:text-white text-3xl text-center">Abscence et retard</h2>
        <div className='flex flex-col md:flex-row md:justify-evenly items-center m-auto'>
          <Card Icon={FaUserXmark} texte={data.etudiant[rang].absence + " absence à justifier"}/>
          <Card Icon={CiClock2} texte={data.etudiant[rang].retard + " retard à justifier"}/>
        </div>

        <h2 className="text-black dark:text-white text-3xl text-center">Note au partiel</h2>
        <div className='flex flex-row justify-evenly'>
          <GraphNote data={Object.values(data.etudiant[rang].note)} />
        </div>
    </>
  );
};

export default Profil;