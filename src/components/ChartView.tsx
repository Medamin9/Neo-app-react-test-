import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { PulseLoader } from "react-spinners";
import { fetchNEOData } from "../Services/api";
import OrbitalFilter from "./OrbitalFilter";
import TableView from "./TableView";
import SwitchButton from "./SwitchButton";
import CSVExportButton from "./CSVExportButton";

// Define the type for NEO (Near Earth Object) data
type NeoData = {
  name: string;
  min_diameter: number;
  max_diameter: number;
  orbiting_body: string;
};

const ChartView = () => {
  // State to store the fetched NEO data
  const [data, setData] = useState<NeoData[]>([]);

  // State to manage loading state while fetching data
  const [loading, setLoading] = useState(false);

  // State to handle and display any fetching errors
  const [error, setError] = useState("");

  const [filteredData, setFilteredData] = useState<NeoData[]>([]);
  const [selectedBody, setSelectedBody] = useState<string>("");
  const [orbitalBodies, setOrbitalBodies] = useState<string[]>([]);

  const [viewMode, setViewMode] = useState<"chart" | "table">("chart");

  // Fetch NEO data when the component is mounted
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch data from the API
        const response = await fetchNEOData();

        // Format the raw data to match the chart's expected format
        const formattedData = response.near_earth_objects.map((obj: any) => ({
          name: obj.name,
          min_diameter:
            obj.estimated_diameter.kilometers.estimated_diameter_min,
          max_diameter:
            obj.estimated_diameter.kilometers.estimated_diameter_max,
          orbiting_body: obj.close_approach_data[0]?.orbiting_body || "Unknown",
        }));

        // Store formatted data and also prepare filtered data
        setData(formattedData);
        setFilteredData(formattedData);

        //Extract unique orbital bodies for filtering
        const bodies: string[] = Array.from(
          new Set<string>(
            formattedData.map((neo: NeoData) => neo.orbiting_body)
          )
        );
        setOrbitalBodies(bodies);
      } catch (error) {
        // Handle error if the data fetching fails
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle filtering based on the selected orbital body
  const handleFilterChange = (value: string) => {
    setSelectedBody(value);
    if (value === "") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((neo) => neo.orbiting_body === value));
    }
  };

  // Display a loading spinner while data is being fetched
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <PulseLoader color="#4285F4" size={10} />
      </div>
    );
  }
  // If there's an error, display the error message
  if (error)
    return (
      <div className="text-red-500 h-screen flex justify-center items-center text-2xl font-bold">
        {error}
      </div>
    );

  return (
    <div className="p-4">
      {/* Orbital filter component for selecting orbital body */}
      <OrbitalFilter
        orbitalBodies={orbitalBodies}
        selectedBody={selectedBody}
        onFilterChange={handleFilterChange}
      />

      {/* Switch button to toggle between chart and table view */}
      <div className="flex justify-center mb-4">
        <SwitchButton viewMode={viewMode} setViewMode={setViewMode} />
      </div>

      {/* Render either a chart or a table based on the selected view mode */}
      {viewMode === "chart" ? (
        <ResponsiveContainer
          width="100%"
          height={filteredData.length > 3 ? 600 : 300}
          className="transition-all duration-500"
        >
          <BarChart
            data={filteredData}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 80, bottom: 5 }}
          >
            {/* X-axis for Estimated Diameter */}
            <XAxis
              type="number"
              label={{
                value: "Estimated Diameter (km)",
                position: "insideBottom",
                offset: -5,
              }}
            />
            {/* Y-axis for NEO Names */}
            <YAxis
              type="category"
              dataKey="name"
              width={150}
              tickMargin={2}
              allowDataOverflow
              label={{
                value: "NEO Name",
                angle: -90,
                position: "insideLeft",
                offset: -40,
                style: { fontStyle: "italic" },
              }}
              tick={{
                fontSize: 14,
                style: { whiteSpace: "nowrap" },
              }}
            />
            <Tooltip />
            <Legend
              verticalAlign="top"
              align="center"
              wrapperStyle={{ marginTop: -10 }}
            />

            {/* Bars */}
            <Bar
              dataKey="min_diameter"
              fill="#4285F4"
              name="Min Estimated Diameter (km)"
              barSize={20}
            >
              {data.map((_, index) => (
                <Cell key={`cell-min-${index}`} />
              ))}
            </Bar>
            <Bar
              dataKey="max_diameter"
              fill="#EA4335"
              name="Max Estimated Diameter (km)"
              barSize={20}
            >
              {data.map((_, index) => (
                <Cell key={`cell-max-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <TableView data={filteredData} />
      )}

      {/* CSV Export Button */}
      <div className="mt-4 flex justify-end">
        <CSVExportButton data={filteredData} />
      </div>
    </div>
  );
};

export default ChartView;
