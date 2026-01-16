import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import CreateContent from "../pages/CreateContent";
import Drafts from "../pages/Drafts";
import Published from "../pages/Published";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/" element={<Dashboard />} />
      <Route path="/create" element={<CreateContent />} />
      <Route path="/drafts" element={<Drafts />} />
      <Route path="/published" element={<Published />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default AppRoutes;
