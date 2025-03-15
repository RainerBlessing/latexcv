import { render, screen, fireEvent } from '@testing-library/react';
import LanguageSwitcher from './LanguageSwitcher';

// Mock the react-i18next hook
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: {
      language: 'de',
      changeLanguage: jest.fn()
    }
  })
}));

describe('LanguageSwitcher Component', () => {
  it('renders language button with current language', () => {
    render(<LanguageSwitcher />);

    const button = screen.getByTestId('language-switcher-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('DE');
  });

  it('toggles language dropdown on click', () => {
    render(<LanguageSwitcher />);

    // Dropdown should be closed initially
    expect(screen.queryByTestId('language-en')).not.toBeInTheDocument();

    // Click to open dropdown
    fireEvent.click(screen.getByTestId('language-switcher-button'));

    // Dropdown should be open now
    expect(screen.getByTestId('language-en')).toBeInTheDocument();
    expect(screen.getByTestId('language-de')).toBeInTheDocument();

    // Click to close dropdown
    fireEvent.click(screen.getByTestId('language-switcher-button'));

    // Dropdown should be closed again
    expect(screen.queryByTestId('language-en')).not.toBeInTheDocument();
  });

  it('changes language when option is clicked', () => {
    const { i18n } = require('react-i18next').useTranslation();

    render(<LanguageSwitcher />);

    // Open dropdown
    fireEvent.click(screen.getByTestId('language-switcher-button'));

    // Click English option
    fireEvent.click(screen.getByTestId('language-en'));

    // Check if language change was called
    expect(i18n.changeLanguage).toHaveBeenCalledWith('en');
  });
});
