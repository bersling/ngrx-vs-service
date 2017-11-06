export const ADD_TODOS = 'ADD_TODOS';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

const INITIAL_FODOS = {};
(() => {
  for (let i = 0; i < 100; i++) {
    INITIAL_FODOS[i] = {
      title: `Fodo`,
      id: i
    };
  }
})();


export const fodosReducer = (state: {[x: string]: any} = INITIAL_FODOS, action) => {

  switch (action.type) {

    case ADD_TODOS:
      return action.todos;

    case REMOVE_TODO:
      const clonedState = Object.assign({}, state);
      delete clonedState[action.id];
      return clonedState;

    case UPDATE_TODO:
      const clonedState2 = Object.assign({}, state);
      clonedState2[action.fodo.id] = action.fodo;
      return clonedState2;

    default:
      return state;
  }

};
