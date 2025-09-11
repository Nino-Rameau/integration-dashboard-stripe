import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function GridExample( {data, coloneData} ) {

  return (
    <>
      <div className="flex m-auto w-[80vw] h-[600px] md:h-[65vh]">
        <AgGridReact 
          rowData={data} 
          columnDefs={coloneData} 
          className="h-full w-full" 
          pagination={true}
          paginationPageSize={20}
          defaultColDef={{flex: 1, minWidth: 80}}
        />
      </div>

    </>
  );
};