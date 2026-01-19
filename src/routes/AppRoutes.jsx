import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import CreateContent from "../pages/CreateContent";
import Drafts from "../pages/Drafts";
import Published from "../pages/Published";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import AppLayout from "../components/layout/AppLayout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />

      {/* PROTECTED ROUTES */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AppLayout>
              <Dashboard />
            </AppLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/create"
        element={
          <ProtectedRoute>
            <AppLayout>
              <CreateContent />
            </AppLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/drafts"
        element={
          <ProtectedRoute>
            <AppLayout>
              <Drafts />
            </AppLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/published"
        element={
          <ProtectedRoute>
            <AppLayout>
              <Published />
            </AppLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <AppLayout>
              <Profile />
            </AppLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
