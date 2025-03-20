import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "../App.css";
// type for NEO data
type NeoData = {
  name: string;
  min_diameter: number;
  max_diameter: number;
};

const TableView = ({ data }: { data: NeoData[] }) => {
  return (
    <div className="card">
      {/* Data table to display NEO data */}
      <DataTable
        value={data}
        paginator
        rows={10}
        stripedRows // Alternating row background for better readability
        responsiveLayout="scroll" // Enables horizontal scrolling on small screens
        paginatorTemplate="PrevPageLink PageLinks NextPageLink" 
        className="custom-pagination"
      >
        <Column field="name" header="NEO Name" sortable></Column>
        <Column
          field="min_diameter"
          header="Min Estimated Diameter (km)"
          sortable
        ></Column>
        <Column
          field="max_diameter"
          header="Max Estimated Diameter (km)"
          sortable
        ></Column>
      </DataTable>
    </div>
  );
};

export default TableView;
