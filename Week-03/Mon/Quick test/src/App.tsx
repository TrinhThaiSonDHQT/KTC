import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersProvider from './contexts';
import HomePage from './pages/HomePage';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import Layout from './components/Layout';

function App() {
  return (
    <UsersProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="users" element={<UserList />} />
            <Route path="users/:id" element={<UserDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UsersProvider>
  );
}

export default App;
