import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/Footer';
import Homepage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductsCategoryPage from './pages/ProductsCategoryPage';
import AllProductsPage from './pages/AllProductsPage';
import DiscountProductsPage from './pages/DiscountProductsPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/productsCategory" element={<ProductsCategoryPage />} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/sales" element={<DiscountProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
