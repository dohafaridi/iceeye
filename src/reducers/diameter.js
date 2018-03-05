import { DIAMETER_VALUE_CHANGED } from "../actions/diameter";

const diameter = (state = 0, action) => {
  switch (action.type) {
    case DIAMETER_VALUE_CHANGED:
      return action.diameter;
    default:
      return state;
  }
};

export default diameter;
