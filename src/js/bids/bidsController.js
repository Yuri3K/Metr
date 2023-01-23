import * as view from './../bids/bidsView';
import Bids from './../bids/bidsModel';

export default async function (state) {
  if (!state.bids) state.bids = new Bids();
  await state.bids.getBids();
  view.renderBids(state.bids.bids);
}