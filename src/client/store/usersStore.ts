import { UserData } from './userStore';
import { makeAutoObservable } from 'mobx';

class UsersStore {
  constructor() {
    makeAutoObservable(this);
  }

  teachers: UserData[] = [];
  pupils: UserData[] = [];
  parents: UserData[] = [];
  admins: UserData[] = [];

  setTeachers = (newTeachers: UserData[]) => {
    this.teachers = [...newTeachers];
  };

  setPupils = (newPupils: UserData[]) => {
    this.pupils = [...newPupils];
  };

  setParents = (newParents: UserData[]) => {
    this.parents = [...newParents];
  };

  setAdmins = (newAdmins: UserData[]) => {
    this.admins = [...newAdmins];
  };
}

export default new UsersStore();
