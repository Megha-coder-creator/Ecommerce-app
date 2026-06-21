const API_URL = "http://localhost:5000/api/orders";

export const placeOrder = async (token) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: token,
    },
  });

  return await response.json();
};

export const getOrders = async (token) => {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: token,
    },
  });

  return await response.json();
};