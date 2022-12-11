import * as view from './filterView';
import filterModel from './filterModel'

export default async function (state) {

  if (!state.filter) state.filter = new filterModel();

  await state.filter.getParams();
  await state.filter.getResults();

  view.render(state.filter.params);
  view.changeButtonText(state.filter.result.length);

  const form = document.querySelector('#filter-form');
  form.addEventListener('change', function (event) {
    event.preventDefault();
    state.filter.query = view.getInput();
    state.filter.getResults();
    console.log("state.filter.query", state.filter.query)
  })



}