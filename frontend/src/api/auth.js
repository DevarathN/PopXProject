<<<<<<< HEAD
const API = "http://localhost:5000/api/auth";

export const signup = async (
  name,
  phoneNumber,
  email,
  password,
  companyName,
) => {
  const res = await fetch(`${API}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phoneNumber, email, password, companyName }),
  });
  return res.json();
};

export const login = async (email, password) => {
  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};
export const getProfile = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};
=======
const API = import.meta.env.VITE_API_URL;

export const signup = async (
  name,
  phoneNumber,
  email,
  password,
  companyName,
) => {
  const res = await fetch(`${API}/api/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phoneNumber, email, password, companyName }),
  });
  return res.json();
};

export const login = async (email, password) => {
  const res = await fetch(`${API}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};
export const getProfile = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API}/api/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};
>>>>>>> ec606bc0b8c29c88b9511a1cc2d2baf30b8e2673
