const Add_User = "Add_User";
const EXIT_USER = "EXIT_USER";

const defaultState = {
  currentUser: {},
  isAuth: false,
};

export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case Add_User:
      return { ...state, currentUser: action.payload, isAuth: true };
    case EXIT_USER:
      localStorage.removeItem("token");
      return { ...state, currentUser: {}, isAuth: false };

    default:
      return state;
  }
}

export const add_user = (user) => ({
  type: Add_User,
  payload: user,
});

export const exit_user = () => ({ type: EXIT_USER });
