import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from '../App';
import Navbar from '../components/Navbar/Navbar';

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

  it('active link is highlighted correctly', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Get all nav links
    const homeLink = screen.getByTestId('navbar-home');
    const editorLink = screen.getByTestId('navbar-editor');
    const previewLink = screen.getByTestId('navbar-preview');

    // Click the editor link
    fireEvent.click(editorLink);

    // Editor link should have the active class (contains bg-blue-100)
    expect(editorLink.className).toContain('bg-blue-100');
    expect(homeLink.className).not.toContain('bg-blue-100');
    expect(previewLink.className).not.toContain('bg-blue-100');
  });
});
