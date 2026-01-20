import { useAuth } from "../../context/AuthContext";

const TopNavbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow px-6 py-3 flex justify-between items-center">
      <h2 className="font-semibold text-lg">Creator Dashboard</h2>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">{user?.email}</span>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default TopNavbar;
