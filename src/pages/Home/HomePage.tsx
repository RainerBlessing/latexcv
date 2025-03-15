import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleCreateNewCV = () => {
    navigate('/editor');
  };

  return (
    <div className="max-w-3xl mx-auto text-center">
      <div className="bg-white shadow-lg rounded-lg p-8 mt-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6" data-testid="home-title">
          {t('home.title')}
        </h1>

        <p className="text-lg text-gray-600 mb-8" data-testid="home-description">
          {t('home.description')}
        </p>

        <div className="space-y-4">
          <button
            onClick={handleCreateNewCV}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            data-testid="create-cv-button"
          >
            {t('home.createButtonText')}
          </button>

          <div className="mt-8 text-sm text-gray-500">
            <p>{t('home.importText')}</p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">{t('home.features.templates.title')}</h3>
          <p className="text-gray-600">{t('home.features.templates.description')}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">{t('home.features.easyToUse.title')}</h3>
          <p className="text-gray-600">{t('home.features.easyToUse.description')}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">{t('home.features.exportOptions.title')}</h3>
          <p className="text-gray-600">{t('home.features.exportOptions.description')}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
