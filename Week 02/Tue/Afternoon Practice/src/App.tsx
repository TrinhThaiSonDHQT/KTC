import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import CategoryPage from './pages/CategoryPage';
import NoPage from './pages/NoPage';
import CustomerPage from './pages/CustomerPage';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="category" element={<CategoryPage />} />
          <Route path="customer" element={<CustomerPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route index element={<ProductPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
