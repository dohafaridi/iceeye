import { USER_ID_CHANGED } from "../actions/userId";

const userId = (state = 0, action) => {
  switch (action.type) {
    case USER_ID_CHANGED:
      return action.id;
    default:
      return state;
  }
};

export default userId;
