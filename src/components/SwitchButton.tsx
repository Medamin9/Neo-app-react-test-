// Type definition for SwitchButton component props
type SwitchButtonProps = {
    viewMode: 'chart' | 'table';
    setViewMode: (mode: 'chart' | 'table') => void // Function to update the view mode;
  };
  
  const SwitchButton = ({ viewMode, setViewMode }: SwitchButtonProps) => {
    return (
      <div className="flex justify-center mb-4">
        {/* Button to switch to chart view */}
        <button
          onClick={() => setViewMode('chart')}
          className={`mr-2 px-4 py-2 border-2 rounded-md transition-all duration-300 cursor-pointer ${
            viewMode === 'chart'
              ? 'border-green-500 text-green-500 bg-green-100'
              : 'border-gray-300 text-gray-500 bg-white hover:border-green-500 hover:text-green-500'
          }`}
        >
          Chart View
        </button>
        <button
          onClick={() => setViewMode('table')}
          className={`px-4 py-2 border-2 rounded-md transition-all duration-300 cursor-pointer ${
            viewMode === 'table'
              ? 'border-green-500 text-green-500 bg-green-100'
              : 'border-gray-300 text-gray-500 bg-white hover:border-green-500 hover:text-green-500'
          }`}
        >
          Table View
        </button>
      </div>
    );
  };
  
  export default SwitchButton;
  