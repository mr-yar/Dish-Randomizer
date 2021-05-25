import React from 'react';
import {useDispatch} from 'react-redux';
import {buttonLoad} from '../../redux/actions';

export const Header = (): JSX.Element => {
  const dispatch = useDispatch();

  function buttonHandler() {
    return fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((result) => dispatch(buttonLoad(result.meals[0])));
  }

  return (
    <div className="container">
      <h1 className="title">What to cook?</h1>
      <button
        type="button"
        className="btn"
        onClick={() => buttonHandler()}
      >
        Get recipe
      </button>
    </div>
  );
};
