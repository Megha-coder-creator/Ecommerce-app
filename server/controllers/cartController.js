const Cart = require("../models/Cart");

const addToCart = async (req, res) => {
    try {
        const cartItem = await Cart.create({
            user: req.user.id,
            product: req.body.product,
            quantity: req.body.quantity || 1
        });

        res.status(201).json({
            message: "Product added to cart",
            cartItem
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
const getCart = async (req, res) => {
  try {
    const cartItems = await Cart.find({
      user: req.user.id
    }).populate("product");

    res.json(cartItems);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
const removeFromCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.json({
      message: "Item removed from cart"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
    addToCart,
    getCart,
    removeFromCart
};