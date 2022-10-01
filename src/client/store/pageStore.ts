import { makeAutoObservable } from "mobx";

export type CurrentPage = {
  slug: string;
  title: string;
};

export interface PageData {
  currentPage: CurrentPage;
  setCurrentPage: (string) => void;
}

class PageStore implements PageData {
  constructor() {
    makeAutoObservable(this);
  }
  currentPage = {
    slug: "",
    title: "",
  };

  setCurrentPage = (page: CurrentPage) => {
    this.currentPage = page;
  };
}

export default new PageStore();
