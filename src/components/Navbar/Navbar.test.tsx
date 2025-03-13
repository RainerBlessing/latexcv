import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  it('renders navigation links correctly', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Check if the logo and navigation links are in the document
    expect(screen.getByTestId('navbar-logo')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-home')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-editor')).toBeInTheDocument();
    expect(screen.getByTestId('navbar-preview')).toBeInTheDocument();

    // Check if the links have correct href attributes
    expect(screen.getByTestId('navbar-logo')).toHaveAttribute('href', '/');
    expect(screen.getByTestId('navbar-home')).toHaveAttribute('href', '/');
    expect(screen.getByTestId('navbar-editor')).toHaveAttribute('href', '/editor');
    expect(screen.getByTestId('navbar-preview')).toHaveAttribute('href', '/preview');
  });
});
