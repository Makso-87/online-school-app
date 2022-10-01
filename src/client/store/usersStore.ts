import { UserData } from "./userStore";
import { makeAutoObservable } from "mobx";

class UsersStore {
  constructor() {
    makeAutoObservable(this);
  }

  teachers: UserData[] = [];
  pupils: UserData[] = [];
  parents: UserData[] = [];
  admins: UserData[] = [];

  setTeachers = (newTeachers) => {
    this.teachers = [...newTeachers];
  };

  setPupils = (newPupils) => {
    this.pupils = [...newPupils];
  };

  setParents = (newParents) => {
    this.parents = [...newParents];
  };

  setAdmins = (newAdmins) => {
    this.admins = [...newAdmins];
  };
}

export default new UsersStore();
