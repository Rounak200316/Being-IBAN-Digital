import {
  createContext,
  useState,
  useEffect,
} from "react";

import axios from "axios";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [token, setToken] = useState(
    localStorage.getItem("token") || ""
  );

  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("user");

      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.log("Invalid stored user");

      localStorage.removeItem("user");

      return null;
    }
  });

  const [loading, setLoading] = useState(true);

  // ==========================================
  // SAVE AUTHENTICATION
  // ==========================================

  const saveAuth = (newToken, newUser) => {
    localStorage.setItem("token", newToken);
    localStorage.setItem("user", JSON.stringify(newUser));

    setToken(newToken);
    setUser(newUser);
  };

  // ==========================================
  // REGISTER
  // ==========================================

  const register = async (name, email, password) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/user/register`,
        {
          name,
          email,
          password,
        }
      );

      if (response.data.success) {
        saveAuth(
          response.data.token,
          response.data.user
        );

        return {
          success: true,
        };
      }

      return {
        success: false,
        message:
          response.data.message ||
          "Registration failed",
      };
    } catch (error) {
      console.log("Register error:", error);

      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Registration failed. Please try again.",
      };
    }
  };

  // ==========================================
  // LOGIN
  // ==========================================

  const login = async (email, password) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/user/login`,
        {
          email,
          password,
        }
      );

      if (response.data.success) {
        saveAuth(
          response.data.token,
          response.data.user
        );

        return {
          success: true,
        };
      }

      return {
        success: false,
        message:
          response.data.message ||
          "Login failed",
      };
    } catch (error) {
      console.log("Login error:", error);

      return {
        success: false,
        message:
          error.response?.data?.message ||
          "Login failed. Please try again.",
      };
    }
  };

  // ==========================================
  // LOGOUT
  // ==========================================

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken("");
    setUser(null);
  };

  // ==========================================
  // RESTORE AUTH ON APP LOAD
  // ==========================================

  useEffect(() => {
    const storedToken =
      localStorage.getItem("token");

    const storedUser =
      localStorage.getItem("user");

    if (storedToken) {
      setToken(storedToken);
    }

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.log("Invalid stored user");

        localStorage.removeItem("user");
        setUser(null);
      }
    }

    setLoading(false);
  }, []);

  // ==========================================
  // CONTEXT VALUE
  // ==========================================

  const value = {
    token,

    user,

    loading,

    isAuthenticated: Boolean(token),

    register,

    login,

    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;