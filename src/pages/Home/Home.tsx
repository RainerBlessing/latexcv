import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Welcome to LaTeX CV Builder</h2>
      <p className="mb-4">
        This application helps you create professional CVs using LaTeX without having to write any LaTeX code yourself.
      </p>
      <p className="mb-4">
        Get started by creating a new CV or importing an existing one.
      </p>
      <div className="flex space-x-4 mt-6">
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Create New CV
        </button>
        <button 
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
        >
          Import Existing CV
        </button>
      </div>
    </div>
  )
}

export default Home
