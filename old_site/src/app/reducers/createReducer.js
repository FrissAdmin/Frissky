export default function (initialState, actions) {
  return (state = initialState, action) => {
    if (actions[action.type] !== undefined) {
      return actions[action.type](state, action);
    }

    return state;
  };
}
