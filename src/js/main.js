import Homepage from './pages/homePage';
import BidsPage from './pages/bidsPage';
import Favourites from './pages/favourites';
import singleItemPage from './pages/singleItemPage';
import ErrorPage from './pages/errorPage';

const routes = [
  { route: '/', component: Homepage },
  { route: 'bids', component: BidsPage },
  { route: 'favourites', component: Favourites },
  { route: 'singleItemPage', component: singleItemPage },
  { route: 'error', component: ErrorPage },
];

function getRoute(routes, page) {
  return routes.find(item => item.route === page)
}

function renderPageByRoute() {
  const splitRoute = location.hash.split('/');
  let currentPage = splitRoute[1] === '' ? '/' : splitRoute[1];
  currentPage = !currentPage ? '/' : currentPage;

  const result = getRoute(routes, currentPage)

  const { component = ErrorPage } = result || {};
  component.render()
  console.log('component', component)
}

window.addEventListener('load', renderPageByRoute);
window.addEventListener('hashchange', renderPageByRoute);