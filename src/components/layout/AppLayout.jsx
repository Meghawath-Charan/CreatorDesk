import Sidebar from "../navigation/Sidebar";
import TopNavbar from "../navbar/TopNavbar";

const AppLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-1 flex flex-col">
        <TopNavbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;
