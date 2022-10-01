import { CreateTeacherPage } from "../../../components/CreateTeacherPage/CreateTeacherPage";
import PageStore from "../../../store/pageStore";
import { useEffect } from "react";

export const CreateTeacher = () => {
  const { setCurrentPage } = PageStore;
  useEffect(() => {
    setCurrentPage({
      slug: "add_new_teacher",
      title: "Добавление нового учителя",
    });
  }, []);

  return <CreateTeacherPage />;
};
