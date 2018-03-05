import React from "react";
import { Provider } from "react-redux";

import currentStore from "../store/currentStore";

const storeProvider = Component => (
  <Provider store={currentStore}>
    <Component />
  </Provider>
);

export default storeProvider;
