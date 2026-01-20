import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClass =
    "block px-4 py-2 rounded hover:bg-blue-600 hover:text-white";

  return (
    <aside className="w-64 bg-blue-700 text-white p-4">
      <h1 className="text-xl font-bold mb-6">CreatorDesk</h1>

      <nav className="space-y-2">
        <NavLink to="/" className={linkClass}>Dashboard</NavLink>
        <NavLink to="/create" className={linkClass}>Create Content</NavLink>
        <NavLink to="/drafts" className={linkClass}>Drafts</NavLink>
        <NavLink to="/published" className={linkClass}>Published</NavLink>
        <NavLink to="/profile" className={linkClass}>Profile</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
