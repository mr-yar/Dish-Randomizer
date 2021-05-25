import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import categoryImg from '../../assets/svg/category.svg';
import ingredientImg from '../../assets/svg/ingredient.svg';
import areaImg from '../../assets/svg/area.svg';

export function Dish(): JSX.Element {
  const dish: any = useSelector(
    (state: RootState) => state.buttonReducer.meal
  );

  if (dish.idMeal === '') {
    return (
      <div className="container">
        <h1>Click button to get first recipe... </h1>
      </div>
    );
  }

  const area = dish.strArea;
  const category = dish.strCategory;
  const descr = dish.strInstructions;
  const dishImg = dish.strMealThumb;
  const link = dish.strYoutube;
  const name = dish.strMeal;

  const ingredients: {
    id: number;
    ingredientName: string;
    ingredientMeasure?: string;
  }[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredientName = dish[`strIngredient${i}`];
    const ingredientMeasure = dish[`strMeasure${i}`];

    const isIngredient = ingredientName !== null && ingredientName.trim() !== '';
    const isMeasure = ingredientMeasure !== null && ingredientMeasure.trim() !== '';

    if (isIngredient) {
      if (!isMeasure) {
        ingredients.push({
          id: i,
          ingredientName
        });
      }

      if (isMeasure) {
        ingredients.push({
          id: i,
          ingredientName,
          ingredientMeasure
        });
      }
    }
  }

  function setRecipe() {
    const recipe: JSX.Element[] = [];

    ingredients.forEach((item) => {
      if (item.ingredientMeasure) {
        recipe.push(
          <div className="recipe__ingredient" key={item.id}>
            {item.ingredientName}
            {' '}
            ‒
            {' '}
            <span>{item.ingredientMeasure}</span>
          </div>
        );
      }

      if (!item.ingredientMeasure) {
        recipe.push(
          <div className="recipe__ingredient" key={item.id}>
            {item.ingredientName}
          </div>
        );
      }
    });

    return recipe;
  }

  return (
    <div className="container">
      <div className="dish">
        <div className="brief">
          <div className="brief-elem">
            <img
              src={categoryImg}
              alt=""
              className="brief-elem__img"
            />
            <span className="brief-elem__text">{category}</span>
          </div>
          <div className="brief-elem">
            <img src={areaImg} alt="" className="brief-elem__img" />
            <span className="brief-elem__text">{area}</span>
          </div>
          <div className="brief-elem">
            <img
              src={ingredientImg}
              alt=""
              className="brief-elem__img"
            />
            <span className="brief-elem__text">
              {ingredients.length}
              {' '}
              ingredients
            </span>
          </div>
        </div>
        <div className="dish-main">
          <div className="dish-img-wrapper">
            <img src={dishImg} alt="" className="dish-img" />
          </div>

          <div className="dish-recipe">
            <h2 className="dish-recipe__name">{name}</h2>
            <div className="dish-recipe__ingredients">
              {setRecipe()}
            </div>
            <div className="dish-recipe__descr">
              <p>{descr}</p>
            </div>
          </div>
        </div>

        <a href={link} className="link">
          watch on youtube
        </a>
      </div>
    </div>
  );
}
