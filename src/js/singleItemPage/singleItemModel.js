export default class SingleItem {
  constructor(id) {
    this.id = id;
  }

  async getItem() {
    try {
      const queryString = `https://jsproject.webcademy.ru/items/${this.id}`
      const response = await fetch(queryString);
      const data = await response.json();
      this.result = await data;
    } catch (error) {
      alert(error)
    }
  }

  async sendForm(formData) {
    try {
      const queryString = 'https://jsproject.webcademy.ru/bidnew';
      const response = await fetch(queryString, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      this.answer = await data
    } catch (error) {
      alert(error)
    }
  }
}