import * as c from './../actions/ActionType';

export default(state = {}, action) => {
  const { id } = action;

  switch(action.type) {

    case c.DELETE_ENTRY:
      let newState = { ...state};
      delete newState[id];
      return newState;
  default:
    return state;
  }
};