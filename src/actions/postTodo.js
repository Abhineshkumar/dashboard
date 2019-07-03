import { ADD_TODO,ADD_TODO1, ADD_TODO2, UNCOMPLETE_TODO, DELETE_TODO, SEARCH_KEYWORD, EDIT_TODO } from './constants';

export const addTodo = (newTodo) => ({
  type: ADD_TODO,
  payload: newTodo,
});
export const getUsers = (newTodo) => ({
  type: ADD_TODO1,
  payload: newTodo,
});

export const userRegister = (todoId) => {
  console.log(todoId)
  return {
    type: ADD_TODO2,
    payload: todoId
  }
}

export const uncompleteTodo = (todoId) => ({
  type: UNCOMPLETE_TODO,
  payload: todoId
})

export const deleteTodo = (todoId) => ({
  type: DELETE_TODO,
  payload: todoId
})

export const searchKeyword = (keyword) => ({
  type: SEARCH_KEYWORD,
  payload: keyword
})

export const editTodo = (todo) => ({
  type: EDIT_TODO,
  payload: todo
})
