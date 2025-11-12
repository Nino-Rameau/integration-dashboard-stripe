import '../App.css'
import data from '../../data.json'
import { Link } from 'react-router-dom'

import Grille from '../components/tableau'

function App() {

    const colonne = [
      { 
        headerName: 'Prénom', 
        field: 'prenom', 
        pinned: 'left',
        cellRenderer: (params) => {
          const initialePrenom = params.data.prenom.charAt(0).toLowerCase();
          const url = `/a${params.data.annee}/${initialePrenom}${params.data.nom.toLowerCase()}`;
          return (
            <Link 
              to={url} 
              className="hover:underline cursor-pointer"
            >
              {params.value}
            </Link>
          )
        }
      },
      { 
        headerName: 'Nom', 
        field: 'nom', 
        pinned: 'left',
        cellRenderer: (params) => {
          const initialePrenom = params.data.prenom.charAt(0).toLowerCase();
          const url = `/a${params.data.annee}/${initialePrenom}${params.data.nom.toLowerCase()}`;
          return (
            <Link 
              to={url} 
              className="hover:underline cursor-pointer"
            >
              {params.value}
            </Link>
          )
        }
      },
      { headerName: 'Âge', field: 'age' },
      { headerName: 'Genre', field: 'genre' },
      { headerName: 'Statut', field: 'statut' },
      { headerName: 'Année', field: 'annee' },
      { headerName: 'Diplôme', field: 'diplome' },
      { headerName: 'Spécialité', field: 'spe' },
      { headerName: 'Absence', field: 'absence' },
      { headerName: 'Retard', field: 'retard' },
  ];

  return (
    <>
    <h1 className='text-center text-3xl p-4 text-black dark:text-white'>Etudiants</h1>
    <Grille data={data.etudiant} coloneData={colonne}/>
    </>
  )
}

export default App