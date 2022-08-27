import React from "react";
import { Redirect, Route, Routes } from "react-router-dom";
import { PupilsPage } from "../pages/PupilsPage";
import { CreatePage } from "../pages/CreatePage";
import { DetailsPage } from "../pages/DetailsPage";
import { AuthPage } from "../pages/AuthPage";
import { NotfoundPage } from "../pages/NotfoundPage";
import { MainPage } from "../pages/MainPage";

export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/authorization" exact element={<AuthPage />} />
        <Route path="/pupils" exact element={<PupilsPage />} />
        <Route path="/create" exact element={<CreatePage />} />
        <Route path="/details:id" exact element={<DetailsPage />} />
        <Route path="*" exact element={<NotfoundPage />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="*" element={<AuthPage />} />
    </Routes>
  );
};
