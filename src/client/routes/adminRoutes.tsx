import { Routes, Route, useNavigate } from "react-router-dom";
import { AdminPanel } from "../pages/adminPanel/AdminPanel";
import { useEffect } from "react";
import { Layout } from "../components/Layout/Layout";
import { Teachers } from "../pages/teachers/Teachers";
import { Pupils } from "../pages/pupils/Pupils";
import { Parents } from "../pages/parents/Parents";
import { CreateTeacher } from "../pages/teachers/createTeacher/CreateTeacher";
import { Teacher } from "../pages/teachers/teacher/Teacher";

export const AdminRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/admin");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="admin" element={<AdminPanel />} />
        <Route path="admin/teachers" element={<Teachers />} />
        <Route
          path="admin/teachers/createTeacher"
          element={<CreateTeacher />}
        />
        <Route path="admin/teachers/teacher/:id" element={<Teacher />} />
        <Route path="admin/pupils" element={<Pupils />} />
        <Route path="admin/parents" element={<Parents />} />
        <Route path="*" element={<AdminPanel />} />
      </Route>
    </Routes>
  );
};
