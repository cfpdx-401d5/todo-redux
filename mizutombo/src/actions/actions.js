// build Redux action creators ...

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  };
};

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  };
};

export const editTodo = (id, text) => {
  return {
    type: 'EDIT_TODO',
    id,
    text
  };
};

export const completeTodo = (id) => {
  return {
    type: 'COMPLETE_TODO',
    id
  };
};

export const completeAll = () => {
  return {
    type: 'COMPLETE_ALL',
  };
};

export const clearCompleted = () => {
  return {
    type: 'CLEAR_COMPLETED',
  }
};
