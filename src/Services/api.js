const BASE_URL = "https://dummyjson.com";

export const getUsers = async () => {
  const res = await fetch(`${BASE_URL}/users?limit=50`);
  return res.json();
};

export const getUserById = async (id) => {
  const res = await fetch(`${BASE_URL}/users/${id}`);
  return res.json();
};