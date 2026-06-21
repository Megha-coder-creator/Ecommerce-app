import { Routes, Route, Link } from "react-router-dom";

import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import OrdersPage from "./pages/OrdersPage";
import "./styles/App.css";
function App() {
  return (
    <div>
      <nav style={{ padding: "20px" }}>
        <Link to="/products">Products</Link>{" | "}
        <Link to="/cart">Cart</Link>{" | "}
        <Link to="/orders">Orders</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<OrdersPage />} />
      </Routes>
    </div>
  );
}

export default App;