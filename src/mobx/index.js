import { makeAutoObservable } from "mobx";

className Timer {
  id_category      = 2;
  array_categories = [];
  array_cats       = [];

  constructor() {
    makeAutoObservable(this);
  }

  getCategories() {
    fetch("https://api.thecatapi.com/v1/categories")
      .then(response => response.json())
      .then(json => this.array_categories = json)
      .catch(err => console.error(err));
  }
  getCats(id = this.id_category) {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=" + id)
      .then(response => response.json())
      .then(json => this.array_cats = this.array_cats.concat(json))
      .catch(err => console.error(err));
  }
  setIdCategory(id) {
    this.id_category = id;
    this.getCats(this.id_category);
  }
}


export const store = new Timer();