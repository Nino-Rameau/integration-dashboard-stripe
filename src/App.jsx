import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from './pages/accueil';
import Dw from './pages/dw';
import Cg from './pages/cg';
import Cd from './pages/cd';
import Md from './pages/md';
import Layout from "./components/layout";

function App() {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/dw" element={<Dw />} />
          <Route path="/cg" element={<Cg />} />
          <Route path="/cd" element={<Cd />} />
          <Route path="/md" element={<Md />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
