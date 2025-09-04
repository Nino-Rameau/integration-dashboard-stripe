import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import { themeQuartz } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);


export default function GridExample() {
const rowData = ([
  { Nom: "Martin", Prénom: "Alice", "Partiel 1": 15, "Partiel 2": 18, "Ajouter une note": "" },
  { Nom: "Durand", Prénom: "Lucas", "Partiel 1": 17, "Partiel 2": 14, "Ajouter une note": "" },
  { Nom: "Lefevre", Prénom: "Emma", "Partiel 1": 20, "Partiel 2": 16, "Ajouter une note": "" },
  { Nom: "Bernard", Prénom: "Noah", "Partiel 1": 13, "Partiel 2": 19, "Ajouter une note": "" },
  { Nom: "Moreau", Prénom: "Léa", "Partiel 1": 18, "Partiel 2": 17, "Ajouter une note": "" },
  { Nom: "Simon", Prénom: "Louis", "Partiel 1": 16, "Partiel 2": 13, "Ajouter une note": "" },
  { Nom: "Laurent", Prénom: "Chloé", "Partiel 1": 14, "Partiel 2": 15, "Ajouter une note": "" },
  { Nom: "Garcia", Prénom: "Hugo", "Partiel 1": 19, "Partiel 2": 20, "Ajouter une note": "" },
]);

const colDefs = ([
  { field: "Nom" },
  { field: "Prénom" },
  { field: "Partiel 1" },
  { field: "Partiel 2" },
  { field: "Ajouter une note" },
]);


  return (
    <div className={themeQuartz} style={{ width: "1010px", height: "250px" }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
};