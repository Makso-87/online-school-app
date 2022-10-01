import { UserItemPage } from "../../../components/UserItemPage/UserItemPage";
import { useEffect } from "react";
import PageStore from "../../../store/pageStore";

export const Teacher = () => {
  useEffect(() => {
    PageStore.setCurrentPage({ slug: "teacher", title: "Карточка учителя" });
  }, []);

  return <UserItemPage />;
};
