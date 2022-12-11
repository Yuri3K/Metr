import * as view from './filterView';
import filterModel from './filterModel'

export default async function (state) {

  if (!state.filter) state.filter = new filterModel();

  await state.filter.getParams();
  await state.filter.getResults();

  view.render(state.filter.params);
  view.changeButtonText(state.filter.result.length);

  const form = document.querySelector('#filter-form');
  form.addEventListener('change', async function (event) {
    event.preventDefault();
    state.filter.query = view.getInput();
    await state.filter.getResults();
    view.changeButtonText(state.filter.result.length);
    // console.log("state.filter.query", state.filter.query)
  })

  form.addEventListener('reset', async function () {
    state.filter.query = '';
    await state.filter.getResults();
    view.changeButtonText(state.filter.result.length);
  })


}