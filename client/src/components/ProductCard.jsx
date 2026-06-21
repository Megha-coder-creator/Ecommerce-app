import { addToCart } from "../services/cartService";
function ProductCard({ product }) {
    const handleAddToCart = async () => {
        const token = localStorage.getItem("token");

        const result = await addToCart(product._id, token);

        alert(result.message || "Added to cart");
    };
    return (
        <div className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>₹{product.price}</h3>

            <button onClick={handleAddToCart}>
                Add To Cart</button>
        </div>
    );
}

export default ProductCard;

