import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from './pages/accueil';
import A1 from './pages/a1';
import A2 from './pages/a2';
import A3 from './pages/a3';
import A4 from './pages/a4';
import A5 from './pages/a5';
import Profil from './pages/profil';
import Etudiant from './pages/etudiant';
import Intervenant from './pages/intervenant';
import Layout from "./components/layout";

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/etudiant" element={<Etudiant />} />
          <Route path="/intervenant" element={<Intervenant />} />
          <Route path="/a1" element={<A1 />} />
          <Route path="/a2" element={<A2 />} />
          <Route path="/a3" element={<A3 />} />
          <Route path="/a4" element={<A4 />} />
          <Route path="/a5" element={<A5 />} />
          <Route path="/a2/Profil" element={<Profil />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
