import { makeAutoObservable } from 'mobx';

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

class UserStore {
  constructor() {
    makeAutoObservable(this);
  }

  private id = '';
  private email = '';
  private firstName = '';
  private middleName = '';
  private lastName = '';
  private type = '';
  private avatar = '';
  private phoneNumber = '';

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

  getUserData = () => {
    return {
      id: this.id,
      email: this.email,
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      type: this.type,
      avatar: this.avatar,
      phoneNumber: this.phoneNumber,
    };
  };
}

export default new UserStore();
