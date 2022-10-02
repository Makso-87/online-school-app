import { useLocation } from "react-router-dom";

export const useCurrentRoutPath = () => {
  const { pathname } = useLocation();
  return pathname;
};
