import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import Btn from "./btn";
import { useState } from "react";

ModuleRegistry.registerModules([AllCommunityModule]);


export default function GridExample() {
const rowData = {
  1: [
    { Nom: "Martin", Prénom: "Alice", "Partiel 1": 15, "Partiel 2": 18, "Ajouter une note": "" },
    { Nom: "Durand", Prénom: "Lucas", "Partiel 1": 17, "Partiel 2": 14, "Ajouter une note": "" },
    { Nom: "Petit", Prénom: "Sarah", "Partiel 1": 19, "Partiel 2": 16, "Ajouter une note": "" },
    { Nom: "Robert", Prénom: "Nathan", "Partiel 1": 13, "Partiel 2": 17, "Ajouter une note": "" },
    { Nom: "Marchand", Prénom: "Camille", "Partiel 1": 18, "Partiel 2": 15, "Ajouter une note": "" },
    { Nom: "Lefevre", Prénom: "Emma", "Partiel 1": 20, "Partiel 2": 16, "Ajouter une note": "" },
  ],
  2: [
    { Nom: "Bernard", Prénom: "Noah", "Partiel 1": 13, "Partiel 2": 19, "Ajouter une note": "" },
    { Nom: "Dupuis", Prénom: "Manon", "Partiel 1": 17, "Partiel 2": 18, "Ajouter une note": "" },
    { Nom: "Rousseau", Prénom: "Jules", "Partiel 1": 15, "Partiel 2": 12, "Ajouter une note": "" },
  ],
  3: [
    { Nom: "Moreau", Prénom: "Léa", "Partiel 1": 18, "Partiel 2": 17, "Ajouter une note": "" },
    { Nom: "Simon", Prénom: "Louis", "Partiel 1": 16, "Partiel 2": 13, "Ajouter une note": "" },
    { Nom: "Gauthier", Prénom: "Eva", "Partiel 1": 14, "Partiel 2": 19, "Ajouter une note": "" },
    { Nom: "Fontaine", Prénom: "Thomas", "Partiel 1": 20, "Partiel 2": 15, "Ajouter une note": "" },
    { Nom: "Chevalier", Prénom: "Mila", "Partiel 1": 17, "Partiel 2": 18, "Ajouter une note": "" },
  ],
  4: [
    { Nom: "Laurent", Prénom: "Chloé", "Partiel 1": 14, "Partiel 2": 15, "Ajouter une note": "" },
    { Nom: "Girard", Prénom: "Enzo", "Partiel 1": 19, "Partiel 2": 13, "Ajouter une note": "" },
    { Nom: "Andre", Prénom: "Clara", "Partiel 1": 18, "Partiel 2": 16, "Ajouter une note": "" },
    { Nom: "Lambert", Prénom: "Mathis", "Partiel 1": 15, "Partiel 2": 20, "Ajouter une note": "" },
    { Nom: "Perez", Prénom: "Inès", "Partiel 1": 17, "Partiel 2": 18, "Ajouter une note": "" },
  ],
  5: [
    { Nom: "Garcia", Prénom: "Hugo", "Partiel 1": 19, "Partiel 2": 20, "Ajouter une note": "" },
    { Nom: "Fernandez", Prénom: "Sofia", "Partiel 1": 16, "Partiel 2": 14, "Ajouter une note": "" },
    { Nom: "Blanc", Prénom: "Arthur", "Partiel 1": 20, "Partiel 2": 15, "Ajouter une note": "" },
    { Nom: "Colin", Prénom: "Lucie", "Partiel 1": 13, "Partiel 2": 17, "Ajouter une note": "" },
    { Nom: "Henry", Prénom: "Adam", "Partiel 1": 18, "Partiel 2": 16, "Ajouter une note": "" },
    { Nom: "Dupont", Prénom: "Juliette", "Partiel 1": 14, "Partiel 2": 19, "Ajouter une note": "" },
  ],
};

  const [selectedYear, setSelectedYear] = useState(1);

const colDefs = ([
  { field: "Nom" },
  { field: "Prénom" },
  { field: "Partiel 1" },
  { field: "Partiel 2" },
  { field: "Ajouter une note" },
]);

  return (
    <>
      <div className="flex flex-row flex-nowrap gap-8 m-4">
        <Btn texte={"Année 1"} active={selectedYear === 1} onClick={() => setSelectedYear(1)} />
        <Btn texte={"Année 2"} active={selectedYear === 2} onClick={() => setSelectedYear(2)} />
        <Btn texte={"Année 3"} active={selectedYear === 3} onClick={() => setSelectedYear(3)} />
        <Btn texte={"Année 4"} active={selectedYear === 4} onClick={() => setSelectedYear(4)} />
        <Btn texte={"Année 5"} active={selectedYear === 5} onClick={() => setSelectedYear(5)} />
      </div>

      <div className="w-full md:w-[1020px] h-[200px] md:h-[400px]">
        <AgGridReact rowData={rowData[selectedYear]} columnDefs={colDefs} />
      </div>
    </>
  );
};