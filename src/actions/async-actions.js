/*
 * Function: getDog
 * Description: Fetch an image of a dog from the [Dog API](https://dog.ceo/dog-api/)
 */
const getDog = () => ({
  type: 'GET_DOG',
  payload: fetch('https://backend.pi-top.com/todo-test/v1/todos')
    .then(response => response.json()),
});

export default getDog;
