import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { SideBar } from "../SideBar/SideBar";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <SideBar />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
