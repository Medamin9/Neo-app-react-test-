import { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { PulseLoader } from 'react-spinners';
import { fetchNEOData } from '../Services/api';

// Define the type for NEO (Near Earth Object) data
type NeoData = {
  name: string;
  min_diameter: number;
  max_diameter: number;
};

const ChartView = () => {

  // State to store the fetched NEO data
  const [data, setData] = useState<NeoData[]>([]);

  // State to manage loading state while fetching data
  const [loading, setLoading] = useState(false);

  // State to handle and display any fetching errors
  const [error, setError] = useState('');


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
          min_diameter: obj.estimated_diameter.kilometers.estimated_diameter_min,
          max_diameter: obj.estimated_diameter.kilometers.estimated_diameter_max,
        }));
        setData(formattedData);
      } catch (error) {
        // Handle error if the data fetching fails
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  // Display a loading spinner while data is being fetched
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <PulseLoader color="#4285F4" size={10} />
      </div>
    );
  }

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <ResponsiveContainer width="100%" height={700}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 80, bottom: 5 }}
        >
          {/* X-axis for Estimated Diameter */}
          <XAxis
            type="number"
            label={{
              value: 'Estimated Diameter (km)',
              position: 'insideBottom',
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
              value: 'NEO Name',
              angle: -90,
              position: 'insideLeft',
              offset : -40,
              style : {fontStyle : 'italic'}
            }}
            tick={{ 
              fontSize: 14,
              style: { whiteSpace: 'nowrap' }
             }}
          />
          <Tooltip />
          <Legend verticalAlign='top' align="center" wrapperStyle={{ marginTop: -10 }}  />

          {/* Bars */}
          <Bar dataKey="min_diameter" fill="#4285F4" name="Min Estimated Diameter (km)" barSize={20}>
            {data.map((_, index) => (
              <Cell key={`cell-min-${index}`} />
            ))}
          </Bar>
          <Bar dataKey="max_diameter" fill="#EA4335" name="Max Estimated Diameter (km)" barSize={20}>
            {data.map((_, index) => (
              <Cell key={`cell-max-${index}`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartView;
