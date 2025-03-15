import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

// Mock the react-i18next hook
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations = {
        'notFound.statusCode': '404',
        'notFound.title': 'Page Not Found',
        'notFound.message': 'Sorry, the page you are looking for does not exist or has been moved.',
        'notFound.homeButton': 'Return to Home',
        'notFound.editorButton': 'Go to Editor'
      };
      return translations[key] || key;
    },
    i18n: {
      language: 'en'
    }
  })
}));

describe('NotFoundPage Component', () => {
  it('renders 404 message correctly', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );

    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
  });

  it('renders navigation links correctly', () => {
    render(
      <BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>
    );

    const homeLink = screen.getByTestId('home-link');
    const editorLink = screen.getByTestId('editor-link');

    expect(homeLink).toBeInTheDocument();
    expect(editorLink).toBeInTheDocument();

    expect(homeLink).toHaveAttribute('href', '/');
    expect(editorLink).toHaveAttribute('href', '/editor');

    expect(homeLink).toHaveTextContent('Return to Home');
    expect(editorLink).toHaveTextContent('Go to Editor');
  });
});
