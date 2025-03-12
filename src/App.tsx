import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow-sm rounded-lg p-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">CV Builder</h1>
        <p className="text-gray-600">Create beautiful LaTeX CVs with ease</p>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
