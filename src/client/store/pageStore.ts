import { makeAutoObservable } from 'mobx';

export type CurrentPage = {
  slug: string;
  title: string;
};

export type CurrentCategory = {
  slug: string;
  title: string;
};

export interface PageData {
  currentPage: CurrentPage;
  currentCategory: CurrentCategory;
  setCurrentPage: (string) => void;
  setCurrentCategory: (string) => void;
}

class PageStore implements PageData {
  constructor() {
    makeAutoObservable(this);
  }

  currentPage = {
    slug: '',
    title: '',
  };

  currentCategory = {
    slug: '',
    title: '',
  };

  setCurrentPage = (page: CurrentPage) => {
    this.currentPage = page;
  };

  setCurrentCategory = (category: CurrentCategory) => {
    this.currentCategory = category;
  };
}

export default new PageStore();
