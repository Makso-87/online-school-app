import { PupilsPage } from "../../components/PupilsPage/PupilsPage";
import PageStore from "../../store/pageStore";
import { useEffect } from "react";

export const Pupils = () => {
  const { setCurrentPage } = PageStore;

  useEffect(() => {
    setCurrentPage({ slug: "pupils", title: "Ученики" });
  }, []);

  return <PupilsPage />;
};
