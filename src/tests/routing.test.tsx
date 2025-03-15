import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

// Mock the react-i18next hook
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: any) => {
      const translations = {
        // Navbar translations
        'navbar.appName': 'LaTeX CV Builder',
        'navbar.home': 'Home',
        'navbar.editor': 'Editor',
        'navbar.preview': 'Preview',

        // HomePage translations
        'home.title': 'Welcome to LaTeX CV Builder',

        // Other translations as needed
      };

      if (key === 'editor.sectionPlaceholder' && options) {
        return `Select fields for ${options.section} will appear here.`;
      }

      return (translations as Record<string, string>)[key] || key;
    },
    i18n: {
      language: 'en',
      changeLanguage: jest.fn()
    }
  })
}));

// Mock LanguageSwitcher component
jest.mock('../components/LanguageSwitcher', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="language-switcher-mock"></div>
  };
});

describe('Application Routing', () => {
  it('navigates to Home when clicking the Home link', () => {
    render(
      <MemoryRouter initialEntries={['/editor']}>
        <App />
      </MemoryRouter>
    );

    // Initially on editor page
    expect(screen.getByTestId('editor-page')).toBeInTheDocument();

    // Click the home link
    fireEvent.click(screen.getByTestId('navbar-home'));

    // Should navigate to home page
    expect(screen.getByTestId('home-title')).toBeInTheDocument();
  });

  it('navigates to Editor when clicking the Editor link', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Initially on home page
    expect(screen.getByTestId('home-title')).toBeInTheDocument();

    // Click the editor link
    fireEvent.click(screen.getByTestId('navbar-editor'));

    // Should navigate to editor page
    expect(screen.getByTestId('editor-page')).toBeInTheDocument();
  });

  it('navigates to Preview when clicking the Preview link', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Initially on home page
    expect(screen.getByTestId('home-title')).toBeInTheDocument();

    // Click the preview link
    fireEvent.click(screen.getByTestId('navbar-preview'));

    // Should navigate to preview page
    expect(screen.getByTestId('preview-page')).toBeInTheDocument();
  });

  it('navigates to Home when clicking the logo', () => {
    render(
      <MemoryRouter initialEntries={['/editor']}>
        <App />
      </MemoryRouter>
    );

    // Initially on editor page
    expect(screen.getByTestId('editor-page')).toBeInTheDocument();

    // Click the logo
    fireEvent.click(screen.getByTestId('navbar-logo'));

    // Should navigate to home page
    expect(screen.getByTestId('home-title')).toBeInTheDocument();
  });
});
