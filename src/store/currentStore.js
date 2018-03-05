import configureStore from "./configureStore";

const initialState = {};

// The instance of the current store shared in the application.
const currentStore = configureStore(initialState);

export default currentStore;
