const todo = (state = {}, action) => {
  
  switch (action.type) {

    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'DELETE_TODO':
      return {
        id: action.id,
        completed: false
      };
    case 'EDIT_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        completed: !state.completed
      });
    default:
      return state;

  }

};

const todos = (state = [], action) => {
  
  switch (action.type) {

    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'DELETE_TODO':
      return [
        ...state,
        todo(id, action)
      ];
    case 'EDIT_TODO':
      return [
        ...state,
        todo(id, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(todos =>
        todo(todos, action)
      );
    default:
      return state;

  }

};



export default todos;