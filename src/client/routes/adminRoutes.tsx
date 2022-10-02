import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AdminPanel } from "../pages/adminPanel/AdminPanel";
import { useEffect } from "react";
import { Layout } from "../components/Layout/Layout";
import { Teachers } from "../pages/teachers/Teachers";
import { Pupils } from "../pages/pupils/Pupils";
import { Parents } from "../pages/parents/Parents";
import { CreateTeacher } from "../pages/teachers/createTeacher/CreateTeacher";
import { Teacher } from "../pages/teachers/teacher/Teacher";
import { Profile } from "../pages/profile/Profile";

export const AdminRoutes = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname === "/" ? "/admin" : pathname;
    navigate(path, { replace: true });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="admin" element={<AdminPanel />} />
        <Route path="admin/teachers" element={<Teachers />} />
        <Route path="admin/profile" element={<Profile />} />
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
