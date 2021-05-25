import {Meal} from '../common/types';

export function buttonLoad(
  value: Meal
): {payload: Meal; type: string} {
  return {type: 'BUTTON_LOAD', payload: value};
}
