import { Outlet } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../services';
import { AuthContext } from '../contexts';

const links = [
  {
    id: 0,
    path: 'all-tasks',
    text: 'All Tasks',
  },
  {
    id: 1,
    path: 'my-tasks',
    text: 'My Tasks',
    params: true,
  },
  {
    id: 2,
    path: 'create-task',
    text: 'Create Task',
  },
  // {
  //   id: 3,
  //   path: 'update-task',
  //   text: 'Update Task',
  //   params: true,
  // },
];

const Layout = () => {
  const [selected, setSelected] = useState(0);
  const authContext = useContext(AuthContext);

  const handleLogin = async () => {
    const res = await login('tungnt@softech.vn', '123456789');
    if (res && res.loggedInUser) {
      if (res.loggedInUser.isActive) {
        authContext?.setAuth({
          isAuthenticated: res.loggedInUser.isActive,
          user: {
            id: res.loggedInUser.id,
            email: res.loggedInUser.email
          }
        });
      }
    }
  };

  const handleLogout = () => {
    authContext?.setAuth((prev) => ({
      ...prev,
      isAuthenticated: false,
    }));
  };

  return (
    <div className="p-4">
      <h1 className="text-5xl font-bold text-center">To Do App</h1>
      <div className="flex flex-col gap-4">
        {authContext?.auth && authContext.auth.isAuthenticated ? (
          <>
            <button
              className="w-fit text-2xl text-white font-semibold rounded px-4 py-2 bg-blue-500 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
            <ul className="nav-bar flex items-center gap-6 text-2xl font-semibold box-border">
              {links.map((item) => {
                let path = item.path;
                path += item.params ? `/${authContext.auth.user.id}` : '';

                return (
                  <li
                    key={item.id}
                    className={`${
                      selected === item.id ? 'border-b-2' : ''
                    } border-indigo-600`}
                    onClick={() => setSelected(item.id)}
                  >
                    <Link to={path}>{item.text}</Link>
                  </li>
                );
              })}
            </ul>
            <Outlet />
          </>
        ) : (
          <button
            className="w-fit text-2xl text-white font-semibold rounded px-4 py-2 bg-blue-500 cursor-pointer"
            onClick={handleLogin}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Layout;
