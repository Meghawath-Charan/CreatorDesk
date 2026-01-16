import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/appwrite/auth";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((u) => setUser(u))
      .catch(() => setUser(null));
  }, []);

  const handleLogout = async () => {
    try {
      await authService.logout();
    } catch (err) {
      console.warn("Logout failed:", err.message || err);
    } finally {
      navigate("/login");
    }
  };

  const testLogin = async () => {
    try {
      const session = await authService.login(
        "testuser@gmail.com",
        "password123"
      );
      console.log("Login success:", session);
    } catch (err) {
      console.log("Login error:", err.message || err);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      {user ? (
        <div className="mb-4">
          <p className="mb-2">Logged in as: {user.email || user.name}</p>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="mb-4">
          <p className="mb-2">No user logged in</p>
          <button
            onClick={testLogin}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Test Login
          </button>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
