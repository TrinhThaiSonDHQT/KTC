import { LogOut, User, Shield } from 'lucide-react';
import { useStore } from '../utils/AuthStore';

const Header: React.FC = () => {
  const user = useStore((state) => state.loggedInUser);
  const logout = useStore((state) => state.logOut);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">
              Task Management Dashboard
            </h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-700">
              <User size={16} className="mr-2" />
              <span>{user?.email}</span>
              {user?.roles.find((role) => role.name === 'Administrators') && (
                <Shield size={16} className="ml-2 text-blue-600" />
              )}
            </div>

            <button
              onClick={logout}
              className="flex items-center text-sm text-gray-700 hover:text-gray-900"
            >
              <LogOut size={16} className="mr-1" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
