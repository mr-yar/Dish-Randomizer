import {compose, createStore} from 'redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState') as string)
  : {};

export const store = createStore(
/// / reducers
  persistedState,
  composeEnhancers()
);

store.subscribe(() => {
  localStorage.setItem(
    'reduxState',
    JSON.stringify(store.getState())
  );
});