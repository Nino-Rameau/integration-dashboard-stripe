import '../App.css'
import data from '../../data.json'

import Grille from '../components/tableau'

function App() {

    const colonne = [
      { headerName: 'Prénom', field: 'prenom' },
      { headerName: 'Nom', field: 'nom' },
      { headerName: 'Âge', field: 'age' },
      { headerName: 'Sexe', field: 'sexe' },
      { headerName: 'Entreprise', field: 'entreprise' },
      { headerName: 'Ville', field: 'ville' },
      { headerName: 'Role', field: 'role' },
      { headerName: 'Numéro de téléphone', field: 'num_tel' },
      { headerName: 'email', field: 'email' },
      { headerName: "Type d'intervenant", field: 'type_intervenant' },
  ];

  return (
    <>
    <h1 className='text-center text-3xl p-4 text-black dark:text-white'>Intervenants et recruteurs</h1>
    <Grille data={data.intervenant} coloneData={colonne}/>
    </>
  )
}

export default App
