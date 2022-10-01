import { makeAutoObservable } from "mobx";

export interface UserData {
  id: string;
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

  id = "";
  email = "";
  firstName = "";
  middleName = "";
  lastName = "";
  type = "";
  avatar = "";
  phoneNumber = "";

  setUserData = (userData: UserData) => {
    this.id = userData.id;
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
