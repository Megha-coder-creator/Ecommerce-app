import { useEffect, useState } from "react";
import { getOrders } from "../services/orderService";

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem("token");

      const data = await getOrders(token);
      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>My Orders</h1>

      {orders.map((order) => (
        <div
          key={order._id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            margin: "10px",
            borderRadius: "10px",
          }}
        >
          <h3>Total Amount: ₹{order.totalAmount}</h3>
          <p>Status: {order.status}</p>

          {order.products.map((item) => (
            <div key={item._id}>
              <p>{item.product.name}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default OrdersPage;