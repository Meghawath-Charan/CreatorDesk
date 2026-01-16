import { useState } from "react";
import { authService } from "../services/appwrite/auth";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await authService.signup(email, password, name);
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form
        onSubmit={handleSignup}
        className="bg-gray-800 p-6 rounded-lg space-y-4 w-80"
      >
        <h1 className="text-2xl font-bold">Signup</h1>

        <input
          placeholder="Name"
          className="w-full px-3 py-2 bg-gray-700 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 bg-gray-700 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 bg-gray-700 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full py-2 bg-green-600 rounded">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Signup;
