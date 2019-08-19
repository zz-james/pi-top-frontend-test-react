/* eslint-disable import/prefer-default-export */
/*
 * Function: getTodos
 * Description: Fetch todos from the todo api [Todo API](https://backend.pi-top.com/todo-test/v1/todos)
 */
export const getTodos = () => ({
  type: 'ASYNC_GET_TODOS',
  payload: fetch('https://backend.pi-top.com/todo-test/v1/todos')
    .then(response => response.json()),
});
