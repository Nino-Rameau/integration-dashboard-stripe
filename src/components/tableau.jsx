import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function GridExample( {data, coloneData} ) {

  return (
    <>
      <div className="w-full md:w-[1020px] h-[200px] md:h-[400px]">
        <AgGridReact rowData={data} columnDefs={coloneData} />
      </div>
    </>
  );
};