import { ParentsPage } from "../../components/ParentsPage/ParentsPage";
import PageStore from "../../store/pageStore";
import { useEffect } from "react";

export const Parents = () => {
  const { setCurrentPage } = PageStore;

  useEffect(() => {
    setCurrentPage({ slug: "parents", title: "Родители" });
  }, []);

  return <ParentsPage />;
};
