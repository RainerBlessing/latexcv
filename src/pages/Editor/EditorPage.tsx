import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditorPage = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('personal');

  const handlePreview = () => {
    navigate('/preview');
  };

  return (
    <div className="max-w-7xl mx-auto" data-testid="editor-page">
      {/* Editor Header */}
      <div className="bg-white shadow-sm rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">CV Editor</h1>
          <div className="space-x-4">
            <button
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
              data-testid="save-button"
            >
              Save
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              onClick={handlePreview}
              data-testid="preview-button"
            >
              Preview
            </button>
          </div>
        </div>
      </div>

      {/* Editor Layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-white shadow-sm rounded-lg p-4" data-testid="editor-sidebar">
          <h2 className="text-lg font-semibold mb-4">Sections</h2>
          <nav>
            <ul className="space-y-2">
              {['personal', 'education', 'experience', 'skills', 'languages', 'projects'].map((section) => (
                <li key={section}>
                  <button
                    className={`w-full text-left px-3 py-2 rounded transition-colors ${
                      activeSection === section
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveSection(section)}
                    data-testid={`section-${section}`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white shadow-sm rounded-lg p-6" data-testid="editor-content">
          <h2 className="text-xl font-semibold mb-4">
            {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Information
          </h2>

          {activeSection === 'personal' && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="e.g., John Doe"
                  data-testid="input-name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="e.g., john.doe@example.com"
                  data-testid="input-email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="e.g., +1 (555) 123-4567"
                  data-testid="input-phone"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="e.g., New York, NY"
                  data-testid="input-location"
                />
              </div>
            </div>
          )}

          {activeSection !== 'personal' && (
            <div className="bg-gray-50 border border-gray-200 rounded p-4 text-center">
              <p className="text-gray-500">
                Select fields for {activeSection} will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
