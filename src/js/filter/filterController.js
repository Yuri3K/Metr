import * as view from './../filter/filterView';
import Filter from './../filter/filterModel';

export default async function (state) {

  if (!state.filter) state.filter = new Filter;
  await state.filter.getParams();
  await state.filter.getResults();
  console.log(state)

  await view.render(state.filter.params);
  view.changeButtonText(state.filter.result.length)

  const form = document.querySelector('#filterForm')
  form.addEventListener('change', async (event) => {
    event.preventDefault();
    state.filter.query = view.getInput();
    await state.filter.getResults();
    view.changeButtonText(state.filter.result.length)
  })

  form.addEventListener('reset', async () => {
    state.filter.query = '';
    await state.filter.getResults();
    view.changeButtonText(state.filter.result.length)
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Submited');
    state.emitter.emit('event:render-listing', {})
  })
}