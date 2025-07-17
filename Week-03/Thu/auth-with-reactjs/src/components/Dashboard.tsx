import { useEffect } from 'react';
import { useStore } from '../utils/AuthStore';
import Header from './Header';
import TaskDetailModal from './TaskDetailModal';
import TaskList from './TaskList';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const user = useStore((state) => state.loggedInUser);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <TaskList />
        </div>
      </main>

      <TaskDetailModal />
    </div>
  );
};

export default Dashboard;
