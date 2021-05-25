import {Meal} from '../../common/types';

type TState = {
  meal: Meal;
};

const initialState: {meal: Meal} = {
  meal: {
    idMeal: '',
    strMeal: '',
    strDrinkAlternate: null,
    strCategory: '',
    strArea: '',
    strInstructions: '',
    strMealThumb: '',
    strTags: null,
    strYoutube: '',
    strIngredient1: '',
    strIngredient2: '',
    strIngredient3: '',
    strIngredient4: '',
    strIngredient5: '',
    strIngredient6: '',
    strIngredient7: '',
    strIngredient8: '',
    strIngredient9: '',
    strIngredient10: '',
    strIngredient11: '',
    strIngredient12: '',
    strIngredient13: '',
    strIngredient14: '',
    strIngredient15: '',
    strIngredient16: '',
    strIngredient17: '',
    strIngredient18: '',
    strIngredient19: '',
    strIngredient20: '',
    strMeasure1: '',
    strMeasure2: '',
    strMeasure3: '',
    strMeasure4: '',
    strMeasure5: '',
    strMeasure6: '',
    strMeasure7: '',
    strMeasure8: '',
    strMeasure9: '',
    strMeasure10: '',
    strMeasure11: '',
    strMeasure12: '',
    strMeasure13: '',
    strMeasure14: '',
    strMeasure15: '',
    strMeasure16: '',
    strMeasure17: '',
    strMeasure18: '',
    strMeasure19: '',
    strMeasure20: '',
    strSource:
      'https://chefindisguise.com/2017/05/15/mulukhiyah-a-stew-fit-for-royals/',
    dateModified: null
  }
};

export function buttonReducer(
  state = initialState,
  action: {type: string; payload: Meal}
): TState {
  if (action.type === 'BUTTON_LOAD') {
    return {meal: action.payload};
  }

  return state;
}
