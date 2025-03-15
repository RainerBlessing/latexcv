import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import EditorPage from './EditorPage';

// Mock useNavigate
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

// Mock the react-i18next hook
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: any) => {
      const translations = {
        'editor.title': 'CV Editor',
        'editor.saveButton': 'Save',
        'editor.previewButton': 'Preview',
        'editor.sections.title': 'Sections',
        'editor.sections.personal': 'Personal',
        'editor.sections.education': 'Education',
        'editor.sections.experience': 'Experience',
        'editor.sections.skills': 'Skills',
        'editor.sections.languages': 'Languages',
        'editor.sections.projects': 'Projects',
        'editor.personalSection.title': 'Personal Information',
        'editor.personalSection.fullName': 'Full Name',
        'editor.personalSection.email': 'Email',
        'editor.personalSection.phone': 'Phone',
        'editor.personalSection.location': 'Location',
        'editor.personalSection.fullNamePlaceholder': 'e.g., John Doe',
        'editor.personalSection.emailPlaceholder': 'e.g., john.doe@example.com',
        'editor.personalSection.phonePlaceholder': 'e.g., +1 (555) 123-4567',
        'editor.personalSection.locationPlaceholder': 'e.g., New York, NY',
      };

      if (key === 'editor.sectionPlaceholder' && options) {
        return `Select fields for ${options.section} will appear here.`;
      }

      return translations[key] || key;
    },
    i18n: {
      language: 'en'
    }
  })
}));

describe('EditorPage Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('renders editor layout correctly', () => {
    render(
      <BrowserRouter>
        <EditorPage />
      </BrowserRouter>
    );

    // Check if main components are rendered
    expect(screen.getByTestId('editor-page')).toBeInTheDocument();
    expect(screen.getByTestId('editor-sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('editor-content')).toBeInTheDocument();
    expect(screen.getByTestId('save-button')).toBeInTheDocument();
    expect(screen.getByTestId('preview-button')).toBeInTheDocument();
  });

  it('shows personal information form by default', () => {
    render(
      <BrowserRouter>
        <EditorPage />
      </BrowserRouter>
    );

    // Check if personal information form inputs are rendered
    expect(screen.getByTestId('input-name')).toBeInTheDocument();
    expect(screen.getByTestId('input-email')).toBeInTheDocument();
    expect(screen.getByTestId('input-phone')).toBeInTheDocument();
    expect(screen.getByTestId('input-location')).toBeInTheDocument();
  });

  it('changes content when different section is selected', () => {
    render(
      <BrowserRouter>
        <EditorPage />
      </BrowserRouter>
    );

    // Click on a different section (e.g., "Education")
    fireEvent.click(screen.getByTestId('section-education'));

    // Personal information inputs should not be visible
    expect(screen.queryByTestId('input-name')).not.toBeInTheDocument();

    // The section title should be updated
    expect(screen.getByText('Education Personal Information')).toBeInTheDocument();
  });

  it('navigates to preview page when preview button is clicked', () => {
    render(
      <BrowserRouter>
        <EditorPage />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByTestId('preview-button'));
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/preview');
  });
});
