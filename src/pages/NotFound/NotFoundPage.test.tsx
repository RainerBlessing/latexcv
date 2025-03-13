import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

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
  });
});
