import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoPage from './components/NoPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="*" element={<NoPage />} />
        {/* <Route path="/tasks" element={<Tasks />} />
             <Route path="/customer" element={<Customer />} />
             <Route path="/access-denied" element={<AccessDenied />} />
             */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
