export default class Favourites {
  constructor() {
    this.favs = [];
    this.readStorage();
  }

  addFav(id) {
    this.favs.push(id);
    this.saveToLS();
  }

  removeFav(id) {
    const index = this.favs.indexOf(id);
    if (index !== -1) this.favs.splice(index, 1);
    this.saveToLS();
  }

  isFav(id) {
    return this.favs.indexOf(id) !== -1 ? true : false;
  }

  toggleFav(id) {
    this.isFav(id) ? this.removeFav(id) : this.addFav(id);
  }

  saveToLS() {
    localStorage.setItem('favs', JSON.stringify(this.favs))
  }

  readStorage() {
    const storageFavs = JSON.parse(localStorage.getItem('favs'));
    if (storageFavs) {
      this.favs = storageFavs;
    }
  }
}