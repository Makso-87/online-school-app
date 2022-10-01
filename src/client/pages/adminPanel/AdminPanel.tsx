import React, { useEffect } from "react";
import { AdminPanelPage } from "../../components/AdminPanelPage/AdminPanelPage";
import PageStore from "../../store/pageStore";

export const AdminPanel = () => {
  const { setCurrentPage } = PageStore;

  useEffect(() => {
    setCurrentPage({ slug: "admin_panel", title: "Панель администратора" });
  }, []);

  return <AdminPanelPage />;
};
