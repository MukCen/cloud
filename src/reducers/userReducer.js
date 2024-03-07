const defaultState = {
  currentUser: {},
  isAuth: false,
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case Add_User:
      return { ...state, currentUser: action.payload, isAuth: true };
    default:
      return state;
  }
}

export const Add_User = (payload) => ({
  type: Add_User,
  payload,
});
