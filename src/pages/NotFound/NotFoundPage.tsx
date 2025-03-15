import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className="max-w-xl mx-auto text-center py-12" data-testid="not-found-page">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-6xl font-bold text-red-500 mb-4">{t('notFound.statusCode')}</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">{t('notFound.title')}</h2>

        <p className="text-gray-600 mb-8">
          {t('notFound.message')}
        </p>

        <div className="flex justify-center space-x-4">
          <Link
            to="/"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            data-testid="home-link"
          >
            {t('notFound.homeButton')}
          </Link>

          <Link
            to="/editor"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            data-testid="editor-link"
          >
            {t('notFound.editorButton')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
