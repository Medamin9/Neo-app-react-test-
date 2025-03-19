import './App.css'
import ChartView from './components/ChartView'


// Main App component
function App() {
  return (
    <>
      <div className='container mx-auto'>
        <h1 className='text-3xl font-bold'> Near Earth Objects </h1>

        {/* Rendering the ChartView component that displays the chart with NEO data */}
        <ChartView />
      </div>
    </>
  )
}

export default App
