import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App Component and Routing', () => {
  it('renders HomePage on default route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    
    // Check if HomePage content is rendered
    expect(screen.getByTestId('home-title')).toBeInTheDocument();
    expect(screen.getByTestId('create-cv-button')).toBeInTheDocument();
  });

  it('renders EditorPage on /editor route', () => {
    render(
      <MemoryRouter initialEntries={['/editor']}>
        <App />
      </MemoryRouter>
    );
    
    // Check if EditorPage content is rendered
    expect(screen.getByTestId('editor-page')).toBeInTheDocument();
    expect(screen.getByTestId('editor-sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('editor-content')).toBeInTheDocument();
  });

  it('renders PreviewPage on /preview route', () => {
    render(
      <MemoryRouter initialEntries={['/preview']}>
        <App />
      </MemoryRouter>
    );
    
    // Check if PreviewPage content is rendered
    expect(screen.getByTestId('preview-page')).toBeInTheDocument();
    expect(screen.getByTestId('cv-preview')).toBeInTheDocument();
    expect(screen.getByTestId('export-options')).toBeInTheDocument();
  });

  it('renders NotFoundPage on unknown route', () => {
    render(
      <MemoryRouter initialEntries={['/unknown-route']}>
        <App />
      </MemoryRouter>
    );
    
    // Check if NotFoundPage content is rendered
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  it('renders Navbar on all pages', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    
    // Check if Navbar is rendered
    expect(screen.getByTestId('navbar-logo')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-home')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-editor')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-preview')).toBeInTheDocument();
  });
});
