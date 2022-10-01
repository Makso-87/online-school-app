import { makeAutoObservable } from "mobx";

export interface AuthStoreInterface {
  token?: string;
  userId?: string;
  isAuthentication?: boolean;
  logIn?: (token: string, userId: string) => void;
  logOut?: () => void;
}

class AuthStore implements AuthStoreInterface {
  constructor() {
    makeAutoObservable(this);
  }

  token: string = "";
  userId: string = "";
  isAuthentication = false;

  logIn = (token: string, userId: string) => {
    this.token = token;
    this.userId = userId;
    this.isAuthentication = true;
  };

  logOut = () => {
    this.token = "";
    this.userId = "";
    this.isAuthentication = false;
  };
}

export default new AuthStore();
