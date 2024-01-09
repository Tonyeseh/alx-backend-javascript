export default function handleResponseFromAPI(promise) {
  promise.then(() => ({
    status: 200,
    body: 'success',
  }), (reason) => {
    throw new Error();
  }).catch((reason) => reason)
    .finally((info) => console.log('Got a response from the API'));
}
