import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const currentLanguage = i18n.language.substring(0, 2);

  return (
    <div className="relative" data-testid="language-switcher">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900"
        data-testid="language-switcher-button"
      >
        <span className="mr-1">{currentLanguage.toUpperCase()}</span>
        <svg
          className="w-4 h-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg z-10">
          <button
            onClick={() => changeLanguage('en')}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
              currentLanguage === 'en' ? 'font-bold bg-gray-50' : ''
            }`}
            data-testid="language-en"
          >
            English
          </button>
          <button
            onClick={() => changeLanguage('de')}
            className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
              currentLanguage === 'de' ? 'font-bold bg-gray-50' : ''
            }`}
            data-testid="language-de"
          >
            Deutsch
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
