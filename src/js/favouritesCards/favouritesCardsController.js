import FavouriteCards from './../favouritesCards/favouriteCardsModel';
import * as view from './../favouritesCards/favouritesCardsView'

export default async function (state) {
  const favouriteCards = new FavouriteCards(state.favourites.favs);
  await favouriteCards.getCards();

  view.renderFavouriteCards(favouriteCards.cards);
  addListenerToFav();

  function addListenerToFav() {
    Array.from(document.getElementsByClassName('card__like')).forEach(item => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        const currentId = event.target.closest('.card').dataset.id;

        state.favourites.toggleFav(currentId)

        view.toggleFavouriteIconFav(event.target.closest('.card__like'), state.favourites.isFav(currentId))
      })
    })
  }


}