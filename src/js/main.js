import Homepage from './pages/homePage';
import BidsPage from './pages/bidsPage';
import Favourites from './pages/favourites';
import singleItemPage from './pages/singleItemPage';
import ErrorPage from './pages/errorPage';
import EventEmitter from './utils/EventEmitter';
import Favs from './favourites/favouritesModel';

const state = {
  results: [],
  emitter: new EventEmitter(),
  favourites: new Favs(),
};

// window.state = state

const routes = [
  { route: '/', component: Homepage },
  { route: 'bids', component: BidsPage },
  { route: 'favourites', component: Favourites },
  { route: 'item', component: singleItemPage },
  { route: 'error', component: ErrorPage },
];

function getComponentByPath(routes, page) {
  return routes.find(item => item.route === page)
}

function render() {
  const splitRoute = location.hash.split('/');
  let currentPage = splitRoute[0] === '' ? '/' : splitRoute[1];
  currentPage = currentPage === '' ? '/' : currentPage;

  state.routeParams = splitRoute[2] ? splitRoute[2] : '';

  const result = getComponentByPath(routes, currentPage)

  const { component = ErrorPage } = result || {};
  component(state)
}

window.addEventListener('load', render);
window.addEventListener('hashchange', render);