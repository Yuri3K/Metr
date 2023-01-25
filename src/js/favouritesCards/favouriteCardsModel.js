export default class FavouriteCards {
  constructor(idsList) {
    this.idsList = idsList;
  }

  async getCards() {
    try {
      const ids = this.idsList.join(',');
      const queryString = `https://jsproject.webcademy.ru/items?ids=${ids}`
      const response = await fetch(queryString);
      const data = await response.json();
      this.cards = await data;
    } catch (error) {
      alert(error)
    }
  }
}