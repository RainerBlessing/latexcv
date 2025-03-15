import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';

// Mock useNavigate
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

// Mock the react-i18next hook
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations = {
        'home.title': 'Welcome to LaTeX CV Builder',
        'home.description': 'Create professional, beautifully typeset CVs in minutes with our LaTeX-powered CV builder.',
        'home.createButtonText': 'Create New CV',
        'home.importText': 'Already have a CV? You can also import an existing one.',
        'home.features.templates.title': 'Professional Templates',
        'home.features.templates.description': 'Choose from a variety of professionally designed LaTeX templates.',
        'home.features.easyToUse.title': 'Easy to Use',
        'home.features.easyToUse.description': 'Simple interface to create and edit your CV without knowing LaTeX.',
        'home.features.exportOptions.title': 'Export Options',
        'home.features.exportOptions.description': 'Download your CV as PDF, or export the LaTeX source code.'
      };
      return translations[key] || key;
    },
    i18n: {
      language: 'en'
    }
  })
}));

describe('HomePage Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('renders welcome message and create button', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    expect(screen.getByTestId('home-title')).toBeInTheDocument();
    expect(screen.getByTestId('home-description')).toBeInTheDocument();
    expect(screen.getByTestId('create-cv-button')).toBeInTheDocument();
  });

  it('navigates to editor page when create button is clicked', () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByTestId('create-cv-button'));
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/editor');
  });
});
