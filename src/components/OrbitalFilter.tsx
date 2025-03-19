import React from 'react';

type OrbitalFilterProps = {
  orbitalBodies: string[];
  selectedBody: string;
  onFilterChange: (value: string) => void;
};

const OrbitalFilter: React.FC<OrbitalFilterProps> = ({ orbitalBodies, selectedBody, onFilterChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="orbitalFilter" className="block text-lg font-semibold mb-2">
        Filter by Orbital Body:
      </label>
      <select
        id="orbitalFilter"
        value={selectedBody}
        onChange={(e) => onFilterChange(e.target.value)}
        className="p-2 border rounded-md w-50 outline-none focus:border-blue-500 focus:border-2"
      >
        <option value="">All</option>
        {orbitalBodies.map((body) => (
          <option key={body} value={body}>
            {body}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OrbitalFilter;
