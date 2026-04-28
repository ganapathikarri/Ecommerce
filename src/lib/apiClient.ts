import axios from "axios";

/**
 * Axios instance configured to talk to your Spring Boot backend.
 * Set VITE_API_BASE_URL in .env (e.g. http://localhost:8080/api).
 *
 * Add auth headers / interceptors here when you wire JWT later.
 */
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api",
  headers: { "Content-Type": "application/json" },
  timeout: 15000,
});

apiClient.interceptors.response.use(
  (res) => res,
  (err) => {
    // Centralized error logging — replace with toast/Sentry as needed.
    console.error("[API ERROR]", err?.response?.status, err?.message);
    return Promise.reject(err);
  }
);

export const USE_MOCK_API =
  (import.meta.env.VITE_USE_MOCK_API ?? "true") === "true";
