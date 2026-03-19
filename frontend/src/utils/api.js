const DEFAULT_API_BASE_URL = "http://localhost:5000/api";

export const API_BASE_URL = process.env.REACT_APP_API_URL || DEFAULT_API_BASE_URL;

async function request(path, { method = "GET", body, token, headers } = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(headers || {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const contentType = res.headers.get("content-type") || "";
  const payload = contentType.includes("application/json") ? await res.json() : await res.text();

  if (!res.ok) {
    const message = typeof payload === "string" ? payload : payload?.message;
    throw new Error(message || `Request failed: ${res.status}`);
  }

  return payload;
}

export async function register({ username, email, password }) {
  return request("/auth/register", {
    method: "POST",
    body: { username, email, password },
  });
}

export async function login({ email, password }) {
  return request("/auth/login", {
    method: "POST",
    body: { email, password },
  });
}

export async function searchTours({ city, distance, maxGroupSize }) {
  const params = new URLSearchParams();
  if (city) params.set("city", city);
  if (distance !== undefined && distance !== null) params.set("distance", String(distance));
  if (maxGroupSize !== undefined && maxGroupSize !== null) params.set("maxGroupSize", String(maxGroupSize));

  return request(`/tours/search?${params.toString()}`);
}
