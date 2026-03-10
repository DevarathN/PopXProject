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

