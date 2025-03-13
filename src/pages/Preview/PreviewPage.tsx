import { useNavigate } from 'react-router-dom';

const PreviewPage = () => {
  const navigate = useNavigate();

  const handleBackToEditor = () => {
    navigate('/editor');
  };

  return (
    <div className="max-w-5xl mx-auto" data-testid="preview-page">
      {/* Preview Header */}
      <div className="bg-white shadow-sm rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">CV Preview</h1>
          <div className="space-x-4">
            <button 
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
              onClick={handleBackToEditor}
              data-testid="back-button"
            >
              Back to Editor
            </button>
            <button 
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              data-testid="download-button"
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>

      {/* CV Preview */}
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8" data-testid="cv-preview">
        <div className="border-2 border-gray-300 rounded-lg p-8 bg-gray-50">
          {/* Mock CV Preview - In a real app, this would be a rendered PDF or a formatted preview */}
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">John Doe</h1>
            <p className="text-gray-600 mb-4">Software Engineer</p>
            
            <div className="grid grid-cols-2 gap-4 text-sm mb-6">
              <div>Email: john.doe@example.com</div>
              <div>Phone: +1 (555) 123-4567</div>
              <div>Location: New York, NY</div>
              <div>Website: johndoe.com</div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Summary</h2>
              <p>Experienced software engineer with expertise in frontend development and a passion for creating intuitive user interfaces.</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Experience</h2>
              <div className="mb-4">
                <div className="flex justify-between">
                  <h3 className="font-bold">Senior Frontend Developer</h3>
                  <span>2018 - Present</span>
                </div>
                <div className="font-medium">Tech Company Inc.</div>
                <ul className="list-disc list-inside">
                  <li>Developed and maintained responsive web applications</li>
                  <li>Led a team of 5 frontend developers</li>
                  <li>Improved application performance by 40%</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Education</h2>
              <div className="mb-4">
                <div className="flex justify-between">
                  <h3 className="font-bold">Master of Computer Science</h3>
                  <span>2014 - 2016</span>
                </div>
                <div>University of Technology</div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">Skills</h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 px-2 py-1 rounded">JavaScript</span>
                <span className="bg-gray-200 px-2 py-1 rounded">React</span>
                <span className="bg-gray-200 px-2 py-1 rounded">TypeScript</span>
                <span className="bg-gray-200 px-2 py-1 rounded">HTML/CSS</span>
                <span className="bg-gray-200 px-2 py-1 rounded">Node.js</span>
                <span className="bg-gray-200 px-2 py-1 rounded">Git</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-white shadow-sm rounded-lg p-6" data-testid="export-options">
        <h2 className="text-xl font-semibold mb-4">Export Options</h2>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            Download as PDF
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors">
            Export LaTeX Source
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors">
            Print CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
