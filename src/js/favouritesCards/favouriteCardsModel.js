export default class FavouriteCards {
  constructor(idsList) {
    this.idsList = idsList;
  }

  async getCards() {
    const ids = this.idsList.split('').join(',')
    console.log(ids)
    const queryString = `https://jsproject.webcademy.ru/items?${ids}`
  }
}