import homepage from './pages/homePage';
import favourites from './pages/favourites';
import singleItem from './pages/singleItemPage';
import erorr from './pages/errorPage';


console.log(1111)

const routes = [
  { route: '/', name: 'Homepage' },
  { route: 'bids', name: 'BidsPage' },
  { route: 'favourites', name: 'Favourites' },
  { route: 'singleItem', name: 'singleItemPage' },
  { route: 'error', name: 'ErrorPage' },
];

function getPageRoute(routes, pageName) {
  const currentRoute = routes.filter(route => {
    if (route.name === pageName) {
      return true
    }
  });

  return currentRoute[0].route
}

console.log(getPageRoute(routes, 'Favourites'))

const menu = document.querySelector('#app ul');
menu.addEventListener('click', changePage)

function changePage(event) {
  const target = event.target;
  if (target.tagName === 'A') {
    event.preventDefault();
    console.log('location', window.location.hash)
    console.log(target)
  }
}