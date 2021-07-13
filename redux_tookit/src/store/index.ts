import {
  compose,
  Middleware,
  createStore,
  Store,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const configure = () => {
  const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const composeEnhancers = devTools || compose;

  const middlewares: [Middleware] = [thunk];

  const store: Store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );
};
