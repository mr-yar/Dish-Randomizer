import {Meal} from '../reducers/buttonReducer';

export function buttonLoad(
  value: Meal
): {type: string; payload: Meal} {
  return {type: 'BUTTON_LOAD', payload: value};
}
