import { useEffect, useState } from "react";
import { getCartItems, removeFromCart } from "../services/cartService";
import { placeOrder } from "../services/orderService";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  const token = localStorage.getItem("token");

  const fetchCart = async () => {
    const data = await getCartItems(token);
    setCartItems(data);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleRemove = async (id) => {
    await removeFromCart(id, token);
    fetchCart();
  };

  const handlePlaceOrder = async () => {
  const token = localStorage.getItem("token");

  const result = await placeOrder(token);

  alert(result.message || "Order placed successfully");

  fetchCart();
};

  return (
    <div>
      <h1>My Cart</h1>

      {cartItems.map((item) => (
        <div
          key={item._id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            margin: "10px",
            borderRadius: "10px",
          }}
        >
          <h2>{item.product?.name}</h2>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => handleRemove(item._id)}>
            Remove
          </button>
        </div>
      ))}
      <button onClick={handlePlaceOrder}>
        Place Order</button>
    </div>
  );
}

export default CartPage;