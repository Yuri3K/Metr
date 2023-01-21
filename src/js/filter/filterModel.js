export default class Filter {
  constructor() {
    this.query = '';
  }

  async getParams() {
    try {
      const queryString = 'https://jsproject.webcademy.ru/itemsinfo';
      const responce = await fetch(queryString);
      const data = await responce.json();
      this.params = data;
    } catch (error) {
      alert(error)
    }
  }

  async getResults() {
    try {
      const queryString = `https://jsproject.webcademy.ru/items${this.query}`;
      const responce = await fetch(queryString);
      const data = await responce.json();
      this.result = data;
    } catch (error) {
      alert(error)
    }
  }

}