import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Users, 
  BarChart3, 
  Map, 
  Building2, 
  Stethoscope, 
  History, 
  Settings,
  X
} from 'lucide-react';

// Sidebar Component
const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/patients', label: 'Patients', icon: Users },
    { path: '/overview', label: 'Overview', icon: BarChart3 },
    { path: '/map', label: 'Map', icon: Map },
    { path: '/departments', label: 'Departments', icon: Building2 },
    { path: '/doctors', label: 'Doctors', icon: Stethoscope },
    { path: '/history', label: 'History', icon: History },
    { path: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-blue-600 text-white transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between p-4 border-b border-blue-500">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <button 
            onClick={onClose}
            className="lg:hidden text-white hover:text-blue-200"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="mt-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`
                  flex items-center px-4 py-3 text-left hover:bg-blue-700 transition-colors duration-200
                  ${isActive ? 'bg-blue-800 border-r-4 border-blue-200' : ''}
                `}
              >
                <Icon size={20} className="mr-3" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar