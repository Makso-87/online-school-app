import { Routes, Route } from "react-router-dom";
import { AdminRoutes } from "./adminRoutes";
import { TeacherRoutes } from "./teacherRoutes";
import { PupilRoutes } from "./pupilRoutes";
import { ParentRoutes } from "./parentRoutes";
import { AuthPage } from "../pages/AuthPage/AuthPage";
import UserStore from "../store/userStore";

const routesMapping = {
  admin: () => <AdminRoutes />,
  teacher: () => <TeacherRoutes />,
  pupil: () => <PupilRoutes />,
  parent: () => <ParentRoutes />,
};

export const useRoutes = (isAuthenticated: boolean) => {
  const { type }: { type: string } = UserStore;
  if (isAuthenticated) {
    return routesMapping[type as keyof typeof routesMapping]();
  }

  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
    </Routes>
  );
};
