
export default function (state) {
  console.log('Listing')
  state.emitter.subscribe('event:render-listing', () => {
    console.log('Listing Started')
  })
}