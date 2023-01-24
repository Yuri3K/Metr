import SingleItem from './../singleItemPage/singleItemModel';
import * as view from './singleItemView';

export default async function (state) {

  state.singleItem = new SingleItem(state.routeParams);
  await state.singleItem.getItem();
  view.render(state.singleItem.result, state.favourites.isFav(state.singleItem.id));
  console.log('state', state.singleItem.result);

  // Open pop-up
  document.querySelector('.button-order').addEventListener('click', () => {
    view.showModal();
  })

  // Close pop-up when ckick was on button close
  document.querySelector('.modal__close').addEventListener('click', () => {
    view.hideModal();
  })

  // Close pop-up when ckick was on overlay
  document.querySelector('.modal-wrapper').addEventListener('click', (event) => {
    if (event.target.closest('.modal')) {
      return
    } else {
      view.hideModal();
    }
  })

  // Send form to server
  document.querySelector('.modal__submit').addEventListener('click', async (event) => {
    event.preventDefault()
    const formData = view.getInput();
    await state.singleItem.sendForm(formData);


    // Process answer from server after Send form
    if (state.singleItem.answer.message === 'Bid Created') {
      alert('Ваша заявка принята');
      view.hideModal();
      view.clearForm();
    } else if (state.singleItem.answer.message === 'Bid Not Created') {
      state.singleItem.answer.errors.forEach(item => {
        alert(item)
      })
    }

  })

  // Add to favourites. Add/remove class active for button favourites
  document.querySelector('#addToFavsBtn').addEventListener('click', () => {
    state.favourites.toggleFav(state.singleItem.id)
    view.toggleClassOfFavsBtn(state.favourites.isFav(state.singleItem.id))
  })

}