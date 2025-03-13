import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <NavLink
              to="/"
              className="text-xl font-bold text-gray-800"
              data-testid="navbar-logo"
            >
              LaTeX CV Builder
            </NavLink>
          </div>
          <div className="flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${isActive
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`
              }
              data-testid="navbar-home"
            >
              Home
            </NavLink>
            <NavLink
              to="/editor"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${isActive
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`
              }
              data-testid="navbar-editor"
            >
              Editor
            </NavLink>
            <NavLink
              to="/preview"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${isActive
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`
              }
              data-testid="navbar-preview"
            >
              Preview
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
