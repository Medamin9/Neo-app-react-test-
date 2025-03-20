import React from "react";
import { saveAs } from "file-saver";
import Papa from "papaparse";

type CSVExportButtonProps = {
  data: { name: string; min_diameter: number; max_diameter: number; orbiting_body: string }[];
};

const CSVExportButton: React.FC<CSVExportButtonProps> = ({ data }) => {
  const handleExport = () => {
    if (data.length === 0) {
      alert("No data available to export!");
      return;
    }

    // Convert JSON data to CSV format
    const csv = Papa.unparse(data);

    // Create a Blob and trigger a download
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "NEO_data.csv");
  };

  return (
    <button
      onClick={handleExport}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Export CSV
    </button>
  );
};

export default CSVExportButton;
