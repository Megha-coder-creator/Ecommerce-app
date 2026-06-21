const API_URL = "http://localhost:5000/api/cart";

export const getCartItems = async (token) => {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: token,
    },
  });

  return await response.json();
};

export const addToCart = async (productId, token) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      product: productId,
      quantity: 1,
    }),
  });

  return await response.json();
};

export const removeFromCart = async (id, token) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });

  return await response.json();
};