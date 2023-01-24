
import * as view from './listingView';

export default function (state) {
  view.render();

  state.results.forEach(item => {
    view.renderCard(item, state.favourites.isFav(item.id))
    addListenerToFav();
  })

  state.emitter.subscribe('event:render-listing', () => {
    view.clearListingContainer();
    state.results.forEach(item => {
      view.renderCard(item, state.favourites.isFav(item.id))
      addListenerToFav()
    })
  })

  function addListenerToFav() {
    Array.prototype.forEach.call(document.getElementsByClassName('card__like'), (item) => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        const currentId = event.target.closest('.card').dataset.id;

        state.favourites.toggleFav(currentId)

        view.toggleFavouriteIconFav(event.target.closest('.card__like'), state.favourites.isFav(currentId))
      })
    })
  }

}