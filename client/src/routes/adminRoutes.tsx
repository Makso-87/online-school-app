import { Routes, Route, useNavigate } from "react-router-dom";
import { AdminPanel } from "../pages/AdminPanel/AdminPanel";
import { useEffect } from "react";

export const AdminRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/admin");
  }, [navigate]);

  return (
    <Routes>
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="*" element={<AdminPanel />} />
    </Routes>
  );
};
