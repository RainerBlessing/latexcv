import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const EditorPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('personal');

  const handlePreview = () => {
    navigate('/preview');
  };

  const getSectionDisplayName = (sectionKey: string) => {
    return t(`editor.sections.${sectionKey}`);
  };

  return (
    <div className="max-w-7xl mx-auto" data-testid="editor-page">
      {/* Editor Header */}
      <div className="bg-white shadow-sm rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">{t('editor.title')}</h1>
          <div className="space-x-4">
            <button
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
              data-testid="save-button"
            >
              {t('editor.saveButton')}
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              onClick={handlePreview}
              data-testid="preview-button"
            >
              {t('editor.previewButton')}
            </button>
          </div>
        </div>
      </div>

      {/* Editor Layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-white shadow-sm rounded-lg p-4" data-testid="editor-sidebar">
          <h2 className="text-lg font-semibold mb-4">{t('editor.sections.title')}</h2>
          <nav>
            <ul className="space-y-2">
              {['personal', 'education', 'experience', 'skills', 'languages', 'projects'].map((section) => (
                <li key={section}>
                  <button
                    className={`w-full text-left px-3 py-2 rounded transition-colors ${
                      activeSection === section
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveSection(section)}
                    data-testid={`section-${section}`}
                  >
                    {getSectionDisplayName(section)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white shadow-sm rounded-lg p-6" data-testid="editor-content">
          <h2 className="text-xl font-semibold mb-4">
            {activeSection === 'personal'
              ? t('editor.personalSection.title')
              : t(`editor.sections.${activeSection}`) + ' ' + t('editor.personalSection.title')}
          </h2>

          {activeSection === 'personal' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('editor.personalSection.fullName')}
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder={t('editor.personalSection.fullNamePlaceholder')}
                  data-testid="input-name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('editor.personalSection.email')}
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder={t('editor.personalSection.emailPlaceholder')}
                  data-testid="input-email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('editor.personalSection.phone')}
                </label>
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder={t('editor.personalSection.phonePlaceholder')}
                  data-testid="input-phone"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('editor.personalSection.location')}
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder={t('editor.personalSection.locationPlaceholder')}
                  data-testid="input-location"
                />
              </div>
            </div>
          )}

          {activeSection !== 'personal' && (
            <div className="bg-gray-50 border border-gray-200 rounded p-4 text-center">
              <p className="text-gray-500">
                {t('editor.sectionPlaceholder', { section: t(`editor.sections.${activeSection}`) })}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
