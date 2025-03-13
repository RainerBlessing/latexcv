import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PreviewPage from './PreviewPage';

// Mock useNavigate
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('PreviewPage Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('renders preview layout correctly', () => {
    render(
      <BrowserRouter>
        <PreviewPage />
      </BrowserRouter>
    );

    // Check if main components are rendered
    expect(screen.getByTestId('preview-page')).toBeInTheDocument();
    expect(screen.getByTestId('cv-preview')).toBeInTheDocument();
    expect(screen.getByTestId('export-options')).toBeInTheDocument();
    expect(screen.getByTestId('back-button')).toBeInTheDocument();
    expect(screen.getByTestId('download-button')).toBeInTheDocument();
  });

  it('navigates back to editor when back button is clicked', () => {
    render(
      <BrowserRouter>
        <PreviewPage />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByTestId('back-button'));
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/editor');
  });

  it('displays CV preview content', () => {
    render(
      <BrowserRouter>
        <PreviewPage />
      </BrowserRouter>
    );

    // Check if CV preview content is displayed
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Summary')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
  });
});
