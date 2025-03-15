import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PreviewPage from './PreviewPage';

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
        'preview.title': 'CV Preview',
        'preview.backButton': 'Back to Editor',
        'preview.downloadButton': 'Download PDF',
        'preview.exportOptions.title': 'Export Options',
        'preview.exportOptions.downloadPdf': 'Download as PDF',
        'preview.exportOptions.exportLatex': 'Export LaTeX Source',
        'preview.exportOptions.printCv': 'Print CV'
      };
      return translations[key] || key;
    },
    i18n: {
      language: 'en'
    }
  })
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

  it('displays translated export options', () => {
    render(
      <BrowserRouter>
        <PreviewPage />
      </BrowserRouter>
    );

    // Check if translated export options are displayed
    expect(screen.getByText('Export Options')).toBeInTheDocument();
    expect(screen.getByText('Download as PDF')).toBeInTheDocument();
    expect(screen.getByText('Export LaTeX Source')).toBeInTheDocument();
    expect(screen.getByText('Print CV')).toBeInTheDocument();
  });
});
