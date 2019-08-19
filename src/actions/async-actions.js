import * as C from '../constants/index';

/*
 * Function: getTodos
 * Description: Fetch todos from the todo api [Todo API](https://backend.pi-top.com/todo-test/v1/todos)
 */
export const getTodos = () => ({
  type: C.ASYNC_GET_TODOS,
  payload: fetch('https://backend.pi-top.com/todo-test/v1/todos')
    .then(response => response.json()),
});

/*
 * Function: getTodoDetail
 * Description: Fetch todos from the todo api [Todo API](https://backend.pi-top.com/todo-test/v1/todos/:id)
 */
export const getTodoDetail = id => ({
  type: C.ASYNC_GET_TODO_DETAILS,
  payload: fetch(`https://backend.pi-top.com/todo-test/v1/todos/${id}`)
    .then(response => response.json()),
});
