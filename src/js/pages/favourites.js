import favouritesCard from './../favouritesCards/favouritesCardsController';

export default function (state) {

  document.querySelector('#app').innerHTML = '';
  favouritesCard(state);

}