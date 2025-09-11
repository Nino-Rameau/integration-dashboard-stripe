import '../App.css'
import data from '../../data.json'

import Grille from '../components/tableau'

function App() {

    const colonne = [
      { headerName: 'Prénom', field: 'prenom', pinned: 'left'},
      { headerName: 'Nom', field: 'nom', pinned: 'left' },
      { headerName: 'Âge', field: 'age' },
      { headerName: 'genre', field: 'genre' },
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
