import React from 'react';
import {useDispatch} from 'react-redux';
import {buttonLoad} from './redux/actions/actions';

import {Dish} from './components/Dish';

import './styles/main.sass';

function App(): JSX.Element {
  const dispatch = useDispatch();

  function buttonHandler() {
    return fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((result) => dispatch(buttonLoad(result)));
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">What to cook?</h1>
        <button
          type="button"
          className="btn"
          onClick={() => buttonHandler()}
        >
          Get recipe
        </button>
        <Dish />
      </div>
    </div>
  );
}

export default App;
