import FavouriteCards from './../favouritesCards/favouriteCardsModel';

export default function (state) {
  state.favourites.favsCards = new FavouriteCards(state.favourites.favs);

}