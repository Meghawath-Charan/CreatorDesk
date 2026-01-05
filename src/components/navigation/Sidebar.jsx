import { NavLink } from "react-router-dom";

function Sidebar() {
  const baseClass =
    "block px-3 py-2 rounded hover:bg-gray-700 hover:text-white";

  return (
    <aside className="w-64 bg-gray-800 border-r border-gray-700 p-6">
      <h1 className="text-2xl font-bold mb-10">CreatorDesk</h1>

      <nav className="space-y-2 text-gray-300">
        <NavLink to="/" className={baseClass}>Dashboard</NavLink>
        <NavLink to="/create" className={baseClass}>Create Content</NavLink>
        <NavLink to="/drafts" className={baseClass}>Drafts</NavLink>
        <NavLink to="/published" className={baseClass}>Published</NavLink>
        <NavLink to="/profile" className={baseClass}>Profile</NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
