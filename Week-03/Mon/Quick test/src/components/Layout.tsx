import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <nav>
      <ul className="flex items-center gap-4 p-3">
        <li className="bg-green-500 px-4 py-2 rounded-xl text-white font-semibold">
          <Link to="/">Click to Home page</Link>
        </li>
        <li className="bg-blue-500 px-4 py-2 rounded-xl text-white font-semibold">
          <Link to="users">Click to Users Page</Link>
        </li>
        {/* <li className="bg-gray-500 px-4 py-2 rounded-xl text-white font-semibold">
          <Link to="users/:id">Click to User Page</Link>
        </li> */}
      </ul>

      <Outlet />
    </nav>
  );
};

export default Layout;
