import { TeachersPage } from "../../components/TeachersPage/TeachersPage";
import PageStore from "../../store/pageStore";
import { useEffect } from "react";
import { graphQLClient } from "../../helpers/graphQlClient";
import { usersByType } from "../../graphql/queries/usersByType";
import UsersStore from "../../store/usersStore";

export const Teachers = () => {
  const { setCurrentPage } = PageStore;

  useEffect(() => {
    setCurrentPage({ slug: "teachers", title: "Учители" });
    graphQLClient
      .request(usersByType, {
        input: { type: "teacher" },
      })
      .then(({ usersByType: users }) => {
        UsersStore.setTeachers(users);
      });
  }, []);

  return <TeachersPage />;
};
