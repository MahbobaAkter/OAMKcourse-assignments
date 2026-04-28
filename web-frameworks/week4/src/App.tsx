import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductsView from "./components/ProductsView";
import ProductDetailsView from "./components/ProductDetailsView";
import CartView from "./components/CartView";
import "./App.css";

function NavigationBar() {
  return (
    <nav
     
    >
      <Link to="/">Products</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ProductsView />} />
        <Route path="/products/:id" element={<ProductDetailsView />} />
        <Route path="/cart" element={<CartView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
