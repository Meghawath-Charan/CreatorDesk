import AppLayout from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <AppLayout>
      <h1 style={{ color: "red", fontSize: "32px" }}>
        CREATOR DESK IS WORKING
      </h1>
      <Dashboard />
    </AppLayout>
  );
}

export default App;
