const Order = require("../models/Order");
const Cart = require("../models/Cart");
console.log(require.resolve("../models/Order"));

console.log("Order=", Order);
console.log("Type=", typeof Order);

const createOrder = async (req, res) => {
  try {
    const cartItems = await Cart.find({
      user: req.user.id,
    }).populate("product");
    console.log(cartItems);

    if (cartItems.length === 0) {
      return res.status(400).json({
        message: "Cart is empty",
      });
    }

    const products = cartItems.map((item) => ({
      product: item.product._id,
      quantity: item.quantity,
    }));

    const totalAmount = cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );

    const order = await Order.create({
      user: req.user.id,
      products,
      totalAmount,
    });

    await Cart.deleteMany({
      user: req.user.id,
    });

    res.status(201).json({
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user.id
    }).populate("products.product");

    res.status(200).json(orders);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: "Order not found"
      });
    }

    order.status = req.body.status;

    await order.save();

    res.status(200).json({
      message: "Order status updated",
      order
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  createOrder,
  getOrders,
  updateOrderStatus
};
