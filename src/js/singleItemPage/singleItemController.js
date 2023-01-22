import SingleItem from './../singleItemPage/singleItemModel';
import * as view from './../singleItemPage/sungleItemView';

export default async function (state) {
  state.singleItem = new SingleItem(state.routeParams);
  await state.singleItem.getItem();
  view.render(state.singleItem.result);
  console.log('state', state.singleItem.result)
}