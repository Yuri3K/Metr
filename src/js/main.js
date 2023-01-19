import homepage from './pages/homePage';
import bids from './pages/bidsPage';
import favourites from './pages/favourites';
import singleItem from './pages/singleItemPage';
import erorr from './pages/errorPage';


console.log(1111)

const routes = [
  { route: '/', component: 'Homepage' },
  { route: 'bids', component: 'BidsPage' },
  { route: 'favourites', component: 'Favourites' },
  { route: 'singleItem', component: 'singleItemPage' },
  { route: 'error', component: 'ErrorPage' },
];

function getRoute(event) {
  const splitRoute = window.location.hash.split('/');
  let currentPage = splitRoute[1] === '' ? '/' : splitRoute[1];
  console.log('currentPage', currentPage)
}
// getRoute()

function renderPageByRoute() {

}

// document.addEventListener('load', renderPageByRoute);
document.addEventListener('hashchange', getRoute);