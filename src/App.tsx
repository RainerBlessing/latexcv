import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage.tsx';
import EditorPage from './pages/Editor/EditorPage.tsx';
import PreviewPage from './pages/Preview/PreviewPage.tsx';
import NotFoundPage from './pages/NotFound/NotFoundPage.tsx';
import Navbar from './components/Navbar/Navbar.tsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/preview" element={<PreviewPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
