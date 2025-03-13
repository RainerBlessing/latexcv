import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleCreateNewCV = () => {
    navigate('/editor');
  };

  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="bg-white shadow-lg rounded-lg p-8 mt-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6" data-testid="home-title">
          Welcome to LaTeX CV Builder
        </h1>

        <p className="text-lg text-gray-600 mb-8" data-testid="home-description">
          Create professional, beautifully typeset CVs in minutes with our LaTeX-powered CV builder.
          No LaTeX knowledge required!
        </p>

        <div className="space-y-4">
          <button
            onClick={handleCreateNewCV}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            data-testid="create-cv-button"
          >
            Create New CV
          </button>

          <div className="mt-8 text-sm text-gray-500">
            <p>Already have a CV? You can also import an existing one.</p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">Professional Templates</h3>
          <p className="text-gray-600">Choose from a variety of professionally designed LaTeX templates.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">Easy to Use</h3>
          <p className="text-gray-600">Simple interface to create and edit your CV without knowing LaTeX.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">Export Options</h3>
          <p className="text-gray-600">Download your CV as PDF, or export the LaTeX source code.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
