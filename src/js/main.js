import homePage from './pages/homePage';
import singleItem from './pages/singleItemPage';
import favouritesPage from './pages/favourites';
import bidsPage from './pages/bidsPage';
import errorPage from './pages/errorPage';

const state = {};

window.state = state;

const routes = [
  { path: "/", component: homePage },
  { path: "item", component: singleItem },
  { path: "favourites", component: favouritesPage },
  { path: "bids", component: bidsPage },
  { path: "error", component: errorPage },
];

function findComponentByPath(path, routes) {
  return routes.find(item => item.path === path);
}

function router() {
  const pathArray = location.hash.split("/");

  let currentPath = pathArray[0] === "" ? "/" : pathArray[1];
  currentPath = currentPath === "" ? "/" : currentPath;

  const { component = errorPage } = findComponentByPath(currentPath, routes) || {};

  component(state);

}

window.addEventListener('hashChange', router);
window.addEventListener('load', router);