import SingleItem from './../singleItemPage/singleItemModel';
import * as view from './singleItemView';

export default async function (state) {
  state.singleItem = new SingleItem(state.routeParams);
  await state.singleItem.getItem();
  view.render(state.singleItem.result);
  console.log('state', state.singleItem.result);

  document.querySelector('.button-order').addEventListener('click', () => {
    view.showModal();
  })

  document.querySelector('.modal__close').addEventListener('click', () => {
    view.hideModal();
  })

  document.querySelector('.modal-wrapper').addEventListener('click', (event) => {
    if (event.target.closest('.modal')) {
      return
    } else {
      view.hideModal();
    }
  })
}