import { useEffect } from "react";
import { ProfilePage } from "../../components/ProfilePage/ProfilePage";
import PageStore from "../../store/pageStore";

export const Profile = () => {
  const { setCurrentPage } = PageStore;

  useEffect(() => {
    setCurrentPage({ slug: "profile", title: "Профиль" });
  }, []);

  return <ProfilePage />;
};
