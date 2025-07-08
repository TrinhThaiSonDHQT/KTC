import { Outlet, Link } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";

const Layout = () => {
  return (
    <>
      <nav className="flex items-center justify-between px-9 py-3 text-white font-bold bg-orange-500">
        <div>
          <Link to="/" className="text-3xl">
            Magazines
          </Link>
        </div>
        <ul className="flex items-center justify-between gap-4 text-lg font-semibold">
          <li>
            <Link to="/homepage">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blog</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/" className='text-slate-700'>Product</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/customer">Customer</Link>
          </li>
          <li>
            <Link to="/" className='flex items-center gap-2 bg-white px-3 py-1 rounded text-orange-500'>
            <FaCartPlus />
            <span>0</span>
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
