import {combineReducers, compose, createStore} from 'redux';
import {buttonReducer} from './reducers/buttonReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState') as string)
  : {};

export const rootReducer = combineReducers({buttonReducer});
export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers()
);

store.subscribe(() => {
  localStorage.setItem(
    'reduxState',
    JSON.stringify(store.getState())
  );
});
