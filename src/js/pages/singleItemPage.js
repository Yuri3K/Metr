import singleItem from './../singleItemPage/singleItemController'

export default function (state) {

  document.querySelector('#app').innerHTML = '';
  singleItem(state)

}