import { makeAutoObservable } from "mobx";

export interface UserData {
  email: string;
  firstName: string;
  middleName: string;
  lastName: string;
  type: string;
  avatar: string;
  phoneNumber: string;
}

class UserStore implements UserData {
  constructor() {
    makeAutoObservable(this);
  }

  email = "";
  firstName = "";
  middleName = "";
  lastName = "";
  type = "";
  avatar = "";
  phoneNumber = "";

  setUserData = (userData: UserData) => {
    this.email = userData.email;
    this.firstName = userData.firstName;
    this.middleName = userData.middleName;
    this.lastName = userData.lastName;
    this.type = userData.type;
    this.avatar = userData.avatar;
    this.phoneNumber = userData.phoneNumber;
  };
}

export default new UserStore();
